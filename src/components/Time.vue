<template>
  <span>{{ formatted }}</span>
</template>

<script>
  import { DateTime } from 'luxon';
  export default {
    props: ['time', 'format'],
    computed: {
      derivedTime() {
        let t = null;
        if (this.time) {
          if (typeof this.time === 'object') {
            if (this.time.isLuxonDateTime) {
              t = this.time;
            } else {
              t = DateTime.fromObject(this.time);
            }
          } else if (isNaN(this.time)) {
            t = DateTime.fromISO(this.time);
            if (!t.isValid) {
              t = DateTime.fromFormat(this.time, "yyyy-MM-dd HH:mm:ss z");
            }
          } else {
            let n = parseInt(this.time);
            if ((n>20200000) && (n<20400000)) {
              t = DateTime.fromISO(this.time);
            } else {
              if (this.time > Date.now()/10) {
                t = DateTime.fromMillis(this.time);
              } else {
                t = DateTime.fromSeconds(this.time);
              }
            }
          }
        }
        return t;
      },
      formatted() {
        let r = null;
        if (this.derivedTime) {
          if (this.format=='caption') {
            r = this.formatCaption(this.derivedTime);
          } else if (this.format=='time-caption') {
            r = this.formatTimeCaption(this.derivedTime);
          } else {
            const f = this.format || "d MMM yyyy, HH:mm";
            r = this.derivedTime.toFormat(f);
          }
        }
        return r;
      }
    },
    methods: {
      formatCaption(t) {
        let r = null;
        let diff = DateTime.local().diff(t, 'days').toObject().days;
        if (diff<7) {
          if (diff<2) {
            let today = DateTime.local().startOf('day');
            r = (t>=today ? 'Today' : 'Yesterday');
          } else {
            r = t.toFormat('cccc');
          }
        } else {
          r = t.toFormat('ccc, d MMM');
        }
        return r;
      },
      formatTimeCaption(t) {
        let r = null;
        let diff = DateTime.local().diff(t, 'days').toObject().days;
        if (diff<1) {
          r = t.toFormat('h:mm a');
        } else {
          r = t.toFormat('ccc, h:mm a');
        }
        return r;
      },
    },
  };
</script>
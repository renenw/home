export default class EventInterpreter {

  constructor(event) {
    this.event = event;
  }

  // get types() {
  //   t = [];
  //   if (this.event.source.match(/alive/)) { t.push('alive'); }
  //   if (this.event.source.match(/^ping_/)) { t.push('alive'); }
  //   if []
  //   return t;
  // }

  get source() { return this.source; }

  caption() {
    let caption = this.event.source;
    switch (this.event.source) {
      case 'driveway_gate_alive': caption = 'Alive'; break
      case 'electricity_total': caption = 'Electricity'; break;
      case 'front_gate_alive': caption = 'Alive'; break
      case 'iot-relay': caption = 'Status'; break
      case 'ping_af_south_1': caption = 'Network'; break
      case 'ping_eu_west_1': caption = 'Network'; break
      case 'ping_us_east_1': caption = 'Network'; break
      case 'rain_gauge_alive': caption = 'Alive'; break
      case 'switcher_alive': caption = 'Alive'; break
      case 'temperature_outside': caption = 'Thermometer'; break
      case 'temperature_pool_alive': caption = 'Thermometer'; break
    }
    console.log(caption);
    return caption;
  }


}


// drive_way_gate_status
// driveway_gate_alive
// electricity_total
// front_gate_alive
// iot-relay
// ping_af_south_1
// ping_eu_west_1
// ping_us_east_1
// rain_gauge_alive
// switcher_alive
// temperature_outside
// temperature_pool_alive
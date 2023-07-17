export interface IWatering {
  id: number,
  name: string,
  flowSensor: string,
  pressureSensor: string,
  status: boolean,
  garden: {
    id: number,
    name: string
  }
}

export interface IWateringFilter {
  name: string
}


export class Watering implements IWatering {
  constructor(public id: number,
              public name: string,
              public flowSensor: string,
              public pressureSensor: string,
              public status: boolean,
              public garden: { id: number; name: string }) {}
}
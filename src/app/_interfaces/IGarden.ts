export interface IGarden {
  id?: number,
  name: string
}

export class Garden implements IGarden {
  constructor(public id: number,
              public name: string) {}
}

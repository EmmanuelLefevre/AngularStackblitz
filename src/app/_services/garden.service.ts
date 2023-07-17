import { Injectable } from '@angular/core';

import { Garden } from './../_interfaces/IGarden';


@Injectable({
  providedIn: 'root'
})

export class GardenService {

  gardens: Garden []=[];

  constructor() {
    let garden1: Garden = new Garden (1,'New-York');
    let garden2: Garden = new Garden (2,'Paris');

    this.gardens.push(garden1);
    this.gardens.push(garden2);

  }

  // Get List of Gardens
  getAllGardens():Garden[] {
    return this.gardens;
  }

}
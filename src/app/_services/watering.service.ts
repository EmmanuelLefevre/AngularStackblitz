import { Injectable } from '@angular/core';

import { Watering } from './../_interfaces/IWatering';


@Injectable({
  providedIn: 'root'
})

export class WateringService {
  
  waterings: Watering []=[];

  constructor() { 
    let watering1: Watering = new Watering (1,'Potager (N-Y)','1812','2.54',true,{id:1,name:'New-York'});
    let watering2: Watering = new Watering (2,'Pergola (N-Y)','4068','3.17',false,{id:1,name:'New-York'});
    let watering3: Watering = new Watering (3,'Massif (N-Y)','4130','2.57',false,{id:1,name:'New-York'});
    let watering4: Watering = new Watering (4,'Allée (Paris)','3547','3.74',false,{id:2,name:'Paris'});
    let watering5: Watering = new Watering (5,'Chemin (Paris)','4157','4.17',true,{id:2,name:'Paris'});
    let watering6: Watering = new Watering (6,'Terrasse (Paris)','2845','3.84',true,{id:2,name:'Paris'});
    let watering7: Watering = new Watering (7,'Jardinière (Paris)','2489','3.63',true,{id:2,name:'Paris'});
    let watering8: Watering = new Watering (8,'Potager (Paris)','4021','2.94',true,{id:2,name:'Paris'});
    let watering9: Watering = new Watering (9,'Terrasse (N-Y)','3954','1.48',true,{id:1,name:'New-York'});
    let watering10: Watering = new Watering (10,'Jardinière (N-Y)','3715','3.41',true,{id:1,name:'New-York'});

    this.waterings.push(watering1);
    this.waterings.push(watering2);
    this.waterings.push(watering3);
    this.waterings.push(watering4);
    this.waterings.push(watering5);
    this.waterings.push(watering6);
    this.waterings.push(watering7);
    this.waterings.push(watering8);
    this.waterings.push(watering9);
    this.waterings.push(watering10);
  }
  
  // Get List of Waterings
  getAllWaterings():Watering[] {
    return this.waterings;
  }
  
}

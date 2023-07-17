import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// Add ViewEncapsulation for resolve problems with loading custom scss .mat-tooltip-social in style.scss
import { faPowerOff, faPen, faTrash, faSort, faSearch, faDroplet, faXmark } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';

import { WateringService } from './_services/watering.service';
import { GardenService } from './_services/garden.service';
import { GardenFilterService } from './_services/garden-filter.service';

import { IWatering, IWateringFilter } from './_interfaces/IWatering';
import { IName } from './_interfaces/IName';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  
  faPowerOff = faPowerOff;
  faPen = faPen;
  faTrash = faTrash;
  faSort = faSort;
  faSearch = faSearch;
  faDroplet = faDroplet;
  faXmark = faXmark;

  name = environment.application.name;
  title = "Tableau arrosage";

  // Confirm Dialog this.result = boolean
  result: boolean | undefined;
  // updateStatus()
  status: boolean | undefined;
  // Ngx-pagination
  p: number = 1;
  count: number = 0;
  // Ngx-order
  orderHeader: String = '';
  isDescOrder: boolean = true;
  sort(headerName:String) {
    this.isDescOrder = !this.isDescOrder;
    this.orderHeader = headerName;
    this.resetPagination();
  }
  // Ngx-filter
  searchInput: IWateringFilter = { name: ''};
  // Filter by garden
  selectedGardenId: number | '' = '';
  gardens: IName[] = [];

  waterings: IWatering[] = [];
  filteredWaterings: IWatering[] = [];

  constructor(private wateringService: WateringService,
              private gardenService: GardenService,
              private gardenFilterService: GardenFilterService) {}

  ngOnInit(): void {
    this.fetchWaterings();
    this.fetchGardens();
  }

  // Recover Gardens
  fetchGardens() {
    this.gardens = this.gardenService.gardens;
  }

  // Display Waterings
  fetchWaterings() {
    this.waterings = this.wateringService.waterings;
    this.filterByGarden();
  }

  // Filter by garden
  filterByGarden(): void {
    const selectedGardenId = this.gardenFilterService.convertSelectedGardenId(this.selectedGardenId);
    this.filteredWaterings = this.gardenFilterService.filterByGarden(
      this.waterings,
      selectedGardenId,
      'id'
    );
    // Reset pagination
    this.resetPagination();
  }

  resetPagination(): void {
    this.p = 1;
  }

}

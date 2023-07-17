import { Directive, HostListener, Input, ElementRef } from '@angular/core';


@Directive({
  selector: '[searchInputReset]'
})

export class SearchInputResetDirective {

  @Input('searchInput') searchInput: any;

  constructor(private elementRef: ElementRef) {}

  /**
   * Reset search input to an empty string when click somewhere in the component unless if it's an order/filter/updateStatus method or a pagination click
   */
  @HostListener('document:click', ['$event.target']) onClick(target: HTMLElement) {
    const isSelect = this.elementRef.nativeElement.contains(target.closest('select.filter-select-garden'));
    // console.log("iSelect: ",isSelect);
    const isTh = this.elementRef.nativeElement.contains(target.closest('th.order'));
    // console.log("isTh: ",isTh);
    const isTd = this.elementRef.nativeElement.contains(target.closest('td.power'));
    // console.log("isTd: ",isTd);

    // 1 Return a value even if you click elsewhere than in the navigation

    // Return FALSE when clicking on pagination or anywhere in the component
    // const isPagination = this.elementRef.nativeElement.classList.contains('pagination');
    // const isPagination = target.closest('div.pagination') !== null;
    // const isPagination = target.classList.contains('pagination');
    
    // Switch between FALSE and TRUE when clicking in a different container in the component and keep FALSE value if you click several times in the navigation
    // const isPagination = target.querySelector('div.pagination') !== null;
    // const isPagination = target.querySelector('#pagination') !== null;
    
    
    // 2 Return TRUE only if you click on the navigation but on second element click
    // Return TRUE if you click a second time on the same page of the pagination and keep TRUE value even if you click several times on the same page
    const isPagination = this.elementRef.nativeElement.contains(target.closest('div.pagination'));

    console.log("isPagination: ",isPagination);
    
    if (!isSelect && !isTh && !isTd && !isPagination) {
      // Reset searchInput to an empty string
      this.searchInput.name = '';
    }

  }

}





// ----------------------------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------------------------- //




// import { Directive, HostListener, AfterViewInit, Input, ElementRef } from '@angular/core';


// @Directive({
//   selector: '[searchInputReset]'
// })

// export class SearchInputResetDirective implements AfterViewInit {

//   @Input('searchInput') searchInput: any;
//   originalSearchInput: any;

//   constructor(private elementRef: ElementRef,) {}

//   ngAfterViewInit() {
//     this.originalSearchInput = this.searchInput;
//   }

//   /**
//    * Reset search input to an empty string when click somewhere in the component unless if it's an order/filter/updateStatus method or a pagination click
//    */
//   @HostListener('document:click', ['$event.target']) onClick(target: HTMLElement) {
//     const isSelect = this.elementRef.nativeElement.contains(target.closest('select.filter-select-garden'));
//     const isTh = this.elementRef.nativeElement.contains(target.closest('th.order'));
//     const isTd = this.elementRef.nativeElement.contains(target.closest('td.power'));
//     const isPagination = target.closest('div.pagination') !== null;

//     if (!isSelect && !isTh && !isTd && (!isPagination && this.searchInput !== '')) {
//       this.searchInput = '';
//     }


//     if (!isSelect && !isTh && !isTd) {
//      // Reset searchInput to an empty string
//      this.searchInput.name = '';
//     }
//     else if (!isPagination && this.searchInput !== '') {
//      return;
//     }

// }




// ----------------------------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------------------------- //




// import { Directive, HostListener, AfterViewInit, Input, ElementRef } from '@angular/core';


// @Directive({
//   selector: '[searchInputReset]'
// })

// export class SearchInputResetDirective implements AfterViewInit {

//   @Input('searchInput') searchInput: any;
//   originalSearchInput: any;

//   constructor(private elementRef: ElementRef,) {}

//   ngAfterViewInit() {
//     this.originalSearchInput = this.searchInput;
//   }

//   /**
//    * Reset search input to an empty string when click somewhere in the component unless if it's an order/filter/updateStatus method or a pagination click
//    */
//   @HostListener('document:click', ['$event.target']) onClick(target: HTMLElement) {
//     const isSelect = this.elementRef.nativeElement.contains(target.closest('select.filter-select-garden'));
//     const isTh = this.elementRef.nativeElement.contains(target.closest('th.order'));
//     const isTd = this.elementRef.nativeElement.contains(target.closest('td.power'));
//     const isPagination = target.closest('div.pagination') !== null;

//     if (!isSelect && !isTh && !isTd && !isPagination) {
//       this.searchInput = '';
//     }
//     else {
//       this.searchInput = this.originalSearchInput;
//     }

//   }

// }




// ----------------------------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------------------------- //




// import { Directive, HostListener, Input, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
// import { NgModel } from '@angular/forms';


// @Directive({
//   selector: '[searchInputReset]'
// })

// export class SearchInputResetDirective implements AfterViewInit {

//   @Input('searchInput') searchInput: any;
//   @ViewChild(NgModel) ngModel!: NgModel;

//   constructor(private elementRef: ElementRef) {}

//   ngAfterViewInit() {
//     // Check if ngModel is set during ngOnInit
//     setTimeout(() => {
//       if (this.ngModel) {
//         this.ngModel.valueChanges.subscribe(() => {
//           // Reset the pattern value to an empty string
//           if (!this.ngModel.value === null && this.searchInput.name === '') {
//             this.searchInput.name = '';
//           }
//         });
//       }
//     });
//   }

//   /**
//    * Reset search input to an empty string when click somewhere in the component unless if it's an order/filter/updateStatus method or a pagination click
//    */
//   @HostListener('document:click', ['$event.target']) onClick(target: HTMLElement) {
//     const isSelect = this.elementRef.nativeElement.contains(target.closest('select.filter-select-garden'));
//     const isTh = this.elementRef.nativeElement.contains(target.closest('th.order'));
//     const isTd = this.elementRef.nativeElement.contains(target.closest('td.power'));
//     const isPagination = target.closest('.pagination-container') !== null;

//     if (!isSelect && !isTh && !isTd && (!isPagination && this.searchInput.name == '')) {
//       this.searchInput.name = '';
//       if (this.ngModel) {
//         this.ngModel.reset('');
//       }
//     }
//   }

// }

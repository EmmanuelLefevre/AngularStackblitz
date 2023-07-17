import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';


@Directive({
  selector: '[cancelSearchInputReset]'
})

export class CancelSearchInputResetDirective {

  @Input('pagination') isPagination: any;

  constructor() { }

  /**
   * Cancel search input reset on pagination event
   */
  @HostListener('pageChange', ['$event']) pageChanged(event: any) {
    console.log('event: ', event);
  }

}


// import { Directive, HostListener, Input } from '@angular/core';


// @Directive({
//   selector: '[cancelSearchInputReset]'
// })

// export class CancelSearchInputResetDirective {

//   @Input('searchInput') searchInput: any;

//   constructor() { }

//   /**
//    * Cancel search input reset on pagination event
//   */
//   @HostListener('pageChange', ['$event']) onClick(target: HTMLElement) {
//     const isPagination = target.closest('.pagination') !== null;

//     if (!isPagination && this.searchInput.name == '') {
//         this.searchInput.name = '';
//     }
//   }

// }

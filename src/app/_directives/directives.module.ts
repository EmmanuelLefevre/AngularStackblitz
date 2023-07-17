import { NgModule } from '@angular/core';

import { CancelSearchInputResetDirective } from './cancelSearchInputReset/cancel-search-input-reset.directive';
import { SearchInputResetDirective } from './searchInputReset/search-input-reset.directive';


@NgModule({
  declarations: [	
    CancelSearchInputResetDirective,
    SearchInputResetDirective
   ],
  exports: [
    CancelSearchInputResetDirective,
    SearchInputResetDirective
  ]
})

export class DirectivesModule { }
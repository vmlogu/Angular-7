import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AutoFocusDirective } from './directives/tree-view-autofocus.directive';
import { DragElementDirective } from './directives/tree-view-drag.directive';
import { DropElementDirective } from './directives/tree-view-drop.directive';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { ChildTreeViewComponent } from './child-tree-view/child-tree-view.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faPlus, faEdit, faMinus, faTimes, faCheck, faArrowDown } from '@fortawesome/free-solid-svg-icons';

library.add(faCoffee, faPlus, faEdit, faMinus, faTimes, faCheck, faArrowDown );

@NgModule({
  imports: [ 
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  declarations: [
    AutoFocusDirective,
    DragElementDirective,
    DropElementDirective,
    TreeViewComponent,
    ChildTreeViewComponent
  ],
  exports: [
    AutoFocusDirective,
    DragElementDirective,
    DropElementDirective,
    TreeViewComponent,
    ChildTreeViewComponent
  ]
})
export class TreeViewModule { }

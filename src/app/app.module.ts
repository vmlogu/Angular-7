import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { TreeViewComponent } from './tree-view/tree-view.component';
// import { ChildTreeViewComponent } from './child-tree-view/child-tree-view.component';
import { TreeViewModule } from './tree-view.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TreeViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  title = 'Angular 7 Tree'
}

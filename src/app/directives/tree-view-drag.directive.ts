
import { Directive, ElementRef, HostListener, Input, HostBinding } from '@angular/core';
import { TreeModel } from  '../models/tree-view.model'
import { TreeService } from '../tree-view.service';

@Directive({
  selector: '[DragElement]'
})
export class DragElementDirective {
    constructor(private el: ElementRef, private  treeService: TreeService) {}
    @Input() item: TreeModel;
    @Input() draggableValue: boolean;

    @HostBinding('draggable')
    get draggable() {
        return this.draggableValue;
     }

    /*
        Event: ondragstart;
        Set item as dragging and call startDragging() from tree service.
        Emit OnDragStart on tree service.
    */
    @HostListener('dragstart', ['$event'])
    onDragStart(event: Event) {
      const eventObj = {
        event,
        target: this.item
      };
      this.treeService.isDragging = this.item;
      this.treeService.lastExpandState = this.item.options.hideChildrens;
      this.item.options.hideChildrens = true;
      this.item.options.currentlyDragging = true;
      // call service func
      this.treeService.startDragging(eventObj);
      event.stopPropagation();
    }

    /*
        Event: onDrag;
        trigger drag items and call onDragProcess() from tree service.
        Emit OnDrag on tree service.
    */
    @HostListener('drag', ['$event'])
    onDrag(event: Event) {
      const eventObj = {
        event,
        target: this.item
      };
      this.treeService.onDragProcess(eventObj);
    }

    /*
        Event: ondragend;
        Call dragEndAction() from tree service.
        Emit OnDragEnd on tree service.
    */
    @HostListener('dragend', ['$event'])
    onDragEnd(event: Event) {
      const eventObj = {
        event,
        target: this.item
      };
      this.item.options.hideChildrens = this.treeService.lastExpandState;
      this.item.options.currentlyDragging = false;
      this.treeService.dragEndAction(eventObj);
      event.stopPropagation();
    }
}
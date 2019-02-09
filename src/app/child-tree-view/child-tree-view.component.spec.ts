import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTreeViewComponent } from './child-tree-view.component';

describe('ChildTreeViewComponent', () => {
  let component: ChildTreeViewComponent;
  let fixture: ComponentFixture<ChildTreeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildTreeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildTreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

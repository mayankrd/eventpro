import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCreatedEventsComponent } from './list-created-events.component';

describe('ListCreatedEventsComponent', () => {
  let component: ListCreatedEventsComponent;
  let fixture: ComponentFixture<ListCreatedEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCreatedEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCreatedEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

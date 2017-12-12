import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalEventsComponent } from './local-events.component';

describe('LocalEventsComponent', () => {
  let component: LocalEventsComponent;
  let fixture: ComponentFixture<LocalEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

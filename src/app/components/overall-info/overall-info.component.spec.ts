import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallInfoComponent } from './overall-info.component';

describe('OverallInfoComponent', () => {
  let component: OverallInfoComponent;
  let fixture: ComponentFixture<OverallInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverallInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

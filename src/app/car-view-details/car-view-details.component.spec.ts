import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarViewDetailsComponent } from './car-view-details.component';

describe('CarViewDetailsComponent', () => {
  let component: CarViewDetailsComponent;
  let fixture: ComponentFixture<CarViewDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarViewDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarViewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

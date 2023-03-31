import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCarDetailsComponent } from './show-car-details.component';

describe('ShowCarDetailsComponent', () => {
  let component: ShowCarDetailsComponent;
  let fixture: ComponentFixture<ShowCarDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCarDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

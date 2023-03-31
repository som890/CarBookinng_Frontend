import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCarImagesDialogComponent } from './show-car-images-dialog.component';

describe('ShowCarImagesDialogComponent', () => {
  let component: ShowCarImagesDialogComponent;
  let fixture: ComponentFixture<ShowCarImagesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCarImagesDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCarImagesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

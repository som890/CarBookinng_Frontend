import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ShowCarImagesDialogComponent } from '../show-car-images-dialog/show-car-images-dialog.component';
import { Car } from '../_model/car.model';
import { CarService } from '../_services/car.service';
import { ImageProcessingService } from '../_services/image-processing.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-car',
  templateUrl: './delete-car.component.html',
  styleUrls: ['./delete-car.component.css']
})
export class DeleteCarComponent implements OnInit{
  pageNumber: number = 0;
  showLoadMoreCarButton = false;
  carDetails: Car[] = []
  showTable = false;
  displayedColumns: string[] = ['Id', 'Make', 'Model', 'Year', 'Transmission', 'Tuel Type', 'DailyRentalPrice', 'description','Actions'];
  
  public getAllCars(searchKey:string= "") {
    this.showTable = false;
    this.carService.getAllCars(this.pageNumber,searchKey)
      .pipe(
        map((x: Car[], i) => x.map((car: Car) => this.imageProcessingService.createImages(car)))
      )
      .subscribe(
        (resp: Car[]) => {
          console.log(resp);
          resp.forEach(car => this.carDetails.push(car))
          this.carDetails = resp;
         this.showTable = true;

         if(resp.length == 12) {
          this.showLoadMoreCarButton = true;
         }else {
          this.showLoadMoreCarButton = false;
         }
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
  }

  constructor(private carService: CarService,
    public dialog: MatDialog,
    
    private imageProcessingService: ImageProcessingService,
    private router: Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  deleteCar(id: number) {
    this.carService.deleteCar(id).subscribe(
      (resp) => {
        console.log(resp);
        this.getAllCars();
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    )
  }
}


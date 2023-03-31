import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ShowCarImagesDialogComponent } from '../show-car-images-dialog/show-car-images-dialog.component';
import { Car } from '../_model/car.model';
import { CarService } from '../_services/car.service';
import { ImageProcessingService } from '../_services/image-processing.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { DeleteCarComponent } from '../delete-car/delete-car.component';


@Component({
  selector: 'app-show-car-details',
  templateUrl: './show-car-details.component.html',
  styleUrls: ['./show-car-details.component.css']
})
export class ShowCarDetailsComponent implements OnInit {
  pageNumber: number = 0;
  showLoadMoreCarButton = false;
  carDetails: Car[] = []
  showTable = false;
  displayedColumns: string[] = ['Id', 'Make', 'Model', 'Year', 'Transmission', 'Tuel Type', 'DailyRentalPrice', 'description','Actions'];

  constructor(private carService: CarService,
    public dialog: MatDialog,
    
    private imageProcessingService: ImageProcessingService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllCars();
  }
  searchByKeyWord(searchKeyWord:any) {
    console.log(searchKeyWord);
    this.pageNumber = 0;
    this.carDetails = [];
    this.getAllCars(searchKeyWord);
  }

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

  showImages(car: Car) {
    console.log(car);
    this.dialog.open(ShowCarImagesDialogComponent, {
      data: {
        images: car.carImages
      },
      height: '400px',
      width: '650px'
    });
  }
  showDialogDeleteCar() {
    this.dialog.open(DeleteCarComponent, {
      height: '200px',
      width: '300px'
    })
  }
  editCarDetails(id: any) {
    console.log(id);
    this.router.navigate(['/addcar',{id:id}]);
  }
  loadMoreCar() {
     this.pageNumber = this.pageNumber+ 1;
     this.getAllCars();
  }
}

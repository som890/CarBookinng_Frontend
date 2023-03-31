import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Car } from '../_model/car.model';
import { CarService } from '../_services/car.service';
import { ImageProcessingService } from '../_services/image-processing.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  content?: string;
  carDetails: Car[] = []
  pageNumber: number = 0;
  showLoadButton = false;

  constructor(private userService: UserService, 
              private carService: CarService, 
              private imageProcessingService: ImageProcessingService,
              private router: Router) { }

  ngOnInit(): void {
    this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
    this.getAllCars();
  }

  public getAllCars(searchKey: string = "") {
    this.carService.getAllCars(this.pageNumber,searchKey)
      .pipe(
        map((x: Car[], i) => x.map((car: Car) => this.imageProcessingService.createImages(car)))
      )
      .subscribe(
        (resp: Car[]) => {

          console.log(resp);
          if(resp.length == 12) {
            this.showLoadButton = true;
          }else {
            this.showLoadButton = false;
          }
           resp.forEach(p => this.carDetails.push(p));
         // this.carDetails = resp;
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
  }
  showCar(id:any) {
    this.router.navigate(['/carView', {id:id}]);
  }
  loadMoreCar() {
    this.pageNumber = this.pageNumber + 1;
    this.getAllCars();
  }
  searchByKeyWord(searchKeyWord:any) {
    console.log(searchKeyWord);
    this.pageNumber = 0;
    this.carDetails = [];
    this.getAllCars(searchKeyWord);
  }
}

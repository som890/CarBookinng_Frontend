import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../_model/car.model';
import { CarService } from '../_services/car.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-car-view-details',
  templateUrl: './car-view-details.component.html',
  styleUrls: ['./car-view-details.component.css']
})
export class CarViewDetailsComponent implements OnInit{
  car: any;
  selectedCarIndex= 0; 
   isLoggedIn = true;

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
              private carService: CarService,
              private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    
    this.car = this.activatedRoute.snapshot.data['car'];
    console.log(this.car);
  }
  changeIndex(index:any) {
     this.selectedCarIndex = index;
  }

  bookCarNow(carId:any) {
    if(this.isLoggedIn){
      this.router.navigate(['/bookCar',{
       isSingleCarCheckOut: true, id: carId
        }]);
     }else {
        this.router.navigate(['/login'])
      }
  }
  addToCart(id: any) {
    console.log(id);
    this.carService.addToCart(id).subscribe(
      (resp) => {
        console.log(resp);
      },
      (error) => {
        console.log(error);
      }
    )
  }

}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of} from 'rxjs';
import { map } from 'rxjs/operators';
import { Car } from '../_model/car.model';
import { CarService } from './car.service';
import { ImageProcessingService } from './image-processing.service';

@Injectable({
  providedIn: 'root'
})
export class CarResolveService implements Resolve<Car> {

  constructor(private carService: CarService, private imageProcessingService: ImageProcessingService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<Car> {

      const id = route.paramMap.get("id");

      if (id) {
        return this.carService.getCarDetailsById(id)
        .pipe(
          map(p => this.imageProcessingService.createImages(p))
        );
      } else 
        return of(this.getCarDetails());
     
  }
  getCarDetails() {
    return {
      // id:null,
      make: "",
      model: "",
      year: "",
      transmission: "",
      fuelType: "",
      dailyRentalPrice: 0,
      description: "",
      carImages: []
    };
  }
}

  

import { HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Component, OnInit, Sanitizer } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../_model/car.model';
import { FileHandle } from '../_model/file-handle.model';
import { CarService } from '../_services/car.service';
@Component({
  selector: 'app-add-new-car',
  templateUrl: './add-new-car.component.html',
  styleUrls: ['./add-new-car.component.css']
})
export class AddNewCarComponent implements OnInit {
  isNewCar = true;

  car: Car = {
    id: null,
    make: "",
    model:"",
    year: "",
    transmission:"",
    fuelType:"",
    dailyRentalPrice:0,
    description:"",
    carImages:[]
  }
  constructor(private carService: CarService, private sanitizer: DomSanitizer,
      private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.car = this.activatedRoute.snapshot.data['car'];
    if(this.car && this.car.id) {
      this.isNewCar = false;
    }

  }
  addCar(carForm: NgForm) {
    const carFormData = this.prepareFormData(this.car)

    this.carService.addCar(carFormData).subscribe(
      (respone: Car) => {
       carForm.reset();
      },
      (error : HttpErrorResponse) => {
        console.log(error);
      }
    )
  }

    prepareFormData(car: Car): FormData {
      const formData = new FormData();
      formData.append(
        'car', 
        new Blob([JSON.stringify(car)], {type: 'application/json'})
      );

      for(var i = 0; i < car.carImages.length;i++) {
        formData.append(
          'imageFile', 
          car.carImages[i].file,
          car.carImages[i].file.name
        );

      }
      return formData;
    }

  onFileSelected(event:any) {
    if(event.target.files) {
      const file = event.target.files[0];

      const fileHandle: FileHandle ={
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        )
      }

      this.car.carImages.push(fileHandle);
    }
  }
  removeImages(i:number) {
    this.car.carImages.splice(i, 1);
  }
 
}

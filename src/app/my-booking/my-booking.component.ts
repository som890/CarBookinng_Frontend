import { Component, OnInit } from '@angular/core';
import { MyBooking } from '../_model/my-booking.model';
import { CarService } from '../_services/car.service';
@Component({
  selector: 'app-my-booking',
  templateUrl: './my-booking.component.html',
  styleUrls: ['./my-booking.component.css']
})
export class MyBookingComponent implements  OnInit{

  displayedColumns: string[] = ['Name', 'Addrress','Contact','Status','Amount','Start date','End date'];

  myBookingDetails : MyBooking[] =[]

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.getMyBooking();
  }
  getMyBooking() {
    this.carService.getMyBooking().subscribe(
      (resp: MyBooking[]) => {
        console.log(resp);
        this.myBookingDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    )
  }

}

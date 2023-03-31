import { Component, OnInit } from '@angular/core';
import { MyBooking } from '../_model/my-booking.model';
import { CarService } from '../_services/car.service';

@Component({
  selector: 'app-booking-information',
  templateUrl: './booking-information.component.html',
  styleUrls: ['./booking-information.component.css']
})
export class BookingInformationComponent implements OnInit{
  displayedColumns: string[] = ['Id', 'Car name', 'Name', 'Address','Contact','Status','Action'];
  
  dataSource: MyBooking[] = [];
  status: string  ='All';
  
  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.getAllBookingDetailsForAdmin(this.status);
  }

  getAllBookingDetailsForAdmin(statusParameter:any) {
    this.carService.getAllBookingDetailsForAdmin(statusParameter).subscribe(
      (resp) => {
        this.dataSource = resp;
        console.log(resp);
      },
      (error) => {
        console.log(error);
      }
    )
  }
  markAsDelivered(id:any) {
    console.log(id);
    this.carService.markAsDeliverd(id).subscribe(
      (resp) => {
       this.getAllBookingDetailsForAdmin(this.status);
       //this.dataSource = resp;
        console.log(resp);
      },
      (error) =>
      {
        console.log(error)
      }
    )
  }

}

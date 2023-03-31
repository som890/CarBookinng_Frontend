import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../_model/booking.model';
import { Car } from '../_model/car.model';
import { MyBooking } from '../_model/my-booking.model';

const CAR_URL = "http://localhost:8080/car"
@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  public markAsDeliverd(id:any) {
    return this.http.get('http://localhost:8080/order/markBookingAsDelivered/'+ id);
  
  }
  addCar(car: FormData) {
    return this.http.post<Car>('http://localhost:8080/car/add', car)
  }
  public getAllCars(pageNumber:any, searchKey: string = "") {
    return this.http.get<Car[]>(CAR_URL+ "/get?pageNumber="+ pageNumber+"&searchKey="+searchKey);
  }
  public deleteCar(id:number) {
    return this.http.delete<Car>(CAR_URL+"/delete/"+ id);
  }
  public getCarDetailsById(id: any) {
    return this.http.get<Car>("http://localhost:8080/car/get/"+id)
  }

  public getCarDetails(isSingleCarCheckOut:any,id:any ) {
    return this.http.get<Car[]>('http://localhost:8080/car/getCarDetails/'+isSingleCarCheckOut+"/"+id)
    
  }
  public doBooking(booking: Booking) {
    return this.http.post('http://localhost:8080/order/booking', booking);
  }
  public addToCart(id: any) {
    return this.http.get('http://localhost:8080/addToCart/'+ id);;
  
  }
  public getCartDetails() {
    return this.http.get('http://localhost:8080/getCarDetails');;
  }

  public getMyBooking():Observable<MyBooking[]> {
    return this.http.get<MyBooking[]>('http://localhost:8080/order/getBookingDetails');
  }
  
  public getAllBookingDetailsForAdmin(status: any):Observable<MyBooking[]> {
    return this.http.get<MyBooking[]>('http://localhost:8080/order/getAllBookingDetails'+status);
  }
}

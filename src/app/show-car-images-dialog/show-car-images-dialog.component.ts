import { Component,Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FileHandle } from '../_model/file-handle.model';

@Component({
  selector: 'app-show-car-images-dialog',
  templateUrl: './show-car-images-dialog.component.html',
  styleUrls: ['./show-car-images-dialog.component.css']
})
export class ShowCarImagesDialogComponent implements OnInit{
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.receiceImages();
  }

  receiceImages() {
    console.log(this.data)
  }
 

}


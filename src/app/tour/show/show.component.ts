import {Component, OnInit} from '@angular/core';
import {TourService} from "../../service/tour.service";
import {Tour} from "../../model/tour";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit{
  tours: Tour[] = [];

  constructor(private tourService: TourService) {
    this.findAll();
  }

  ngOnInit() {
  }

  findAll(){
    this.tourService.findAll().subscribe(data => {
      this.tours = data;
      console.log(this.tours)
    },error => {
      alert("loi")
    })
  }
}

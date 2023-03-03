import {Component, OnInit} from '@angular/core';
import {Tour} from "../../model/tour";
import {TourService} from "../../service/tour.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-showtour',
  templateUrl: './showtour.component.html',
  styleUrls: ['./showtour.component.css']
})
export class ShowtourComponent implements OnInit{
  index: any;
  newTour!: Tour;
  constructor(private tourService: TourService,private route: ActivatedRoute, private router: Router) {
  }
  ngOnInit(): void {
    this.index =this.route.snapshot.paramMap.get("id");
    this.tourService.showDetail(this.index).subscribe((data) => this.newTour =data);
    this.router.navigate(['/showdetail']);
  }



}

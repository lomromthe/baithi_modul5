import {Component, OnInit} from '@angular/core';
import {TourService} from "../../service/tour.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Tour} from "../../model/tour";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit{
  id!: any;
  constructor(private tourService: TourService,private route: ActivatedRoute ,private router: Router) {
  }

  tours: Tour[] = [];
  ngOnInit() {
    this.id =this.route.snapshot.paramMap.get("id");
    this.tourService.delete(this.id).subscribe(data => {this.tours = data});
    this.tourService.findAll().subscribe(data => {this.tours = data},error => {alert("loi")});
    this.router.navigate(['']);
  }
}

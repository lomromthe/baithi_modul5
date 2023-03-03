import {Component, OnInit} from '@angular/core';
import {Tour} from "../../model/tour";
import {HttpClient} from "@angular/common/http";
import {TourService} from "../../service/tour.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{
  tours: Tour[] = [];
  ngOnInit() {
  }
  constructor(private http: HttpClient,private tourService:TourService, private route: ActivatedRoute, private router: Router) {
  }

  formCreate: FormGroup = new FormGroup<any>({
    id: new FormControl(""),
    title: new FormControl(""),
    price: new FormControl(""),
    description: new FormControl(""),
  })

  createProduct() {
    this.tourService.create(this.formCreate.value).subscribe(data =>{this.tours = data});
    this.tourService.findAll().subscribe(data => {this.tours = data},error => {alert("loi")});
    this.router.navigate(['']);
  }
}

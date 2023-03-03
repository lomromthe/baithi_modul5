import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Tour} from "../../model/tour";
import {TourService} from "../../service/tour.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  index: any;
  formEdit !: FormGroup;

  tours: Tour[] = [];

  newTour: Tour | undefined;
  constructor(private tourService: TourService,private route: ActivatedRoute, private router: Router) {
  }
  ngOnInit() {
    this.index =this.route.snapshot.paramMap.get("id");
    if(this.index != null){
      this.tourService.findById(this.index).subscribe(data => {this.newTour = data;
        this.formEdit= new FormGroup({
          id : new FormControl(this.newTour?.id),
          title : new FormControl(this.newTour?.title),
          price : new FormControl(this.newTour?.price),
          description : new FormControl(this.newTour?.description)
        })
      })

    }
  }

  createEdit(){
    this.index =this.route.snapshot.paramMap.get("id");
      this.tourService.edit(this.index,this.formEdit.value).subscribe();
 this.router.navigate(['']);
  }
}

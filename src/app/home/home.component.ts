import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
//import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService} from './../api.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  religionDrop: any = [];
  motherTongue: any = [];
  otherDrop: any = [];
  isGenderEnable: boolean = true;
  emp : any = [];
  newnew:Number;
  constructor(private ApiService: ApiService , private router: Router, private _flashMessagesService: FlashMessagesService, public datepipe: DatePipe) { }

  ngOnInit() {
    this.getReligion();
    this.getMotherTongue();

    this.emp = [
                {Id:1,Name:'aaa'},
                {Id:2,Name:'bbb'},
                {Id:3,Name:'ccc'}
              ]


  }

  //get.uLooking(){}

  getReligion(){
  this.ApiService.getReligion()
  .subscribe(
  data => {
    //console.log(data);
    if (data['status'] === 1) {
      delete data['status'];
      delete data['message'];  
          
       this.religionDrop = data['data'];
 
    } else {
      this._flashMessagesService.show(data['message'], { cssClass: 'alert-danger' });
    }
  },
  error => {
    this._flashMessagesService.show('Error in the Data/Server', { cssClass: 'alert-danger' });
  });
  }

  getMotherTongue(){
    this.ApiService.getMothertongue()
    .subscribe(
    data => {
      //console.log(data);
      if (data['status'] === 1) {
        delete data['status'];
        delete data['message'];  
            
        console.log(data['data']);
        this.motherTongue = data['data'];
   
      } else {
        this._flashMessagesService.show(data['message'], { cssClass: 'alert-danger' });
      }
    },
    error => {
      this._flashMessagesService.show('Error in the Data/Server', { cssClass: 'alert-danger' });
    });
    }


   searchSbumit(emp)
   {
    console.log("yes");
    console.log(emp);
    
    //console.log(form.control['uLooking'].value);

    //console.log(this.firstFormGroup);
    //console.log('ttt----'+this.firstFormGroup['uLooking'].value);
    
   }

   checkValue(form: NgForm)
   {
     console.log("yes");
     //console.log(this.['depar'].value);
   }
}

import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService} from './../api.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { NgForm } from '@angular/forms';
import { User } from '../user';


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
  user = new User();

  lookingArr: any = [{'name' : 'Men'}, {'name' : 'Women'}];
  ageArr: any = ['18', '19', '20', '21', '22', '23', '24', '25'];
  constructor(private ApiService: ApiService ,
    private router: Router,
    private _flashMessagesService: FlashMessagesService,
    public datepipe: DatePipe) { }

  ngOnInit() {
    this.getReligion();
    this.getMotherTongue();


  }



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


   searchSbumit(user: User): void{
    console.log("yes");
    console.log(user);
    this.router.navigate([`/list`], { queryParams: {'uLooking'     : user.uLooking,
                                                    'ageFrom'      : user.ageFrom,
                                                    'ageTo'        : user.ageTo,
                                                    'religion'     : user.religion,
                                                    'motherTongue' : user.motherTongue}});


  }
}

import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from './User';
import { FormArray } from '@angular/forms/src/model';
import { ApiService} from './../api.service';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  
  private user:User;
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  createProfileDropdown: any = [];
  profileDrop: any = [];
  otherDrop: any = [];
  isGenderEnable: boolean = true;
  motherTonguDropdown: any = {};
  

  constructor(private _formBuilder:FormBuilder,  private ApiService: ApiService , private router: Router, private _flashMessagesService: FlashMessagesService, public datepipe: DatePipe) { }

  ngOnInit() {

    this.getProfilefor();
    this.getMotherTongu();
    

    this.firstFormGroup = this._formBuilder.group({
      uFName: ['', Validators.required],
      uEmail: ['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      uPsaaword: ['',Validators.required],
      uDateBirth: ['', Validators.required],
      uGender:  ['male', Validators.required],
      uProfileFor: ['', Validators.required],
      uMobilNo: ['', Validators.required]
      
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    
    
  }
  get uFName() { return this.firstFormGroup.get('uFName'); } 
  get uEmail() { return this.firstFormGroup.get('uEmail'); } 
  get uPsaaword() { return this.firstFormGroup.get('uPsaaword');} 
  get uMobilNo() { return this.firstFormGroup.get('uMobilNo'); }
  get uGender() { return this.firstFormGroup.get('uGender'); }
  get uProfileFor() { return this.firstFormGroup.get('uProfileFor'); }
  get uDateBirth() { return this.firstFormGroup.get('uDateBirth'); }

 profilefor(e){
   console.log(e);
   if(e ==1 || e ==7 || e ==8 ){
    
    this.isGenderEnable= false;
   }else{
    this.isGenderEnable= true;
    if(e==2 || e == 4){      
      this.firstFormGroup.controls['uGender'].setValue('male');      
    }else{
      this.firstFormGroup.controls['uGender'].setValue('female'); 
    }
   
   }
   
 }
 firstSbumit(){
    
   if(this.firstFormGroup.invalid){
     return;
   }
   
   let latest_date =this.datepipe.transform(this.firstFormGroup.value['uDateBirth'], 'yyyy-MM-dd');
   console.log(latest_date);
   this.firstFormGroup.controls['uDateBirth'].setValue(latest_date); 
   this.ApiService.register(this.firstFormGroup.value)
      .subscribe(
      data => {
        console.log(data);
        if (data['status'] === 'success') {
          delete data['status'];
          delete data['message'];
          this.ApiService.setLocalSession(data, 'currentUser');
          this._flashMessagesService.show('Successfully Register, Please check your email account', { cssClass: 'alert-success' });          
          //this.router.navigate(['user-dashboard']);
          
        } else {
          this._flashMessagesService.show(data['message'], { cssClass: 'alert-danger' });
        }
      },
      error => {
        this._flashMessagesService.show('Error in the Data/Server', { cssClass: 'alert-danger' });
      });
 }
 getMotherTongu(){
  this.ApiService.getMotherTongu()
  .subscribe(
  data => {
    //console.log(data);
    if (data['status'] === 1) {
      delete data['status'];
      delete data['message'];   
      console.log(data['data']);           
      this.motherTonguDropdown = data['data'];     
                
     }
       
     
    
  },
  error => {
    this._flashMessagesService.show('Error in the Data/Server', { cssClass: 'alert-danger' });
  });
 }
 getProfilefor(){
  this.ApiService.getProfilefor()
  .subscribe(
  data => {
    //console.log(data);
    if (data['status'] === 1) {
      delete data['status'];
      delete data['message'];   
      //console.log(data['data']);           
       this.createProfileDropdown = data['data'];
       for(let o of this.createProfileDropdown){
        if(o.mst_pfor_detail != 'Other' && this.isEmpty(o.Other)){
        this.profileDrop.push(o);
        }
        if(!this.isEmpty(o.Other)){
          //for(let child of o.Other){
            this.otherDrop.push(o.Other);
          //}
        }
        
     }
       
     console.log(this.otherDrop); 
    //.log(this.profileDrop); 
    } else {
      this._flashMessagesService.show(data['message'], { cssClass: 'alert-danger' });
    }
  },
  error => {
    this._flashMessagesService.show('Error in the Data/Server', { cssClass: 'alert-danger' });
  });
 }

 isEmpty(obj) {
  for(var key in obj) {
      if(obj.hasOwnProperty(key))
          return false;
  }
  return true;
}
}

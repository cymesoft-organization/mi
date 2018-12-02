import { Component, OnInit } from '@angular/core';
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
  
  loginForm: FormGroup; 
  private user:User;
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  createProfileDropdown: any = [];
  profileDrop: any = [];
  otherDrop: any = [];
  isGenderEnable: boolean = true;
  genders: string[] = ['male', 'female'];

  constructor(private _formBuilder:FormBuilder,  private ApiService: ApiService , private router: Router, private _flashMessagesService: FlashMessagesService) { }

  ngOnInit() {

    this.getProfilefor();
    this.loginForm  = this._formBuilder.group({
      email: ['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      phone: ['',[Validators.required]],
      first_name: ['',[Validators.required]],
      last_name: ['', [Validators.required]],          
          
  })

    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['',Validators.required],
      dob: ['', Validators.required],
      create_profile_for: ['', Validators.required],
      mobile: ['', Validators.required],
      gender:  ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    
    
  }

  get email() { return this.loginForm.get('email'); } 
  get password() { return this.loginForm.get('password');} 
  get phone() { return this.loginForm.get('phone'); }
  get first_name() { return this.loginForm.get('first_name'); }
  get last_name() { return this.loginForm.get('last_name'); }

 profilefor(e){
   console.log(e);
   if(e ==1 || e ==7 || e ==8 ){
    
    this.isGenderEnable= false;
   }else{
    this.isGenderEnable= true;
    if(e==2 || e == 4){
      this.firstFormGroup['gender'] = 1;
    }else{
      this.firstFormGroup['gender'] = 2;
    }
   
   }
   
 }
 firstSbumit(){
   
   if(this.firstFormGroup.invalid){
     return;
   }
   console.log(this.firstFormGroup.value);
   this.ApiService.register(this.user)
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

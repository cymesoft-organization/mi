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
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(private _formBuilder:FormBuilder,  private router: Router, private _flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
    this.loginForm  = this._formBuilder.group({
      email: ['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      phone: ['',[Validators.required]],
      first_name: ['',[Validators.required]],
      last_name: ['', [Validators.required]],          
          
  })

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      email: ['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
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

}

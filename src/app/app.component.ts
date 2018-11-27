import { Component  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  url: string;
  constructor(public router: Router, private route: ActivatedRoute){}
  ngOnInit() {    
   
    
    
  }
  headerClass(){
    let stringToSplit = this.router.url;
    let x = stringToSplit.split("/");
    let Hclass = '';
    //alert(x[1]);
    if(x[1] != ''){
      Hclass = "defualt dark";
    }else{
      Hclass = "defualt ";
    }
    return Hclass;
   
  }
}

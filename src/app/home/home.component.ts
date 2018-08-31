import {Component} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomeComponent {
   menuData:any;
	
  constructor(private _router : Router){    
 this.menuData=[{"text":"Domain","expand":true,"children":[{"text":"Loginui","routerLink":"bc/domain/loginui","selected":false},{"text":"Template1","routerLink":"bc/domain/template1","selected":false},{"text":"Template2","routerLink":"bc/domain/template2","selected":false},{"text":"Template3","routerLink":"bc/domain/template3","selected":false},{"text":"Template5","routerLink":"bc/domain/template5","selected":false}]}]; }
  routeToLink(data: any){
     if(!data.hasOwnProperty('children') && data.routerLink)
      this._router.navigate([data.routerLink]);
  }
}

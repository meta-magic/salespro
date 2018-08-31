import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AmexioWidgetModule, AmexioChartsModule, AmexioDashBoardModule, AmexioMapModule} from 'amexio-ng-extensions';
import { HttpClientModule } from '@angular/common/http';
import { LoginuiComponent } from './components/loginui/loginui.component';
import { Template1Component } from './components/template1/template1.component';
import { Template2Component } from './components/template2/template2.component';
import { Template3Component } from './components/template3/template3.component';
import { Template5Component } from './components/template5/template5.component';
import { ROUTES } from './domain.route';

@NgModule({
	  imports: [
	    CommonModule, FormsModule,
	    HttpClientModule,
	    RouterModule.forChild(ROUTES),
	    AmexioWidgetModule,
	    AmexioChartsModule,
	    AmexioDashBoardModule,
	    AmexioMapModule	
	  ],
	  exports: [RouterModule],
	  declarations: [
	  LoginuiComponent,
	  Template1Component,
	  Template2Component,
	  Template3Component,
	  Template5Component,
	  ],
	  providers: [
	  ]
})
export class DomainModule {
}


import {Routes } from '@angular/router';
import { LoginuiComponent } from './components/loginui/loginui.component';
import { Template1Component } from './components/template1/template1.component';
import { Template2Component } from './components/template2/template2.component';
import { Template3Component } from './components/template3/template3.component';
import { Template5Component } from './components/template5/template5.component';
export const ROUTES: Routes = [
{
	    path: 'loginui', component: LoginuiComponent
},
{
	    path: 'template1', component: Template1Component
},
{
	    path: 'template2', component: Template2Component
},
{
	    path: 'template3', component: Template3Component
},
{
	    path: 'template5', component: Template5Component
},
];


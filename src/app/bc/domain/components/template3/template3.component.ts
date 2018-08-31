/**
 * Created by: 
 * Date: 31/08/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Template3 } from './../../models/template3.model'
@Component(
{
	selector: 'template3',
	templateUrl: 'template3.component.html'
})
export class Template3Component implements OnInit
{
	
	template3: Template3;
	
	successMsgData:any[]=[];
	
	constructor( private router: Router)
	{
		this.template3 = new Template3();
		
	}
	ngOnInit()
	{
	}
	
	
	
}


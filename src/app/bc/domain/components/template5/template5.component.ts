/**
 * Created by: 
 * Date: 31/08/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Template5 } from './../../models/template5.model'
@Component(
{
	selector: 'template5',
	templateUrl: 'template5.component.html'
})
export class Template5Component implements OnInit
{
	
	template5: Template5;
	
	successMsgData:any[]=[];
	
	constructor( private router: Router)
	{
		this.template5 = new Template5();
		
	}
	ngOnInit()
	{
	}
	
	
	
}


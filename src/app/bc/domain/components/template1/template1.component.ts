/**
 * Created by: 
 * Date: 31/08/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Template1 } from './../../models/template1.model'
@Component(
{
	selector: 'template1',
	templateUrl: 'template1.component.html'
})
export class Template1Component implements OnInit
{
	
	template1: Template1;
	
	
	constructor( private router: Router)
	{
		this.template1 = new Template1();
		
	}
	ngOnInit()
	{
	}
	
	
	
}


/**
 * Created by: 
 * Date: 31/08/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Template2 } from './../../models/template2.model'
@Component(
{
	selector: 'template2',
	templateUrl: 'template2.component.html'
})
export class Template2Component implements OnInit
{
	
	template2: Template2;
	
	
	constructor( private router: Router)
	{
		this.template2 = new Template2();
		
	}
	ngOnInit()
	{
	}
	
	
	
}


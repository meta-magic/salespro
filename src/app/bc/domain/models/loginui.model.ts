/**
 * Created by: 
 * Date: 31/08/2018	
 */
export class Loginui
{
	
	private _name: string;
	
	constructor() { 
	}
	
	set name(value: string) {
		this._name = value;
	}
	get name() : string {
		return this._name;
	}
	
}

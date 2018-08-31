/**
 * Created by: 
 * Date: 31/08/2018	
 */
export class Template3
{
	
	private _EmailId: string;
	private _Password: string;
	
	constructor() { 
	}
	
	set EmailId(value: string) {
		this._EmailId = value;
	}
	get EmailId() : string {
		return this._EmailId;
	}
	set Password(value: string) {
		this._Password = value;
	}
	get Password() : string {
		return this._Password;
	}
	
}

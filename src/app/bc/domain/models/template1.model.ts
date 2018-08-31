/**
 * Created by: 
 * Date: 31/08/2018	
 */
export class Template1
{
	
	private _text: string;
	
	constructor() { 
	}
	
	set text(value: string) {
		this._text = value;
	}
	get text() : string {
		return this._text;
	}
	
}

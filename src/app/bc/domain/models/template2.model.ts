/**
 * Created by: 
 * Date: 31/08/2018	
 */
export class Template2
{
	
	private _text1: string;
	private _text2: string;
	private _text3: string;
	
	constructor() { 
	}
	
	set text1(value: string) {
		this._text1 = value;
	}
	get text1() : string {
		return this._text1;
	}
	set text2(value: string) {
		this._text2 = value;
	}
	get text2() : string {
		return this._text2;
	}
	set text3(value: string) {
		this._text3 = value;
	}
	get text3() : string {
		return this._text3;
	}
	
}

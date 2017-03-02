import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class RegionsService {
	
	constructor(private http: Http){}

	regions() /*типизировать?*/ { 
		// let regions = this.http.get('https://api.github.com/users/aakumykov/repos');
		
		let regions = this.http.get('http://localhost:3000/regions');

			console.info('--------- raw responce ---------');
			console.info(regions);
			console.info('------------------');

		return regions;
	}
}

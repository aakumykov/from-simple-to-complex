import { Injectable }	  			from '@angular/core';
import { Http, Response } 			from '@angular/http';
import { Headers, RequestOptions }  from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { Region } from './region.class';
import { PlaceService } from '../place/place.service';


@Injectable()
export class RegionService {
	private regionsUrl = 'http://localhost:3000/regions';
	private placesUrl = 'http://localhost:3000/places';

	private requestHeaders = new Headers({ 'Content-Type': 'application/json' });
	private requestOptions = new RequestOptions({ headers: this.requestHeaders });

	constructor(
		private http: Http,
		private palceService: PlaceService,
	){}


	create(data) {
		console.info('RegionService.create()');

		let requestData = {
			name: data.name, 
			description: data.description,
		}

		console.info(' this.regionsUrl: '+this.regionsUrl);

		return this.http.post(this.regionsUrl, requestData, this.requestOptions)
					.map(this.extractData)
					.catch(this.handleError);
	}

	updateRegion(data) {
		console.info('RegionService.removeRegion('+data.id+')');

		let regionUrl = this.regionsUrl+'/'+data.id;

		let requestData = {
			name: data.name, 
			description: data.description,
		}

		return this.http.patch(regionUrl, requestData, this.requestOptions)
					.map(this.extractData)
					.catch(this.handleError);
	}

	removeRegion(id: number) {
		console.info('RegionService.removeRegion('+id+')');

		let regionUrl = this.regionsUrl+'/'+id;

		return this.http.delete(regionUrl)
				.map(this.extractData)
				.catch(this.handleError);
	}


	getRegion(id: number): Observable<Region> {
		console.info('RegionService.getRegion('+id+')');

		let regionUrl = this.regionsUrl+'/'+id;
			// console.info(' regionUrl: '+regionUrl+')');

		return this.http.get(regionUrl)
				.map(this.extractData)
				.catch(this.handleError);
	}
	
	getRegionList() {
		console.info('RegionService.getRegionList()');

		return this.http.get(this.regionsUrl)
						.map(this.extractData)
						.catch(this.handleError);
	}

	getRegionPlaces(id: number) {
		let url = this.regionsUrl+'/'+id+'/places';
		return this.http.get(url)
						.map(this.extractData)
						.catch(this.handleError);
	}

	// addRegion(name: string) {
	// 	console.info('RegionService.addRegion('+name+')');

	// 	let headers = new Headers({ 'Content-Type': 'application/json' });
	// 	let options = new RequestOptions({ headers: headers });

	// 	return this.http.post(this.regionsUrl, { name }, options)
	// 				.map(this.extractData)
	// 				.catch(this.handleError);
	// }

	// addPlace(id:number, name: string) {
	// 	console.info('RegionService.addPlace('+name+', '+id+')');

	// 	return this.http.post(this.placesUrl, { name: name, region_id: id }, this.requestOptions)
	// 				.map(this.extractData)
	// 				.catch(this.handleError);
	// }

	

	// внутренние методы
	private extractData(res: Response) {
		let body = res.json();
		return body || {};
	}

	private handleError(error: Response | any) {
		// console.info('----- RegionService.handleError() -----');
		// console.info(error);
		// console.info('----------------------------------------');

		// Вообще-то, нужно использовать внешнюю службу журналирования!
		let errMsg: string;

		if (error instanceof Response) {
			const body = error.json();
			const err = body.error || JSON.stringify(body);
			errMsg = `${error.status} - ${error.statusText || ''} ${err}`;

			// console.info('----- errMsg (1) -----');
			// console.info(errMsg);
			// console.info('------------------');
		}
		else {
			errMsg = error.message ? error.message : error.toString();

			// console.info('----- errMsg (2) -----');
			// console.info(errMsg);
			// console.info('------------------');
		}

		console.error(errMsg);

		return Observable.throw(errMsg);
	}
}

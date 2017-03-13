import { Injectable }	  			from '@angular/core';
import { Http, Response } 			from '@angular/http';
import { Headers, RequestOptions }  from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { Place } from './palce.class';


@Injectable()
export class PlaceService {
	private placesUrl = 'http://localhost:3000/places';

	private requestHeaders = new Headers({ 'Content-Type': 'application/json' });
	private requestOptions = new RequestOptions({ headers: this.requestHeaders });

	constructor(private http: Http){
	}


	createPlace() /*Observable<Place>*/ {
		console.info('PlaceService.createPlace()');
	}


	getPlace(id: number) /*Observable<Place>*/ {
		console.info('PlaceService.createPlace('+id+')');
	}


	updatePlace(id: number) /*Observable<Place>*/ {
		console.info('PlaceService.updatePlace('+id+')');
	}


	removePlace(id: number) {
		console.info('PlaceService.removePlace('+id+')');
	}
	

	getListFor(region_id: number) /*Observable<Place[]>*/ {
		console.info('PlaceService.getListFor('+region_id+')');

		let requestUrl = this.placesUrl+'/for/'+region_id;
			console.info(' requestUrl: '+requestUrl);

		return this.http.get(requestUrl)
				.map(this.extractData)
				.catch(this.handleError);
	}

	// внутренние методы
	private extractData(res: Response) {
		let body = res.json();
		return body || {};
	}

	private handleError(error: Response | any) {
		// console.info('----- PlaceService.handleError() -----');
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

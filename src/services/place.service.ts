import { Injectable }	  			from '@angular/core';
import { Http, Response } 			from '@angular/http';
import { Headers, RequestOptions }  from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


@Injectable()
export class PlaceService {
	private placesUrl = 'http://localhost:3000/places';

	private requestHeaders = new Headers({ 'Content-Type': 'application/json' });
	private requestOptions = new RequestOptions({ headers: this.requestHeaders });

	constructor(private http: Http){
	}

	getPlaceList() {
		console.info('RegionService.getPlaceList()');

		return this.http.get(this.placesUrl)
						.map(this.extractData)
						.catch(this.handleError);
	}

	createPlace(data) /*Observable<Place>*/ {
		console.info('PlaceService.createPlace()');

		let requestData = {
			name: data.name, 
			description: data.description,
			region_id: data.region_id,
		}

		return this.http.post(this.placesUrl, requestData, this.requestOptions)
					.map(this.extractData)
					.catch(this.handleError);
	}


	getPlace(id: number) /*Observable<Place>*/ {
		console.info('PlaceService.getPlace('+id+')');

		return this.http.get(this.placesUrl+'/'+id)
				.map(this.extractData)
				.catch(this.handleError);
	}


	updatePlace(data) /*Observable<Place>*/ {
		let requestData = {
			id: data.id,
			name: data.name,
			description: data.description,
			region_id: data.region_id,
		}

		let requestUrl = this.placesUrl+'/'+requestData.id;

		return this.http.patch(requestUrl, requestData, this.requestOptions)
				.map(this.extractData)
				.catch(this.handleError);
	}


	removePlace(id: number) {
		console.info('PlaceService.removePlace('+id+')');

		let requestUrl = this.placesUrl+'/'+id;

		return this.http.delete(requestUrl)
				.map(this.extractData)
				.catch(this.handleError);
	}
	

	getListFor(region_id: number) {
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
		let errMsg: string;

		if (error instanceof Response) {
			const body = error.json();
			const err = body.error || JSON.stringify(body);
			errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
		}
		else {
			errMsg = error.message ? error.message : error.toString();
		}

		console.error(errMsg);

		return Observable.throw(errMsg);
	}
}

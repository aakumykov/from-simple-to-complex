import { Injectable }	  			from '@angular/core';
import { Http, Response } 			from '@angular/http';
import { Headers, RequestOptions }  from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

// import { Region } from './region.class';


@Injectable()
export class RegionsService {
	private regionsUrl = 'http://localhost:3000/regions';
	private placesUrl = 'http://localhost:3000/places';

	private requestHeaders = new Headers({ 'Content-Type': 'application/json' });
	private requestOptions = new RequestOptions({ headers: this.requestHeaders });

	constructor(private http: Http){}

	// внешние методы
	// getRegions(): Observable<Region[]> {
	getRegions() {
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

	addRegion(name: string) {
		console.info('RegionsService.addRegion('+name+')');

		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });

		return this.http.post(this.regionsUrl, { name }, options)
					.map(this.extractData)
					.catch(this.handleError);
	}

	addPlace(id:number, name: string) {
		console.info('RegionsService.addPlace('+name+', '+id+')');

		return this.http.post(this.placesUrl, { name: name, region_id: id }, this.requestOptions)
					.map(this.extractData)
					.catch(this.handleError);
	}

	removeRegion(id: number) {
		console.info('RegionsService.removeRegion('+id+')');

		let regionUrl = this.regionsUrl+'/'+id;

		return this.http.delete(regionUrl)
				.map(this.extractData)
				.catch(this.handleError);
	}

	// внутренние методы
	private extractData(res: Response) {
		let body = res.json();
		return body || {};
	}

	private handleError(error: Response | any) {
		console.info('----- RegionsService.handleError() -----');
		console.info(error);
		console.info('----------------------------------------');

		// Вообще-то, нужно использовать внешнюю службу журналирования!
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

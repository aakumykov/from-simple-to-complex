import { Injectable }	  			from '@angular/core';
import { Http, Response } 			from '@angular/http';
import { Headers, RequestOptions }  from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { Region } from '../pages/region/region.class';
import { LoadingSplashService } from './loading-splash.service';
import { PlaceService } from './place.service';


@Injectable()
export class RegionService {
	private regionsUrl = 'http://localhost:3000/regions';

	private requestHeaders = new Headers({ 'Content-Type': 'application/json' });
	private requestOptions = new RequestOptions({ headers: this.requestHeaders });

	public publicName = 'this is the public name';
	private privateName = 'this is the private name';


	constructor(
		private http: Http,
		private palceService: PlaceService,
		private loadingSplash: LoadingSplashService,
	){
		// LoadingSplashService.qwerty();
		console.info('---------- constructor ----------');
		console.info(this.loadingSplash);
		console.info(this.publicName);
		console.info(this.privateName);
		console.info('---------------------------------');
	}


	createRegion(data) {
		console.info('RegionService.createRegion()');

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
		console.info('RegionService.updateRegion('+data.id+')');

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

		this.loadingSplash.qwerty();
		// console.info(this.loadingSplash);

		return this.http.get(this.regionsUrl)
						.map(this.extractData)
						.catch(this.handleError);
	}


	private extractData(res: Response) {
		let body = res.json();

		let loadingSplash = new LoadingSplashService();
		loadingSplash.qwerty();

		// this.loadingSplash.hide();
		console.info('---------- extractData ----------');
		console.info(this.loadingSplash);
		console.info(this.publicName);
		console.info(this.privateName);
		console.info('---------------------------------');

		return body || {};
	}

	private handleError(error: Response | any) {
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

		// this.loadingSplash.hide();
		console.info('---------- handleError ----------');
		console.info(this.loadingSplash);
		console.info(this.publicName);
		console.info(this.privateName);
		console.info('---------------------------------');

		return Observable.throw(errMsg);
	}
}

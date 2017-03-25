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

	constructor(
		private http: Http,
		private palceService: PlaceService,
		private loadingSplash: LoadingSplashService,
	){}


	createRegion(data) {
		console.info('RegionService.createRegion()');

		let requestData = {
			name: data.name, 
			description: data.description,
		}

		console.info(' this.regionsUrl: '+this.regionsUrl);

		return this.http.post(this.regionsUrl, requestData, this.requestOptions)
					.map(data => this.extractData(data))
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
					.map(data => this.extractData(data))
					.catch(this.handleError);
	}

	removeRegion(id: number) {
		console.info('RegionService.removeRegion('+id+')');

		let regionUrl = this.regionsUrl+'/'+id;

		return this.http.delete(regionUrl)
				.map(data => this.extractData(data))
				.catch(this.handleError);
	}

	getRegion(id: number): Observable<Region> {
		console.info('RegionService.getRegion('+id+')');

		let regionUrl = this.regionsUrl+'/'+id;
			// console.info(' regionUrl: '+regionUrl+')');

		return this.http.get(regionUrl)
				.map(data => this.extractData(data))
				.catch(this.handleError);
	}
	
	getRegionList() {
		console.info('RegionService.getRegionList()');

		this.loadingSplash.show('Получаю список районов...');

		return this.http.get(this.regionsUrl)
						.map(data => this.extractData(data,this.loadingSplash))
						.catch(this.handleError);
	}
	

	// внутренние методы
	private extractData(res: Response, loadingSplash=null) {
		let body = res.json();
		if (null!=loadingSplash) {
			// console.info(this.loadingSplash.hide);
			loadingSplash.hide();
		}
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

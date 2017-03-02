import { Injectable }	  			from '@angular/core';
import { Http, Response } 			from '@angular/http';
// import { Headers, RequestOptions }  from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Region } from './region';


@Injectable()
export class RegionsService {
	private regionsUrl = 'http://localhost:3000/regions2';

	constructor(private http: Http){}

	getRegions(): Observable<Region[]> {
		return this.http.get(this.regionsUrl)
						.map(this.extractData)
						.catch(this.handleError);
	}

	private extractData(res: Response) {
		let body = res.json();
		return body || {};
	}

	private handleError(error: Response | any) {
		// Вообще-то, нужно использовать внешнюю службу журналирования!
		let errMsg: string;

		if (error instanceof Response) {
			const body = error.json();
			const err = body.error || JSON.stringify(body);
			errMsg = `$(error.status) - ${error.statusText || ''} ${err}`;
		}
		else {
			errMsg = error.message ? error.message : error.toString();
		}

		console.error(errMsg);

		return Observable.throw(errMsg);
	}
}

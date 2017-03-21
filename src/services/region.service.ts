import { Injectable }	  			from '@angular/core';
import { Http, Response } 			from '@angular/http';
import { Headers, RequestOptions }  from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { @Name@ } from '../pages/@name@/@name@.class';

@Injectable()
export class @Name@Service {
	private @name@sUrl = 'http://localhost:3000/@name@s';

	private requestHeaders = new Headers({ 'Content-Type': 'application/json' });
	private requestOptions = new RequestOptions({ headers: this.requestHeaders });

	constructor(
		private http: Http
	){}


	create@Name@(data) {
		console.info('@Name@Service.create@Name@()');

		let requestData = {
			name: data.name, 
			description: data.description,
		}

		console.info(' this.@name@sUrl: '+this.@name@sUrl);

		return this.http.post(this.@name@sUrl, requestData, this.requestOptions)
					.map(this.extractData)
					.catch(this.handleError);
	}

	update@Name@(data) {
		console.info('@Name@Service.update@Name@('+data.id+')');

		let @name@Url = this.@name@sUrl+'/'+data.id;

		let requestData = {
			name: data.name, 
			description: data.description,
		}

		return this.http.patch(@name@Url, requestData, this.requestOptions)
					.map(this.extractData)
					.catch(this.handleError);
	}

	remove@Name@(id: number) {
		console.info('@Name@Service.remove@Name@('+id+')');

		let @name@Url = this.@name@sUrl+'/'+id;

		return this.http.delete(@name@Url)
				.map(this.extractData)
				.catch(this.handleError);
	}

	get@Name@(id: number): Observable<@Name@> {
		console.info('@Name@Service.get@Name@('+id+')');

		let @name@Url = this.@name@sUrl+'/'+id;
			// console.info(' @name@Url: '+@name@Url+')');

		return this.http.get(@name@Url)
				.map(this.extractData)
				.catch(this.handleError);
	}
	
	get@Name@List() {
		console.info('@Name@Service.get@Name@List()');

		return this.http.get(this.@name@sUrl)
						.map(this.extractData)
						.catch(this.handleError);
	}	

	// внутренние методы
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

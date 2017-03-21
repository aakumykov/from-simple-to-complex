import { Injectable }	  			from '@angular/core';
import { Http, Response } 			from '@angular/http';
import { Headers, RequestOptions }  from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { Inventory } from '../pages/inventory/inventory.class';

@Injectable()
export class InventoryService {
	private inventorysUrl = 'http://localhost:3000/inventorys';

	private requestHeaders = new Headers({ 'Content-Type': 'application/json' });
	private requestOptions = new RequestOptions({ headers: this.requestHeaders });

	constructor(
		private http: Http
	){}


	createInventory(data) {
		console.info('InventoryService.createInventory()');

		let requestData = {
			name: data.name, 
			description: data.description,
		}

		console.info(' this.inventorysUrl: '+this.inventorysUrl);

		return this.http.post(this.inventorysUrl, requestData, this.requestOptions)
					.map(this.extractData)
					.catch(this.handleError);
	}

	updateInventory(data) {
		console.info('InventoryService.updateInventory('+data.id+')');

		let inventoryUrl = this.inventorysUrl+'/'+data.id;

		let requestData = {
			name: data.name, 
			description: data.description,
		}

		return this.http.patch(inventoryUrl, requestData, this.requestOptions)
					.map(this.extractData)
					.catch(this.handleError);
	}

	removeInventory(id: number) {
		console.info('InventoryService.removeInventory('+id+')');

		let inventoryUrl = this.inventorysUrl+'/'+id;

		return this.http.delete(inventoryUrl)
				.map(this.extractData)
				.catch(this.handleError);
	}

	getInventory(id: number): Observable<Inventory> {
		console.info('InventoryService.getInventory('+id+')');

		let inventoryUrl = this.inventorysUrl+'/'+id;
			// console.info(' inventoryUrl: '+inventoryUrl+')');

		return this.http.get(inventoryUrl)
				.map(this.extractData)
				.catch(this.handleError);
	}
	
	getInventoryList() {
		console.info('InventoryService.getInventoryList()');

		return this.http.get(this.inventorysUrl)
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

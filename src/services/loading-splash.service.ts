import { Injectable }	  	 from '@angular/core';
import { LoadingController } from 'ionic-angular';

@Injectable()
export class LoadingSplashService {

	private defaultMsg = 'Подождите, пожалуйста...';
	
	private loader;

	constructor(private loadingCtrl: LoadingController){
	}

	public show(text: string='') {
		console.info('LoadingSplashService.show()');
		this.createLoader(text);
		this.loader.present();
	}

	public hide() {
		console.info('LoadingSplashService.hide()');
		this.loader.dismiss();
	}

	public qwerty() {
		console.info('LoadingSplashService.qwerty()');
		// alert('qwerty');
	}

	private createLoader(text: string) {
		console.info('LoadingSplashService.createLoader()');

		let message: string = (''!=text) ? text : this.defaultMsg;

		this.loader = this.loadingCtrl.create({
			content: message,
		});
	}
}

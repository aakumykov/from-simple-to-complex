import { Injectable } from '@angular/core';

import { Region } from './region';
import { REGIONS } from './mock-regions.ts';

@Injectable()
export class RegionsService {
	
	qwerty(): Region[] {
		console.info('RegionsService.qwerty()');
		return REGIONS;
	}
}

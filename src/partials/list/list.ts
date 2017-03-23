import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: 'list.html'
})

export class List {

	@Input() 
		list;

	@Output() showEvent: EventEmitter<number> = new EventEmitter<number>();

	public infoMsg: string;
	public errorMsg: string;

	show(arg) {
		console.info('List.show('+arg+')');
		this.showEvent.emit(arg);
	}
}

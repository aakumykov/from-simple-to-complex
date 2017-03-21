import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: 'list.html'
})

export class List {

	@Input() 
		list;
		title: string = 'qwerty';

	@Output() showEvent: EventEmitter<number> = new EventEmitter<number>();

	public infoMsg: string;
	public errorMsg: string;

	ngOnInit() {
		console.info('*ngOnInit*, List');
		console.info(' list:');
		console.info(this.list);
		console.info(' title: '+this.title);
	}

	ngAfterViewInit() {
		console.info('*ngAfterViewInit*, List');
		console.info(' list:');
		console.info(this.list);
		console.info(' title: '+this.title);
	}

	show(arg) {
		console.info('List.show('+arg+')');
		this.showEvent.emit(arg);
	}

	hasTitle(): boolean {
		console.info('List.hasTitle()');
		return this.title != '';
	}
}

import { Component } from '@angular/core';
@Component({
	selector: 'app-warning-alert',
	template: `<p class="warning-alert">This is Warning alert component</p>`,
	styles: [`
		.warning-alert{
			background-color: red;
		}
	`]
})
export class WarningAlertComponent {
	constructor(){

	}
}
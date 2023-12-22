import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	styles: ['h1 { font-weight: bold; }'],
	template: `<h1>Hello world!</h1>`,
})
export class AppComponent {
	title = 'homes';

	// =================================
	// ====== Component Lifecycle ======
	// =================================

	ngOnChanges(): void {
		console.log('ng on changes called');
	}

	ngOnInit(): void {
		console.log('ng on init called');
	}

	ngDoCheck(): void {
		console.log('ng do check called');
	}

	ngAfterContentInit(): void {
		console.log('ng after content init called');
	}

	ngAfterContentChecked(): void {
		console.log('ng after content checked called');
	}

	ngAfterViewInit(): void {
		console.log('ng after view init called');
	}

	ngAfterViewChecked(): void {
		console.log('ng after view checked called');
	}

	ngOnDestroy(): void {
		console.log('ng on destroy called');
	}
}

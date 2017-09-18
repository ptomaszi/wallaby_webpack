import { Component } from 'ng-metadata/core';

@Component({
    selector: 'my-component',
    templateUrl: 'src/my.component.html'
})
export class MyComponent {
    constructor() {
    }

    getText() {
        return "test";
    }
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ng-private-lib',
  template: `
    <p>
      ng-private-lib works!
    </p>
  `,
  styles: [
  ]
})
export class NgPrivateLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

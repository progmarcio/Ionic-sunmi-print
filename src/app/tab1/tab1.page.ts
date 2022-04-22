import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  Imprimir() {
    window['sunmiInnerPrinter'].printOriginalText("\n\n\t\t___SISTEMA INFO___\n\n..:: SGE ::..\n\nVersion:\t1.0\n\tProject:\t1\nAttempts:\tMany tries :D\n\n\n");
  }

}

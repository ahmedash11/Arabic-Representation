import { Component, Input, OnInit } from '@angular/core';

//@ts-ignore
import { toArabicWord } from 'number-to-arabic-words/dist/index-node.js';

@Component({
  selector: 'lib-arabic-representation',
  template: ` <p>{{ textRepresentation() }}</p>`,
  styles: [],
})
export class ArabicRepresentationComponent implements OnInit {
  @Input() number: number = 0;
  constructor() {}

  ngOnInit(): void {}

  textRepresentation(input: number = this.number) {
    if (!input) {
      input = 0;
    }
    let poundRep: string = 'جنيه مصري ';

    if (input % 100 >= 20) poundRep = 'جنيها مصريا';

    return `فقط ${toArabicWord(input)} ${poundRep} لا غير`;
  }
}

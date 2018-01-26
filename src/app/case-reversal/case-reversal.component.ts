import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-reversal',
  templateUrl: './case-reversal.component.html',
  styleUrls: ['./case-reversal.component.css']
})
export class CaseReversalComponent implements OnInit {

  text: string;
  result: string;
  constructor() { }

  ngOnInit() {
  }

  getInput(event: any) {
    this.text = (<HTMLInputElement>event.target).value;
    this.reverseCase(this.text);
  }
  reverseCase(value: string) {
    this.result = '';
    value.split('').forEach(c => { 
      this.result += (c === c.toUpperCase()) ? c.toLowerCase() : c.toUpperCase();
    });
  }

}

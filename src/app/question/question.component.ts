import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() text?: String;
  @Input() first?: boolean;

  public show: boolean = false;

  constructor() { }

  ngOnInit(): void {
    console.log(this.text);
  }

  toggleQuestion() {
    this.show = !this.show;
  }
}

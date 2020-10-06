import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'changer',
  templateUrl: './changer.component.html',
  styleUrls: ['./changer.component.css']
})
export class ChangerComponent implements OnInit {
  @Input() type;
  @Input() text="Monotonus";
  constructor() { }

  ngOnInit(): void {
  }

  red(){
    this.type="bg-danger";
    this.text="You chose: RED!"
  }
  green(){
    this.type="bg-success";
    this.text="You chose: GREEN!"
  }
  blue(){
    this.type="bg-primary";
    this.text="You chose: BLUE!"
  }
  yellow(){
    this.type="bg-warning";
    this.text="You chose: YELLOW!"
  }
  normal(){
    this.type="bg-transparent";
    this.text="Normal life"
  }
}

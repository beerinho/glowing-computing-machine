import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-db-event-binding",
  templateUrl: "./db-event-binding.component.html",
  styleUrls: ["./db-event-binding.component.scss"]
})
export class DbEventBindingComponent implements OnInit {
  surpriseText: string = "";

  colourChange: string = "";

  eventWord: string = "";

  twoWayInput: string;

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.surpriseText = "SURPRISE!!!";
  }

  onChangeColour() {
    this.colourChange = "blue";
  }

  onRevertColour() {
    this.colourChange = "";
  }

  onEnterWord(event: any) {
    this.eventWord = event.target.value;
  }
}

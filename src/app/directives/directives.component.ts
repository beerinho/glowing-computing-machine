import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-directives",
  templateUrl: "./directives.component.html",
  styleUrls: ["./directives.component.scss"]
})
export class DirectivesComponent implements OnInit {
  isShowingMessage: boolean = false;
  divBackground: string = "blue";
  numbers: number[] = [1, 2, 3, 4];

  clickCount: any[] = [];

  //Assignment
  isDisplayingDetails: boolean = false;

  constructor() {
    this.getRandomColour();
  }

  ngOnInit() {}

  getRandomColour() {
    setInterval(() => {
      this.divBackground = Math.random() > 0.5 ? "green" : "blue";
    }, 1000);
  }

  onAddNewNumber() {
    let number = Math.round(Math.random() * 100);
    this.numbers.push(number);
  }

  onDisplayDetails() {
    this.isDisplayingDetails = !this.isDisplayingDetails;
    this.clickCount.push(new Date());
  }

  getColour(count: number) {
    return count > 3 ? "blue" : "";
  }
}

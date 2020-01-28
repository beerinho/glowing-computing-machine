import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-db-element-binding",
  templateUrl: "./db-element-binding.component.html",
  styleUrls: ["./db-element-binding.component.scss"]
})
export class DbElementBindingComponent implements OnInit {
  buttonText: string = "Not yet!";

  isButtonDisabled: boolean = true;

  constructor() {}

  ngOnInit() {
    this.onChangeButton();
  }

  //I think this will keep running because ngOnInit will rerun every time the variables change
  onChangeButton() {
    setInterval(() => {
      if (this.buttonText == "Not yet!") {
        this.buttonText = "Okay, now!";
      } else {
        this.buttonText = "Not yet!";
      }
      this.isButtonDisabled = !this.isButtonDisabled;
    }, 2000);
  }
}

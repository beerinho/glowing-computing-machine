import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-db-binding-assignment",
  templateUrl: "./db-binding-assignment.component.html",
  styleUrls: ["./db-binding-assignment.component.scss"]
})
export class DbBindingAssignmentComponent implements OnInit {
  username: string = "";
  isButtonDisabled: boolean = true;

  constructor() {}

  ngOnInit() {}

  validateInput() {
    if (this.username == "") {
      this.isButtonDisabled = true;
    } else {
      this.isButtonDisabled = false;
    }
  }

  onResetUsername() {
    this.username = "";
    this.isButtonDisabled = true;
  }
}

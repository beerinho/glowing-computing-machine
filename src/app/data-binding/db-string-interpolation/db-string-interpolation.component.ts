import { Component } from "@angular/core";

@Component({
  selector: "app-db-string-interpolation",
  templateUrl: "./db-string-interpolation.component.html",
  styleUrls: ["./db-string-interpolation.component.scss"]
})
export class DbStringInterpolationComponent {
  variableName: string = "example";

  getString() {
    return "string interpolation";
  }
}

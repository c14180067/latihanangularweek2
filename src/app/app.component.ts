import { Component, VERSION } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private router: Router) {}

  input() {
    this.router.navigate(["/input"]);
  }
  list() {
    this.router.navigate(["/list"]);
  }
  favorite() {
    this.router.navigate(["/favorite"]);
  }
}

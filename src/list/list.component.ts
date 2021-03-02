import { Component, OnInit } from "@angular/core";
import { GlobalvarService } from "../globalvar.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  notes = [];

  constructor(private globalvar: GlobalvarService) {
    this.notes = globalvar.getNote();
  }

  ngOnInit() {}

  favorite(no) {
    this.globalvar.setFavorite(no);
  }
}

import { formatDate } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { GlobalvarService } from "../globalvar.service";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.css"]
})
export class InputComponent implements OnInit {
  judul: string;
  isi: string;
  tanggal;

  constructor(private globalvar: GlobalvarService) {
    this.tanggal = new Date();
    this.tanggal = formatDate(this.tanggal, "yyyy-MM-dd", "en-US");
  }

  ngOnInit() {}

  save() {
    if (this.judul != "" && this.isi != "") {
      this.globalvar.setNote(this.judul, this.isi, this.tanggal);
      this.judul = "";
      this.isi = "";
    }
  }
}

import { Injectable } from "@angular/core";

@Injectable()
export class GlobalvarService {
  private noteList = [];
  private count = 0;

  constructor() {}

  public getNote() {
    return this.noteList;
  }

  public setNote(judul, isi, tanggal) {
    var data = {
      judul: judul,
      isi: isi,
      tanggal: tanggal,
      no: this.count,
      favorite: false
    };
    this.noteList.push(data);
    this.count++;
  }

  public setFavorite(no) {
    this.noteList[no].favorite = true;
  }
}

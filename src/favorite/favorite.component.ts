import { Component, OnInit } from '@angular/core';
import { GlobalvarService } from '../globalvar.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  notes = [];

  constructor(private globalvar: GlobalvarService) {
    this.notes = globalvar.getNote();
  }

  ngOnInit() {
  }

}
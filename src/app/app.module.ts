import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { InputComponent } from "../input/input.component";
import { ListComponent } from "../list/list.component";
import { FavoriteComponent } from "../favorite/favorite.component";
import { RouterModule, Routes } from "@angular/router";
import { GlobalvarService } from "../globalvar.service";

const ROUTES: Routes = [
  { path: "input", component: InputComponent },
  { path: "list", component: ListComponent },
  { path: "favorite", component: FavoriteComponent }
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(ROUTES)],
  declarations: [
    AppComponent,
    HelloComponent,
    InputComponent,
    ListComponent,
    FavoriteComponent
  ],
  bootstrap: [AppComponent],
  providers: [GlobalvarService]
})
export class AppModule {}

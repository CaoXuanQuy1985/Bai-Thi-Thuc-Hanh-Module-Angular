import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import { BookComponent } from './book/book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookComponent,
    UpdateBookComponent,
    BookDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: "", component: HomeComponent},
      {path: "book", component: BookComponent},
      {path: "updateBook/:id", component: UpdateBookComponent},
      {path: "detailBook/:id", component: BookDetailComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

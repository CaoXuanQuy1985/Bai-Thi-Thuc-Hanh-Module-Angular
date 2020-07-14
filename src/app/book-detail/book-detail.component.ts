import { Component, OnInit } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  id:number;
  data:any = {};
  books = [];
  exist = false;
  bookObj:object = {};
  private headers = new Headers({ 'Content-Type': 'application/json'});

  constructor(private router: Router, private route: ActivatedRoute, private http: Http) { }

  detailProduct(book) {
    this.bookObj = {
      "name": book.title,
      "author": book.author
    };
    const url = `${"http://localhost:3000/books"}/${this.id}`;
    this.http.put(url, JSON.stringify(this.bookObj), {headers: this.headers})
      .toPromise()
      .then(() => {
        this.router.navigate(['/']);
      })
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.http.get("http://localhost:3000/books").subscribe(
      (res: Response) => {
        this.books = res.json();
        for(var i = 0; i < this.books.length ; i++) {
          if(parseInt(this.books[i].id) === this.id) {
            this.exist = true;
            this.data = this.books[i];
            break;
          } else {
            this.exist = false;
          }
        }
      }
    )
  }

}

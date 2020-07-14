import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  id:number;
  data: any = {};
  products = [];
  exist = false;
  bookObj:object = {};
  private headers = new Headers({ 'Content-Type': 'application/json'});

  constructor(private router: Router, private route: ActivatedRoute, private http: Http) { }

  updateProduct(book) {
    this.bookObj = {
      "title": book.title,
      "author": book.author,
      "description": book.description
    };
    const url = `${"http://localhost:3000/books"}/${this.id}`;
    this.http.put(url, JSON.stringify(this.bookObj), {headers: this.headers})
      .toPromise()
      .then(() => {
        this.router.navigate(['/']);
      })
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.http.get("http://localhost:3000/books").subscribe(
      (res: Response) => {
        this.products = res.json();
        for(var i = 0; i < this.products.length ; i++) {
          if(parseInt(this.products[i].id) === this.id) {
            this.exist = true;
            this.data = this.products[i];
            break;
          } else {
            this.exist = false;
          }
        }
      }
    )
  }
}

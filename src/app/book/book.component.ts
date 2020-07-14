import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-product',
  templateUrl: './book.component.html',
  styleUrls: ['./product.component.css']
})
export class BookComponent implements OnInit {

  constructor(private http: Http) { }
  confirmationString = "Sách mới đã được thêm";
  isAdded: boolean = false;
  productObj: object = {};

  addNewProduct = function(product) {
    this.productObj = {
      "title": product.title,
      "author": product.author,
      "description": product.description
    }
    this.http.post("http://localhost:3000/books/", this.productObj).subscribe(
      (res: Response) => {
      this.isAdded = true;
    })
  }

  ngOnInit(): void {
  }

}

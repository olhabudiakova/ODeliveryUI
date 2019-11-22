import {Component, OnInit} from '@angular/core';

import { products } from '../products';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products;
  itemsCosts;
  slides: any = [[]];
  constructor(
    private http: HttpClient
  ) {}
  ngOnInit() {
    this.itemsCosts = this.http.get('/assets/items.json');
  }
}

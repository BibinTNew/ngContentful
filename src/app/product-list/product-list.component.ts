import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
}
)
export class ProductListComponent implements OnInit {

  products: Entry<any>[] = [];
  constructor(
    private router: Router,
    private contentfulService: ContentfulService
  ) { console.log("PLC CONS--------");}
  ngOnInit() {
    console.log("PLC init");
    this.contentfulService.getProducts()
      .then(products => this.products = products);
  }
  goToProductDetailsPage(productId) {
    console.log(productId);
    this.router.navigate(['/product', productId]);
  }

}

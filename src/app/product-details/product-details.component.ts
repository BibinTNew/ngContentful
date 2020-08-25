import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Entry<any>;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contentfulService: ContentfulService
  ) { }
  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    this.contentfulService.getProduct(productId)
      .then((product) => {
        this.product = product;
        console.log(this.product);
      });
  }
  goToList() {
    this.router.navigate(['/products']);
  }
  example: string = '<div>This is another div <br/> I want to insert dynamically</div>'
}
import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: any[] = [];
 
  constructor(private service: ProductService, private router: Router) {}

  ngOnInit() {
    this.fetchAllProducts();
  }

  fetchAllProducts() {
    this.service.getAllProduct().subscribe((res) => {
      this.products = res;
      console.log(res.data);
    });
  }

  deleteProduct(id:number)
  {
    if(confirm("Are you sure, you want to delete this product?"))
    {
      this.service.deleteProduct(id).subscribe((res) =>{
        console.log(res); 
        this.fetchAllProducts();     
      })
    }  
  }

  editProduct(product: any) {
    this.router.navigate([`updateProduct/${product.id}`]);   
  } 

}

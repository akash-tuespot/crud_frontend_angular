import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  product: any = { name: '', description: '' };
  productId?:any;
  errorMessage?:string;
  constructor(
    private route: ActivatedRoute, 
    private service: ProductService, 
    private router: Router  
  ) {}


  // life cycle hook : 
  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');
    if(this.productId){
      this.fetchProductDetails(); 
    }
  }

  fetchProductDetails() {
    this.errorMessage = "";
    this.service.getProductById(this.productId).subscribe(
     (response)=>{
      this.product=response;
      this.errorMessage = "";
     },
     (error:any)=>{
      this.errorMessage = error?.error?.message
     }
  );
  }

  updateProduct()
  {
    this.service.updateProduct(this.productId, this.product).subscribe((res) =>{
      console.log(res);
      this.router.navigate(['']);
    })
  }
}



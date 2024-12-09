import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  product: any =
    {
      name: '',
      description: ''
    };
  constructor(private service: ProductService) { }

  saveProduct() {
    return this.service.addProduct(this.product).subscribe((res) => {
      console.log(res);
      this.resetForm()
    })
  }

  resetForm() {
    this.product = {
      name: '',
      description: ''
    };
  }
}

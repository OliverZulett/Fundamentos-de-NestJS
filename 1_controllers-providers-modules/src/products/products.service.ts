import { Injectable } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  getAllProducts() {
    return 'este metodo retorna todos los productos';
  }

  getProductsFilterByName(name: string) {
    return `este metodo retorna todos los productos filtrados por nombre segun la query: ${name}`;
  }

  getProductById(id: string) {
    return `este metodo retorna el producto con id: ${id}`;
  }

  createProduct(product: Product) {
    console.log(product);
    return 'este metodo crea un nuevo producto';
  }

  replaceProduct(id: string, product: Product) {
    console.log(product);
    return `este metodo reemplazara un producto con el id ${id}`;
  }

  updateProduct(id: string, product: Product) {
    console.log(product);
    return `este metodo reemplazara parcialmente un producto con el id ${id}`;
  }

  deleteProduct(id: string) {
    return `este metodo elimina un producto con el id: ${id}`;
  }
}

import { ProductsService } from './products.service';
import {
  Controller,
  Get,
  Patch,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { Product } from './product.model';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAllProducts(@Query('name') name: string) {
    if (name) {
      return this.productsService.getProductsFilterByName(name);
    }
    return this.productsService.getAllProducts();
  }

  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.productsService.getProductById(id);
  }

  @Post()
  createProduct(@Body() product: Product) {
    return this.productsService.createProduct(product);
  }

  @Put(':id')
  replaceProduct(@Param('id') id: string, @Body() product: Product) {
    return this.productsService.replaceProduct(id, product);
  }

  @Patch(':id')
  updateProduct(@Param('id') id: string, @Body() product: Product) {
    return this.productsService.updateProduct(id, product);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return this.productsService.deleteProduct(id);
  }
}

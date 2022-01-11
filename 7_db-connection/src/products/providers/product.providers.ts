import { Connection } from "mongoose";
import { ProductSchema } from '../schemas/product.schema';

export const ProductProviders = [
  {
    provide: 'PRODUCT_MODEL',
    useFactory: (connection: Connection) => connection.model('Product', ProductSchema),
    inject: ['MONGODB_CONNECTION']
  }
]

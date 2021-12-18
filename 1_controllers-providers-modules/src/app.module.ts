import { Module } from '@nestjs/common';
import { WarehousesController } from './warehouses/warehouses.controller';
import { CustomModule } from './custom/custom.module';
import { ProductsModule } from './products/products.module';
import { ProvidersModule } from './providers/providers.module';
import { ClientsModule } from './clients/clients.module';

@Module({
  imports: [CustomModule, ProductsModule, ProvidersModule, ClientsModule],
  controllers: [WarehousesController],
  providers: [],
})
export class AppModule {}

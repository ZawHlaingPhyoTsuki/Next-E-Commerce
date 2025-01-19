import React from 'react'
import ProductCard from './ProductCard';
import { Product } from '@/app/types/products.type';

interface ProductCardsProps { 
    products: Product[]
}

export default function ProductCards({ products }: ProductCardsProps) {
  return (
    <div className="flex flex-wrap flex-row gap-4">
      {products.map((product, index) => (
        <React.Fragment key={index}>
          <ProductCard
            item={product}
          />
        </React.Fragment>
      ))}
    </div>
  );
}

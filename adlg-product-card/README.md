# ADLG-Product-Card

Paquete de pruebas de despliegue de NPM

### Abraham

```ts
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'ADLG-Product-Card';
```

```tsx
<ProductCard
  product={product}
  initialValues={{
    quantity: 4,
    maxQuantity: 10,
  }}
>
  {({ reset, increaseBy, isMaxCountReached, count }) => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>
  )}
</ProductCard>
```

import renderer from 'react-test-renderer';
import { ProductTitle } from '../../src/components/ProductTitle';
import React from 'react';
import { product1 } from '../data/productos';
import { ProductCard } from '../../src/components/ProductCard';

describe('Pruebas en Product Title', () => {
  it('debe mostrar el componente correctamente con el titulo personalizado ', () => {
    const customTitle = 'Custom Product Title';
    const wrapper = renderer.create(<ProductTitle title={customTitle} />);

    expect(wrapper).toMatchSnapshot();
  });
  it('debe mostrar el componente con el nombre del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>{() => <ProductTitle />}</ProductCard>
    );
    expect(wrapper).toMatchSnapshot();
  });
});

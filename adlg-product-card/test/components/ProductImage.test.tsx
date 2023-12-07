import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage } from '../../src/components/ProductImage';
import { ProductCard } from '../../src/components/ProductCard';
import { product2 } from '../data/productos';
describe('Pruebas en ProductImage', () => { 
    it('deberia renderizar el ProductImage', () => {
        const urlImg = 'http://img.jpg'
        const wrapper = renderer.create(
            <ProductImage img={urlImg}/>
        )
        expect(wrapper).toMatchSnapshot();
    });
    it('Debe renderizar el componente con el producto con imagen', () => {
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    () => <ProductImage/>
                }
            </ProductCard>
        )
        expect(wrapper).toMatchSnapshot();
    });
 })
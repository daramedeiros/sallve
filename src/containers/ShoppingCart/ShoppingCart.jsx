import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import BuyButton from '../../components/BuyButton'
import AddButton from '../../components/AddButton'
import RemoveButton from '../../components/RemoveButton'
import DeleteButton from '../../components/DeleteButton'
import EmptyCart from '../../components/EmptyCart'

import { formatCurrency } from '../../modules/formatters';

import {
  Buttons,
  Card,
  CardImage,
  Cart,
  CartContainer,
  CartImage,
  CartProduct,
  CartSection,
  NameAndDelete,
  Product,
  ProductList,
  ProductName,
  ShoppingContainer,
  TextCard,
  TextCart,
  TextTotalCart,
} from './ShoppingCartStyled';

function ShoppingCart() {

  const [productList, setProductList] = useState([]);
  const [productSelect, setProductSelect] = useState([]);
  const [addToCart, setAddToCart] = useState(false);

  useEffect(() => {
    Axios.all([
      Axios.get('https://app-sallve.herokuapp.com/products'),
    ])
      .then(Axios.spread((products) => {
        setProductList(products.data);
      }))
  }, [])

  const addProductToCart = (event, val, price) => {
    event.preventDefault();
    setAddToCart(true);

    if (!productSelect.includes(val, price)) {
      val.add = 1;
      val.value = price
      val.total = val.add * val.value

      setProductSelect([...productSelect, val])
    } else {
      val.value = price
      val.total = val.total + val.value
      val.add += 1;
      setProductSelect([...productSelect])
    }

  };

  const increaseItem = product => {
    if (!productSelect.includes(product)) {
        product.add = 1;
        setProductSelect([...productSelect, product])
    } else {
        product.add += 1;
        setProductSelect([...productSelect])
    }
  };

const decreaseItem = (product) => {
  if (product.add === 1) {
      const removeProduct = productSelect.filter(decrease => {
          return decrease !== product;
      });
      setProductSelect([...removeProduct])
  } else {
      product.add--
      setProductSelect([...productSelect])
  }
};

const totalOrder = productSelect.reduce((acc, val) => {
  return acc + val.add * val.value }, 0);


const deletProduct = (item) => {
  const index = (productSelect.indexOf(item));
  productSelect.splice(index, 1);
  setProductSelect([...productSelect]);
};

  return (
    <>
      <ShoppingContainer>
        <ProductList>
          <Card>
            {productList.map((val) => {
              return (
                <Product key={val.id}>
                  <CardImage src={val.image}/>
                  <ProductName>{val.name} </ProductName>
                    <div>
                      <TextCard> {formatCurrency (val.skus[0].price)}</TextCard>
                      <BuyButton
                          handleClick={ (e) =>{
                            addProductToCart(e, val, val.skus[0].price)
                          }}
                      />
                    </div>
                </Product>
              )
            })
            }
          </Card>
        </ProductList>

        <Cart>
          <CartContainer>
            {addToCart ?
              <div>
                <TextCart>Sua sacola </TextCart>
                {productSelect.map((product, index)=>{
                  return(
                    <CartProduct key={index}>
                      <CartImage src={product.image}/>
                        <CartSection>
                          <NameAndDelete className={'nameAndDelete'}>
                            <h4>{product.name}</h4>
                            <DeleteButton
                               handleClick={(e) => {
                                e.preventDefault();
                                deletProduct(product);
                              }}
                            />
                          </NameAndDelete>
                          <Buttons>
                            <AddButton
                              handleClick={(e) => {
                                  e.preventDefault()
                                  increaseItem(product)
                              }}
                            />
                            <TextCart>{product.add}</TextCart>
                            <RemoveButton
                              handleClick={(e) => {
                                  e.preventDefault()
                                  decreaseItem(product)
                              }}
                            />
                          </Buttons>
                        </CartSection>
                      </CartProduct>
                  )
                })}
                <TextTotalCart>Total:{formatCurrency (totalOrder)}</TextTotalCart>
              </div>
            : <EmptyCart/>}
          </CartContainer>
        </Cart>
      </ShoppingContainer>

    </>
  );
}

export default ShoppingCart;
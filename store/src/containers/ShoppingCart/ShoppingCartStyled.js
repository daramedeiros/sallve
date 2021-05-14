import styled from 'styled-components';

export const ShoppingContainer = styled.div`
    display: flex;
    width: 100%;
`;

export const ProductList = styled.section`
    display:flex;
    width: 100%;
    justify-content: flex-start;
`;

export const Card = styled.div`
    display: flex;
    flex-wrap: wrap;
    text-align: left;
    width: 100%;
    justify-content: flex-start;
    margin-left: 20px;
    border-right: 1px solid grey;
`;

export const Product = styled.div`
    height: 14em;
    width: 14em;
    margin:2%;
    border-radius: 5%;
    margin-bottom: 200px;
    align-content: left;

    @media(max-width: 635px) {
        height: 10em;
        width: 10em;
        margin:none;
        border-radius: 5%;
        margin-bottom: 190px;
        align-content: left;
    }
`;

export const ProductName = styled.div`
  @media(max-width: 635px) {
    ProductName {
      font-size: 13pt;
    }
  }
`;

export const CardImage = styled.img`
  @media(max-width: 635px) {
      height:14em;
      width: 14em;
  }
`;

export const TextCard = styled.h3`
    align-content: left;
`;

export const Cart = styled.div`
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
    align-content: left;
    height: 100%;
    width: 40%;
    padding: 40px;
`;

export const CartContainer = styled.div`
    display:flex;
`;

export const CartImage = styled.img`
    height: 100px;
    width: 100px;

  @media(max-width: 635px) {
    CartImage {
      height: 70px;
      width: 70px;
    }
  }
`;

export const CartProduct = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;

    @media(max-width: 635px)
      CartProduct {
      width: 200px;
    }
`;

export const CartSection = styled.section`
    display: flex;
    flex-direction: column;
    margin-left: 20px;

    @media(max-width: 635px)
      CartSection {
      margin-left: 5px;
    }
  }
`;

export const NameAndDelete = styled.section`
    width: 200px;
    display: flex;
    margin-bottom: 1px;

    @media(max-width: 635px)
      NameAndDelete {
      margin-top: 10px;
    }

`;

export const TextCart = styled.h2`
    margin-top: 1%;
    margin-right: 10px;
    margin-bottom: 1%;
`;

export const CartPrice = styled.h2`
    margin: 10px;
`;

export const Buttons = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    margin-top: 20px;
`;

export const TextTotalCart = styled.h3`
      font-size: 12pt;
      margin-top: none;
`;

export const TextError = styled.h4`
      font-size: 12pt;
      margin-top: none;
      text-transform: lowercase;
`;

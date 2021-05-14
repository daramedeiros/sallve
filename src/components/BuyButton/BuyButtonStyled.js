import styled from 'styled-components';

export const BuyButtonComponent = styled.button`
    background: #333333;
    border-radius: 5px;
    border: none;
    color:#ffffff;
    cursor: pointer;
    font-size: 15px;
    font-weight: bold;
    height: 40px;
    margin:1%;
    padding: 10px;
    width: 217px;

    :hover {
        background: #9f77ff;
        color: #ffffff;
    }

    @media(max-width: 635px) {
        font-size: 12px;
        height: 30px;
        padding: 1px;
        width: 160px;
      }
`;
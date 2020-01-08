import React from 'react';
import styled from 'styled-components';
import Header from '../../utilcomponent/Header';
import Nav from '../../utilcomponent/BottomNav';
import homeIcon from '../../../assets/img/icons/home.png';

const OrderContentDiv = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #000;
  color: #fff;
  border-radius: 20px;
  width: 80%;
  p{
    font-size: 60px;
  }
`;


const OrderSuccess = ()=> (
  <>
      <Header />

      <OrderContentDiv>

        <p>
          Order Received!
        </p>

      </OrderContentDiv>

      <Nav firstIcon={homeIcon} firstIconalt="home" username = "Ore" />
  </>
);

export default OrderSuccess;
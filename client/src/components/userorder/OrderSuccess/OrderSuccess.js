import React from 'react';
import styled from 'styled-components';
import Header from '../../utilcomponent/Header';
import Nav from '../../utilcomponent/BottomNav';
import homeIcon from '../../../assets/img/icons/home.png';
import { MealContentDiv} from '../../usermenu/stlye';

const OrderContentDiv = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  border-radius: 20px;
  p{
    font-size: 3em;
    &:nth-child(2){
      font-size: 1em;
    }
  }
`;


const OrderSuccess = ()=> (
  <>
      <Header />

        <MealContentDiv>
          <OrderContentDiv>

            <p>
              Order Received!
            </p>

            <p>
              Orders are typically delivered in less than an hour
            </p>

          </OrderContentDiv>
          
        </MealContentDiv>

      <Nav firstIcon={homeIcon} firstIconalt="home" firstIconLink="/usermenu" username = "Ore" />
  </>
);

export default OrderSuccess;
import styled from 'styled-components';
import pattern from '../../assets/img/pattern.jpg'

export const MealContentDiv = styled.section`
  display: flex;
  flex-direction: column;
  background: -webkit-linear-gradient(right top, rgba(199,53,56,1), rgba(245,133,41,0.8)), url(${pattern}) no-repeat;
  background-size: cover;
  border-radius: 20px;
  width: 90%;
  margin-top: 20px;
  padding: 0 20px 20px;
`;

export const MealItemDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  color: #fff;
  margin-top: 10px;

  .food-details{
    display: flex;
    flex-direction: row;
    img{
      margin-right: 20px;
    }
  }

  .add-div{
    img{
      width: 30px;
      cursor: pointer;
    }
    
  }
`;

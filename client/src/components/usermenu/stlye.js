import styled from 'styled-components';

export const MealContentDiv = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #000;
  border-radius: 20px;
  width: 80%;
  margin-top: 20px;
  // margin-bottom: 20px;
`;

export const MealItemDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  // background-color: green;
  margin-top: 20px;
  width: 100%;
  color: #fff;
  

  img{
    width: 4em;
  }
  .add-icon{
    width: 2em;
    cursor: pointer;
  }
  .nameprice{
    display: flex;
    flex-direction: column;
  }
`;

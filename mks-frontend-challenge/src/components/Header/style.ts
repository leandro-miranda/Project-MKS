import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1216px;
  margin: 0 auto;
  height: 101px;
  display: flex;
  padding-left: 24px;
  padding-right: 24px;
  justify-content: space-between;
  align-items: center;
  
  @media screen and (max-width: 500px) {
    .containerImg {
      width: 150px;
    }
  }
`;

export const Home = styled.div`
  background: #0F52BA;
`;

export const Button = styled.button`
  align-items: center;
  background: white;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  height: 45px;
  width: 90px;
  @media screen and (max-width: 500px) {
    height: 36px;
    width: 64px;
    }
  
  img {
    margin-right: 16px;
    @media screen and (max-width: 500px) {
    width: 16px;
    }
  }
  span {
    font-size: 18px;
    font-weight: 700;
  }
`;
import styled from "styled-components";

const Main = styled.main`
  display: grid;
  grid-template-columns: 117px auto;
  margin: auto;
  
`;
const Container = styled.div`
  max-width: 1540px;
  @media (max-width: 1225px) {
    padding-left:0;
    margin-left: 20px;
  }
  width: 100%;
  margin-top: 2%;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  aside {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 835px;
    flex-direction: column;
    height: 670px;
    margin-left: 2rem;
    @media (max-width: 1280px) {
      height: auto;
      gap: 86px;
      margin-right: 30px;
    }
    @media (min-width: 1281px) {
      height: auto;
      gap: 85px;
      margin-right: 30px;
    }
  }
`;

const BottomChart = styled.div`
    display: flex;
    //width: 700px;
    width: auto;
    gap: 25px;
`;

export {Main, Container, Content, BottomChart}
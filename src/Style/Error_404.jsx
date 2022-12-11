import styled from "styled-components";

const Main = styled.main`
  margin: 10rem 20rem 20rem;
  a{
      text-align: center;
      margin-left: 2rem;
      font-weight: bold;
      font-size: 1.5rem;
    
  }
  p{
      font-size: 2.5rem;
      margin-bottom: 25px;
      text-align: center;
      @media (max-width: 1025px) {
        font-size: 1.5rem;
      }
  }
`
const Title = styled.h1`
color: red;
font-size: 10rem;
text-align: center;
margin-bottom: 5rem;
@media (max-width: 1025px) {
    font-size: 5rem;
  }
`
export {Main, Title}
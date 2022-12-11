import styled from "styled-components";

  const Head = styled.header`
  position: relative;
  display: flex;
  width: 110%;
  height: 91px;
  background: #020203;
  padding: 0 87px 0 29px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25);
  z-index: 1;
  img {
    width: 178px;
    margin-right: 150px;
  }
`;
 const Nav = styled.nav`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: white;
    font-weight: 500;
    font-size: 24px;
  }
`;

export  {Head,Nav};


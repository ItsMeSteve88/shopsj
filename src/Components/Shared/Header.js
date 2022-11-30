import SearchIcon  from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
padding 10px 20px;
display: flex;
justify-content: space-between;
align-items: center;`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
border: none;
outline: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Home = styled.a`
  font-weight: bold;
  font-size: 24px;
  color: black;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  `;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.a`
font-size: 14px;
color: black;
cursor: pointer;
margin-left: 25px;
text-decoration: none;`;

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='Search' />
            
            <SearchIcon style={{ color: "gray", fontSize: 16 }}/>
          </SearchContainer>
        </Left>
        <Center><Home href='/'>SHOP SJ</Home></Center>
        <Right>
          <MenuItem href='register'>REGISTER</MenuItem>
          <MenuItem href='login'>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon/>
          </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Header;

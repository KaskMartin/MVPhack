import React from 'react';
import styled from 'styled-components';

const MenuContainer = styled.div`
  width: 300px;
  padding: 20px;
  padding-bottom: 300px;
  background-color: #F8F8FA;
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* Align the content at the bottom */
  align-items: center;
`;

const MenuLabel = styled.span`
  font-size: 16px;
  color: #3b82f6;
  margin: 5px 0;
  margin-bottom: 50px;
`;

const Menu = () => {
 
  return (
    <MenuContainer>
      <MenuLabel>HOME</MenuLabel>
      <MenuLabel>TEAM</MenuLabel>
      <MenuLabel>DATA</MenuLabel>
      <MenuLabel>PROJECT</MenuLabel>
      <MenuLabel>PARTNERS</MenuLabel>
      <MenuLabel>CONTACT</MenuLabel>
    </MenuContainer>
  );
};

export default Menu;

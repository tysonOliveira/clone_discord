import React from 'react';
import { MdExpandMore } from 'react-icons/md';
import { Container, Title } from './styles';

function ServerName() {
  return (
    <Container>
      <Title>Servidor do Rodz </Title>
      
      <MdExpandMore color='white' size='28' cursor='pointer' />
    </Container>
  );
}

export default ServerName;
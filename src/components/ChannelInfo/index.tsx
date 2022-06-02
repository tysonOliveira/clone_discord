import React from 'react';
import { FiHash } from 'react-icons/fi';
import { Container, Title, Separator, Description } from './styles';

function ChannelInfo() {
  return (
    <Container>
      <FiHash size='24px' color='var(--symbol)' />

      <Title>chat-livre</Title>

      <Separator />

      <Description>Canal aberto para conversas</Description>  
    </Container>
  );
}

export default ChannelInfo;
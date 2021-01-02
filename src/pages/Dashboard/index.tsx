import React from 'react';

import { Container } from './styles';
import ContentHeader from '../../components/ContentHeader';

const Dashboard: React.FC = () =>{

  return(
    <Container >
      <ContentHeader title="Dashboard" lineColor="#F7931B">
      </ContentHeader>
    </Container>
  )
}

export default Dashboard;
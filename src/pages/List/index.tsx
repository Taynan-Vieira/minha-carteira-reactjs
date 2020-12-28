import React from 'react';
import { Container, Content }from './styles';
import ContentHeader from '../../components/ContentHeader';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

import SelectInput from '../../components/SelectInput';


const List: React.FC = () =>{
  const options = [
    {value: 'Taynan', label: 'Taynan'},
    {value: 'João', label: 'João'},
    {value: 'José', label: 'José'},
];

  return(
    <Container>
      <ContentHeader title="List" lineColor="#E44C4E">
        <SelectInput options={options}/>
      </ContentHeader>

      <Content>
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de luz"
          subtitle="28/12/2020"
          amount="R$ 99,99"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de luz"
          subtitle="28/12/2020"
          amount="R$ 99,99"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de luz"
          subtitle="28/12/2020"
          amount="R$ 99,99"
        />
        
      </Content>
    </Container>
  )
}

export default List;
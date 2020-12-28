import React from 'react';
import { Container }from './styles';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';


const List: React.FC = () =>{
  const options = [
    {value: 'Taynan', label: 'Taynan'},
    {value: 'João', label: 'João'},
    {value: 'José', label: 'José'},
];

  return(
    <Container>
      <ContentHeader title="List" lineColor="#fff">
        <SelectInput options={options}/>
      </ContentHeader>
    </Container>
  )
}

export default List;
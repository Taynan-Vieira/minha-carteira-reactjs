import React, { useMemo, useState, useEffect } from 'react';
import { Container, Content, Filters }from './styles';
import ContentHeader from '../../components/ContentHeader';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

import SelectInput from '../../components/SelectInput';
import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import formatCurrency from '../../utils/formatCurrenty';
import formatDate from '../../utils/formatDate';


interface IRouteParams{
  match: {
    params: {
      type: string;
    }
  }
}

interface IData{
  id: string;
  description: string;
  amountFormatted: string;
  frequency: string;
  dataFormatted: string;
  tagColor: string;
}

const List: React.FC<IRouteParams> = ({ match }) =>{
  const[data, setData] = useState<IData[]>([]);
  const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1));
  const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()));

  
  const { type } = match.params;

  const titleProperties = useMemo(() => {
    return type === 'entry-balance' ? {
      title: 'Entradas',
      lineColor: '#F7931B'
    }
    : {
      title: 'Saídas',
      lineColor: '#E44C4E'
    };
  },[type]);

  const listData = useMemo(() => {
    return type === 'entry-balance' ? gains : expenses;
  },[type]);

  const months = [
    {value: 1, label: 'Janeiro'},
    {value: 2, label: 'Fevereiro'},
    {value: 3, label: 'Março'},
  ];
  
  const years = [
    {value: 2019, label: 2019},
    {value: 2020, label: 2020},
    {value: 2021, label: 2021},

  ];

    useEffect(() => {
     const filteredDate = listData.filter(item => {
       const date = new Date(item.date);
       const month = String(date.getMonth() + 1);
       const year = String(date.getFullYear());

       return month === monthSelected && year === yearSelected;
     });

     const formattedData = filteredDate.map(item => {

        return{
          id: String(Math.random () * data.length),
          description: item.description,
          amountFormatted: formatCurrency(Number(item.amount)),
          frequency: item.frequency,
          dataFormatted: formatDate(item.date),
          tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E'
        }
      })

      setData(formattedData);
      
    },[listData, monthSelected, yearSelected, data.length]);

  return(
    <Container>
      <ContentHeader title={titleProperties.title} lineColor={titleProperties.lineColor}>
        <SelectInput options={months} onChange={(e) => setMonthSelected(e.target.value)} defaultValue={monthSelected}/>
        <SelectInput options={years} onChange={(e) => setYearSelected(e.target.value)} defaultValue={yearSelected}/>
      </ContentHeader>

      <Filters>
        <button type="button"
          className="tag-filter tag-filter-recurrent"
        >
          Recorrentes
        </button>

        <button type="button"
          className="tag-filter tag-filter-eventual"
        >
          Eventuais
        </button>
      </Filters>

      <Content>
        {
          data.map(item => (
            <HistoryFinanceCard
              key={item.id}
              tagColor={item.tagColor}
              title={item.description}
              subtitle={item.dataFormatted}
              amount={item.amountFormatted}
            />
          ))
        }
        
      </Content>
    </Container>
  )
}

export default List;
import { Layout } from './Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ProdutoProps } from './types';
import { ResponseProps } from '../../services/types/Response';

export function Controller() {
 const [data, setData] = useState<ProdutoProps[]>();

 const response = () => {
  axios
   .get<ResponseProps>('http://localhost:5000/produto/')
   .then((response) => {
    console.log(response.data.content);
    setData(response.data.content);
   });
 };

 useEffect(() => {
  response();
 }, []);

 return <Layout data={data} />;
}

import { useNavigate } from 'react-router-dom';
import { mocks } from './mocks';
import {
 Container,
 Carrossel,
 Item,
 Capa,
 Info,
 Desc,
 Category,
 Price,
} from './styles';
import { LayoutProps } from './types';

export function Layout({ data }: LayoutProps) {
 const navigate = useNavigate();
 return (
  <Container>
   <Carrossel>
    {data?.map(
     (produto) =>
      produto.status !== false && (
       <Item
        key={produto.id}
        onClick={() => navigate(`/produtos/${produto.id}`)}
       >
        <Capa
         src="data:image/jpeg;base64,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"
         alt={produto.nome}
        ></Capa>
        <Info>
         <Desc>{produto.descricao}</Desc>
         <Category>{produto.nome}</Category>
         <Price>R${produto.preco}</Price>
        </Info>
       </Item>
      )
    )}
   </Carrossel>
  </Container>
 );
}

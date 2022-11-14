import { TableHeader } from '../TableHeader';
import { TableRow } from '../TableRow';
import { Container } from './styles';
import { LayoutProps } from './types';

export function Layout({ data }: LayoutProps) {
 return (
  <Container>
   <TableHeader data={data.columns} />
   {data.isLoading && <p>Loading...</p>}

   {!data.isLoading &&
    data.response?.content.map((item: any, index: string) => (
     <TableRow
      key={index}
      data={{
       columns: data.columns,
       content: item,
       onDelete: data.onDelete,
       onEdit: data.onEdit,
      }}
     />
    ))}
  </Container>
 );
}
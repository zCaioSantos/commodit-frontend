import { Button } from './styles';
import { LayoutProps } from './types';

export function Layout({ data }: LayoutProps) {
 return (
  <Button onClick={data.onClick} type={data.type}>
   {data.title}
  </Button>
 );
}
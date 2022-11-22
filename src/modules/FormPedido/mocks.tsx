import { BsCreditCard2Back, BsDiamond, BsPaypal, BsUpc } from 'react-icons/bs';

export const mocks = {
 paymentMethods: [
  {
   icon: <BsCreditCard2Back size={25} />,
   label: 'Cartão',
  },
  {
   icon: <BsUpc size={25} />,
   label: 'Boleto',
  },
  {
   icon: <BsDiamond size={25} />,
   label: 'PIX',
  },
  {
   icon: <BsPaypal size={25} />,
   label: 'PayPal',
  },
 ],
};
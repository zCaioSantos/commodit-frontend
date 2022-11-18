import styled from 'styled-components';

export const Container = styled.div`
 width: 100%;
`;

export const Carrossel = styled.ul`
 display: flex;
 gap: 1rem;

 flex-wrap: wrap;
`;

export const TitleList = styled.div`
 display: flex;
 align-items: center;
 gap: 0.5rem;
 font-size: 12px;

 width: 100%;

 h1 {
  text-transform: uppercase;
  font-weight: 400;
 }
`;

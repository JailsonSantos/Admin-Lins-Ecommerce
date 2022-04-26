import { ReactNode } from 'react';

import { Container } from './styles';

interface HeaderProps {
  children: ReactNode;
}

function Header({ children }: HeaderProps) {
  return (
    <Container>
      <h1>Header</h1>
      {children}
    </Container>
  );
};

export default Header;

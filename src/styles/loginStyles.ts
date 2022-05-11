import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(255, 255, 255,0.5),rgba(255, 255, 255, 0.5)),
  url("https://www.estratosferaoficial.com.br/images-i/cat-a/banner.png") center;
  background-size: cover;
`;

export const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.background};
`;

export const Title = styled.h1`
  font-weight: 300;
  font-size: 1.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px;
  outline: none;
  margin: 10px 0;
  min-width: 40%;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.shade};
`;

export const Button = styled.button`
  width: 40%;
  display:flex;
  border: none;
  cursor: pointer;
  padding: 15px 20px;
  margin-bottom: 5px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text};
  outline-color: ${({ theme }) => theme.primary}; 
  background-color: ${({ theme }) => theme.primary};

  &:hover{
    background-color: ${({ theme }) => darken(0.02, theme.primary)};
  }
`;

export const Error = styled.span`
  color: ${({ theme }) => theme.error};
`;

export const Link = styled.a`
  margin: 5px 0;
  cursor: pointer;
  font-size: .75rem;
  
  &:hover{
    text-decoration: underline;
  }
`;
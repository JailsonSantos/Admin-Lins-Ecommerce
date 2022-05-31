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
  background-color: ${({ theme }) => theme.colors.backgroundDark};
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textLight};
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
  color: ${({ theme }) => theme.colors.textLight};
  border: 1px solid ${({ theme }) => theme.colors.shade};
  background-color: ${({ theme }) => theme.colors.background};
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
  color: ${({ theme }) => theme.colors.text};
  outline-color: ${({ theme }) => theme.colors.primary}; 
  background-color: ${({ theme }) => theme.colors.primary};

  &:hover{
    background-color: ${({ theme }) => darken(0.02, theme.colors.primary)};
  }
`;

export const Error = styled.span`
  color: ${({ theme }) => theme.colors.error};
`;

export const Link = styled.a`
  margin: 5px 0;
  cursor: pointer;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textLight};

  &:hover{
    text-decoration: underline;
  }
`;
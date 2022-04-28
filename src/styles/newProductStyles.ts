import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  flex: 4;
  width: 100%;
  height: 80vh;
  padding: 0 20px;
`;

export const NewProductTitle = styled.h2``;

export const NewProductForm = styled.form`
  margin-top: 10px;
`;

export const NewProductItem = styled.div`
  width: 250px;
  display: flex;
  margin-bottom: 10px;
  flex-direction: column;
`;

export const NewProductImage = styled.img`
  width: 300px;
  height: 150px;
  border-radius: 5px;
`;

export const NewProductLabel = styled.label`
  margin: 5px 0;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.textHighlight};

  svg{ 
    margin-right: 10px;
  }
`;

export const NewProductLabelImage = styled.label`
  display: flex;
  cursor: pointer;
  align-items: center;
`;

export const NewProductInput = styled.input`
  height: 30px;
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 5px;
  border-bottom: 1px solid ${({ theme }) => theme.textLight};
`;

export const NewProductInputImage = styled.input`
  display: none;
`;

export const NewProductSelect = styled.select`
  height: 40px;
  outline: none;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.textLight};
`;

export const NewProductOption = styled.option``;

export const NewProductButton = styled.button`
  width: 250px;
  border: none;
  padding: 10px;
  font-size: 1rem;
  margin-top: 20px;
  transition: 0.5s;
  font-weight: 600;
  border-radius: 5px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.blue};

  &:hover {
    background-color: ${({ theme }) => darken(0.05, theme.blue)};
  }
`;
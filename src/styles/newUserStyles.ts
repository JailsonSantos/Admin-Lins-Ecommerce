import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  flex: 4;
  width: 100%;
  height: 80vh;
  padding: 0 20px;
`;

export const NewUserTitle = styled.h2``;

export const NewUserForm = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

export const NewUserItem = styled.div`
  width: 400px;
  display: flex;
  margin-top: 10px;
  margin-right: 20px;
  flex-direction: column;
`;

export const NewUserLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
  margin: 10px 0;
  color: ${({ theme }) => theme.textHighlight};

`;

export const NewUserInput = styled.input`
  height: 30px;
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 5px;
  border-bottom: 1px solid ${({ theme }) => theme.textLight};
`;

export const NewUserGender = styled.div`
  display: flex;
  align-items: center;
`;

export const NewUserLabelGender = styled.label`
  margin: 0 10px;
  font-size: 18px;
  cursor: pointer;
  color: ${({ theme }) => theme.textHighlight};
`;

export const NewUserInputRadio = styled.input`
  height: 30px;
  border: none;
  outline: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border-bottom: 1px solid ${({ theme }) => theme.textLight};
`;

export const NewUserSelect = styled.select`
  height: 40px;
  outline: none;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.textLight};
`;

export const NewUserOption = styled.option``;

export const NewUsertCreateLabel = styled.label`
  width: 80px;
`;

export const NewUserImage = styled.img`
  width: auto;
  border-radius: 5px;
`;

export const NewUserInputImage = styled.input`
  display: none;
`;


export const NewUserButton = styled.button`
  width: 200px;
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
import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  flex: 4;
  width: 100%;
  height: 78vh;
  padding: 0 20px;
  
  .grid, span, p{
    color: ${({ theme }) => theme.colors.textCard};
  }
  
  div.MuiDataGrid-cell.MuiDataGrid-cell{
    outline: none;
  }

  div.MuiDataGrid-columnHeader:focus{
    outline: none;
  }
  
  .userList{
    color: ${({ theme }) => theme.colors.textCard};
    display: flex;
    align-items: center;
  }
  .userAvatar{
    width: 32px;
    height: 32px;
    object-fit: cover;
    margin-right: 10px;
    border-radius: 50%;
  }

  .BtnEditUser{
    border: none;
    cursor: pointer;
    padding: 5px 10px;
    margin-right: 20px;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.bulletSvg};
    background-color: ${({ theme }) => theme.colors.blue};

    &:hover {
      background-color: ${({ theme }) => darken(0.03, theme.colors.blue)};
    }
  }
  .BtnDeleteUser{
    cursor: pointer;
    color: ${({ theme }) => theme.colors.declinedMedium};

    &:hover {
      color: ${({ theme }) => theme.colors.declined};
    }
  }
`;

export const UserTitleContainer = styled.div`
  display: flex;
  margin: 10px 20px;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
`;

export const UserTitle = styled.h2``;

export const UserAddButton = styled.button`
  width: 60px;
  border: none;
  padding: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: 0.5s;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.primary};

  &:hover {
    background-color: ${({ theme }) => darken(0.05, theme.colors.primary)};
  }
`;
import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  flex: 4;
  padding: 0 20px;
`;

export const UserTitleContainer = styled.div`
  display: flex;
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
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.successMedium};

  &:hover {
    background-color: ${({ theme }) => theme.success}
  }
`;

export const UserContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const UserShow = styled.div`
  flex: 1;
  padding: 20px;
  transition: 0.2s;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.textLight};

  &:hover {
    -webkit-box-shadow: 0px 0px 9px -4px #000000; 
    box-shadow: 0px 0px 9px -4px #000000;
  }
`;

export const UserUpdate = styled.div`
  flex: 2;
  padding: 20px;
  transition: 0.2s;
  border-radius: 5px;
  margin-left: 20px;
  border: 1px solid ${({ theme }) => theme.textLight};

  &:hover {
    -webkit-box-shadow: 0px 0px 9px -4px #000000; 
    box-shadow: 0px 0px 9px -4px #000000;
  }
`;

export const UserShowTop = styled.div`
  display: flex;
  align-items: center;
`;

export const UserShowImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
`;

export const UserShowTopTitle = styled.div`
  display: flex;
  margin-left: 10px;
  flex-direction: column;
`;

export const UserShowTopName = styled.span`
  font-weight: 600;  
`;

export const UserShowTopOffice = styled.span`
  font-weight: 300;
`;

export const UserShowBottom = styled.div`
  margin-top: 15px;
`;

export const UserShowTitle = styled.span`
  font-size: 14px;
  margin-left: 5px;
  font-weight: 600;
  color: ${({ theme }) => theme.shade};
`;

export const UserShowInfoTitle = styled.span`
  margin-left: 10px;
`;

export const UserShowInfo = styled.div`
  display: flex;
  margin: 20px 0;
  align-items: center;
  color: ${({ theme }) => theme.textHighlight};
`;

export const UserUpdateTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

export const UserUpdateForm = styled.form`
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
`;

export const UserUpdateLeft = styled.div``;

export const UserUpdateItem = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: column;
`;

export const UserLabel = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
`;

export const UserUpdateInput = styled.input`
  width: 250px;
  height: 30px;
  border: none;
  outline: none;
  padding-left: 5px;
  border-bottom: 1px solid ${({ theme }) => theme.textLight};
`;

export const UserUpdateRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const UserUpdateUpload = styled.div`
  display: flex;
  align-items: center;
`;

export const UserUpdateImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 20px;
  border-radius: 5px;
`;

export const UserUpdateLabel = styled.label`
  padding: 10px;
  cursor: pointer;
  transition: 0.5s;
  
  &:hover {
    svg{ 
      border-radius: 50%;
      border: 1px solid ${({ theme }) => theme.textLight};
    }
  }
`;

export const UserInput = styled.input`
  display: none;
`;

export const UserUploadButton = styled.button`
  border: none;
  padding: 5px;
  transition: 0.5s;
  font-weight: 600;
  border-radius: 5px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.blue};

  &:hover {
    background-color: ${({ theme }) => darken(0.05, theme.blue)};
  }
`;

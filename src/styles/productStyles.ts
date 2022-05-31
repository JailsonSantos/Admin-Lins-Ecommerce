import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  flex: 4;
  padding: 0 20px;


  .grid, span, p{
    color: ${({ theme }) => theme.colors.textCard};
  }
  
  div.MuiDataGrid-cell.MuiDataGrid-cell{
    outline: none;
  }
  
  .productList{
    color: ${({ theme }) => theme.colors.textCard};
    display: flex;
    align-items: center;
  }
  .productImage{
    width: 32px;
    height: 32px;
    object-fit: cover;
    margin-right: 10px;
    border-radius: 50%;
  }

  .BtnEditProduct{
    border: none;
    cursor: pointer;
    padding: 5px 10px;
    margin-right: 20px;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.successMedium};

    &:hover {
      background-color: ${({ theme }) => theme.colors.success};
    }

  }
  .BtnDeleteProductt{
    cursor: pointer;
    color: ${({ theme }) => theme.colors.declinedMedium};

    &:hover {
      color: ${({ theme }) => theme.colors.declined};
    }
  }
`;

export const ProductTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProductTitle = styled.h2``;

export const ProductAddButton = styled.button`
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

export const ProductContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const ProductTop = styled.div`
  display: flex;
`;

export const ProductTopLeft = styled.div`
  flex: 1;
`;

export const ProductTopRight = styled.div`
  flex: 1;
  margin: 20px;
  transition: 0.2s;
  border-radius: 5px;
  padding: 10px 15px 0;   

  color: ${({ theme }) => theme.colors.textCard};
  border: thin solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.backgroundDark};

  &:hover {
    -webkit-box-shadow: 0px 0px 9px -4px ${({ theme }) => theme.colors.primary}; 
    box-shadow: 0px 0px 9px -4px ${({ theme }) => theme.colors.primary}; 
  }
`;

export const ProductTopInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  margin-right: 20px;
  border-radius: 50%;
`;

export const ProductName = styled.span`
  font-weight: 600;
`;

export const ProductInfoBottom = styled.div`
  margin-top: 10px;
`;

export const ProductInfoItem = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
`;

export const ProductInfoKey = styled.span`
  font-size: 14px;
`;

export const ProductItemValue = styled.span`
  font-weight: 300;
`;


export const ProductBottom = styled.div`
  margin: 20px;
  padding: 10px 20px;
  transition: 0.2s;
  border-radius: 5px;
  

  color: ${({ theme }) => theme.colors.textCard};
  border: thin solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.backgroundDark};

  &:hover {
    -webkit-box-shadow: 0px 0px 9px -4px ${({ theme }) => theme.colors.primary}; 
    box-shadow: 0px 0px 9px -4px ${({ theme }) => theme.colors.primary};   
  }
`;

export const ProductForm = styled.form`
  display: flex;
`;

export const ProductFormLeft = styled.div`
  display: flex;
  flex: 3;
  flex-wrap: wrap;
`;

export const ProductUpdatedItem = styled.div`
  width: 250px;
  display: flex;
  margin: 0 20px;
  margin-bottom: 10px;
  flex-direction: column;
`;
export const ProductLabel = styled.div`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.textHighlight};
`;

export const ProductInput = styled.input`
  width: 250px;
  height: 30px;
  border: none;
  outline: none;
  padding-left: 5px;
  border-radius: 5px;
  margin-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.textLight};
`;

export const ProductSelect = styled.select`
  height: 40px;
  outline: none;
  border-radius: 5px;
  margin-bottom: 10px;
  border: 1px solid ${({ theme }) => theme.colors.textLight};

`;

export const ProductOption = styled.option``;

export const ProductFormRight = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
`;

export const ProductUpload = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductUploadImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  margin-right: 20px;
  border-radius: 5px;
`;

export const ProductUploadLabel = styled.label`
  padding: 10px;
  cursor: pointer;
  transition: 0.5s;
  
  &:hover {
    svg{ 
      border-radius: 50%;
      border: 1px solid ${({ theme }) => theme.colors.textLight};
    }
  }
`;

export const ProductUploadInput = styled.input`
  display: none;
`;

export const ProductUploadButton = styled.button`
  border: none;
  padding: 5px;
  transition: 0.5s;
  font-weight: 600;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.primary};

  &:hover {
    background-color: ${({ theme }) => darken(0.05, theme.colors.primary)};
  }
`;

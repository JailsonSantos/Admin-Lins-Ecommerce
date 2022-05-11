import styled from "styled-components";

export const Container = styled.div`
  flex: 4;
  width: 100%;
  height: 80vh;
  padding: 0 20px;

  .productList{
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
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.successMedium};

    &:hover {
      background-color: ${({ theme }) => theme.success};
    }

  }
  .BtnDeleteProduct{
    cursor: pointer;
    color: ${({ theme }) => theme.declinedMedium};

    &:hover {
      color: ${({ theme }) => theme.declined};
    }
  }
`;

export const ProductTitleContainer = styled.div`
  display: flex;
  margin: 0 20px;
  padding: 0 20px;
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
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.successMedium};

  &:hover {
    background-color: ${({ theme }) => theme.success}
  }
`;
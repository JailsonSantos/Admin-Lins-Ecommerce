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

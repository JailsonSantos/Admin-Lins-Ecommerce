import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  margin: 10px 0;
`;

export const SectionContainer = styled.div`
  flex: 4;
  padding: 20px 0;
  margin-right: 10px;
  border-radius: 10px;
  
  color: ${({ theme }) => theme.colors.textCard};
  background-color: ${({ theme }) => theme.colors.backgroundDark};
`;

export const WidgetContainer = styled.div`
  margin:20px;
  display: flex;
`;
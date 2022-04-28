import styled from 'styled-components';

export const Container = styled.div`
  top: 0;
  width: 100%;
  height: 50px;
  z-index: 999;
  position: sticky;
  border-bottom: 0.001rem solid ${({ theme }) => theme.textLight};
  background-color: ${({ theme }) => theme.background};
`;

export const TopbarWrapper = styled.div`
  height: 100%;
  display: flex;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
`;

export const TopLeft = styled.div``;

export const Logo = styled.span`
  cursor: pointer;
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
`;

export const TopRight = styled.div`
  display: flex;
  align-items: center;
`;

export const TopbarIconContainer = styled.div`
  display: flex;
  padding: 0 5px;
  cursor: pointer;
  position: relative;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.textHighlight};
`;

export const TopIconBadge = styled.span`
  top: -5px;
  right: 0px;
  width: 16px;
  height: 16px;
  display: flex;
  font-size: 10px;
  border-radius: 50%;
  position: absolute;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.pink};
`;

export const ImageAvatar = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 50%;
`;

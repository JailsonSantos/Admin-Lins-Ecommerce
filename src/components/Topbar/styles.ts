import styled from 'styled-components';

import { IoMdSunny } from 'react-icons/io'
import { RiMoonClearFill } from 'react-icons/ri'

export const Container = styled.div`
  top: 0;
  width: 100%;
  height: 50px;
  z-index: 999;
  position: sticky;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 0.001rem solid ${({ theme }) => theme.colors.textLight};
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
  color: ${({ theme }) => theme.colors.primary};
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
  color: ${({ theme }) => theme.colors.textHighlight};
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
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.bullet};
`;

export const ImageAvatar = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 50%;
`;

export const TopbarSwitchContainer = styled.div`
  .myToggle {
    .react-switch-bg {
      div {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;

export const Sol = styled(IoMdSunny)`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.pending};
`

export const Lua = styled(RiMoonClearFill)`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.background};
`

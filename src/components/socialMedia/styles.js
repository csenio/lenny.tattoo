import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import { Flex } from '../flex';
import { Anchor as AnchorComponent } from '../anchor';

export const Container = styled(Flex)`
  align-items: flex-end;
  z-index: 1;
  padding: 20px;
  background-color: hsla(0, 60%, 35%, 0.6);
  display: none;

  ${breakpoints.mobileL} {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const Divider = styled.span`
  border-top: 1px solid white;
  width: 105px;
  height: auto;
  margin: 5px 0;

  ${breakpoints.mobileL} {
    transform: rotate(90deg);
    width: 25px;
    margin: 0;
  }
`;

export const Anchor = styled(AnchorComponent)`
  && {
    &:last-child {
      margin-left: 5px;
    }
  }
`;

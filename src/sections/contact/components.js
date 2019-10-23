import styled from "styled-components";
import { breakpoint } from "../../styles/breakpoints";
import { Text as TextComponent } from "../../components";

export const Asterix = styled.span`
  font-size: 25px;
  font-weight: 900;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100vw - 80px);
  margin: 100px auto;
  font-family: 'Josefin Slab', serif;
  font-size: 25px;

  @media ${breakpoint.laptop}{
    width: calc(100vw - 160px);
    margin: 100px auto;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const Text = styled(TextComponent)`
  color: hsl(0, 60%, 35%)
  text-align: left;
  line-height: 35px;
  font-size: 20px;
  margin: 0 0 35px 0;
  max-width: 250px;

  @media ${breakpoint.laptop} {
    max-width: 300px;
    margin: 0 30px 0 0;
    font-size: 25px;
  }

`;


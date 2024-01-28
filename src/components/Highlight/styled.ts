import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;
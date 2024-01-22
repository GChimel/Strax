import styled, {css} from 'styled-components/native';

export const Container = styled.View`
    width: 100%;

    align-items: center;
    justify-content: center;

    background-color: ${({theme}) => theme.COLORS.RICH_BLACK};
`;

export const Logo = styled.Image`
   width: 95px;
   height: 40px;
`;

export const Title = styled.Text`
    ${({theme}) => css`
        color: ${theme.COLORS.WHITE};
        font-size: ${theme.FONT_SIZE.LG}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
`;
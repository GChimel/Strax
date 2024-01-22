import styled, {css} from 'styled-components/native';	
import { ClipboardText } from 'phosphor-react-native';

export const Container = styled.View`
    width: 100%;
    min-height: 56px;

    flex-direction: row;
    align-items: center;
    justify-content: center;

    border-radius: 6px;
    border-width: 1px;
    border-color: ${({theme}) => theme.COLORS.CERULEAN_BLUE};
    background-color: ${({theme}) => theme.COLORS.PURSSIAN_BLUE};
`;

export const Icon = styled(ClipboardText).attrs(({theme}) => ({
    size: 24,
    color: theme.COLORS.PICTON_BLUE
}))`
    padding-right: 50px;
`;

export const Title = styled.Text`
    ${({theme}) => css`
        color: ${theme.COLORS.WHITE};
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `};
`;
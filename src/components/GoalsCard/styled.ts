import styled, {css} from 'styled-components/native';	
import { TouchableOpacity } from 'react-native';
import { ClipboardText, CaretRight } from 'phosphor-react-native';

export const Container = styled.View`
    width: 100%;
    min-height: 56px;
 
    align-items: center;
    justify-content: center;

    margin-bottom: 20px;

    border-radius: 6px;
    border-width: 1px;
    border-color: ${({theme}) => theme.COLORS.CERULEAN_BLUE};
    background-color: ${({theme}) => theme.COLORS.PURSSIAN_BLUE};
`;

export const Title = styled.Text`
    ${({theme}) => css`
        color: ${theme.COLORS.WHITE};
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};
`;

export const Content = styled.Text`
    ${({theme}) => css`
        color: ${theme.COLORS.WHITE};
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `};
    text-align: left;
`;

export const TextForm = styled.View`
    flex:1;
    flex-direction: column;
`;
export const Form = styled.View`
    flex-direction: row ;

    justify-content: center;
    align-items: center;

    padding: 10px 10px 15px 0px;
`;

export const BackButton = styled(TouchableOpacity)`
    width: 60px;
    height: 60px;

    align-items: center;
    justify-content: center;
`;

export const BackIcon = styled(CaretRight).attrs(({theme}) => ({
    size: 24,
    color: theme.COLORS.PICTON_BLUE
}))``;

export const Icon = styled(ClipboardText).attrs(({theme}) => ({
    size: 24,
    color: theme.COLORS.PICTON_BLUE
}))`
   margin: 15px;
`;
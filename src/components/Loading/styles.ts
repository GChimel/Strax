import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    background-color: ${({theme}) => theme.COLORS.RICH_BLACK};
`;

export const Indicator = styled.ActivityIndicator.attrs(({theme}) => ({
    color: theme.COLORS.PICTON_BLUE,
    size: 'large'
}))``;
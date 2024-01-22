import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.RICH_BLACK};
    padding: 24px;
`;

export const Form = styled.View`
    flex: 1;
    justify-content: center;
`;
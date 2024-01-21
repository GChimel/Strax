import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    
    flex-direction: row;
    align-items: center;
    justify-content: center;

    background-color: ${({theme}) => theme.COLORS.RICH_BLACK};
`;

export const Logo = styled.Image`
    max-width: 100px;
    max-height: 150px;
`;

import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.RICH_BLACK};
    padding: 24px;
`;

export const Form = styled.View`
    flex: 1;
    justify-content: center;
`;
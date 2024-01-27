import styled, {css} from 'styled-components/native';
import { TouchableOpacity } from 'react-native';


export const Container = styled(TouchableOpacity)`
  width: 100%;

  min-height: 56px;
  

  justify-content: center;
  align-items: center;

  border-radius: 6px;
  background-color: ${({theme}) => theme.COLORS.PICTON_BLUE};

`;

export const Title = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
import styled, {css} from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export type FilterStyleProps = {
  isActive?: boolean;
}

export const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Content = styled(TouchableOpacity)<FilterStyleProps>`
  border-width: 1px;
  justify-content: center;
  
  width: 80px;
  height: 40px;

  margin: 10px ;

  border-color: ${({theme}) => theme.COLORS.WHITE};

  ${({isActive}) => isActive && css`
    border-color: ${({theme}) => theme.COLORS.PICTON_BLUE}; 
  `}
 
  
`;

export const Title = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
  text-align: center;
`;
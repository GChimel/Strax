import { Container, Content, Title, FilterStyleProps } from './styled';
import { TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & FilterStyleProps & {
  title: string;
}

export function DeadlineGoals({isActive = false, title, ...rest}: Props) {
  return(
    <Container>
      <Content isActive={isActive} {...rest} >
        <Title>{title}</Title>
      </Content>
    </Container>
  );
}
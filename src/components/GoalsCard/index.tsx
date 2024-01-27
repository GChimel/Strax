import { Container,
  Title,
  Icon,
  Form,
  Content,
  TextForm,
  BackIcon,
  BackButton
} from "./styled";
import { TouchableOpacityProps } from 'react-native';
type Props = TouchableOpacityProps & {
  title: string;
  deadline: string;
  value: string;
  savings: string;
}


export function GoalsCard({title, deadline, value, savings}: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <Form>
        <Icon />
        <TextForm>
          <Content>Deadeline: {deadline}</Content>
          <Content>Value: {value}</Content>
          <Content>Saving: {savings}</Content>
        </TextForm>
        <BackButton
          onPress={() => {console.log("teste")}}
        >
          <BackIcon />
        </BackButton>
      </Form>
    </Container>
  );
}

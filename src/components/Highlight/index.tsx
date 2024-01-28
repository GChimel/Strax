import { Container, Title } from './styled';

type Props = {
  title: string;
}
export function Highlight({title}: Props) {
  return(
    <Container>
      <Title>{title}</Title>
    </Container>
  );
}
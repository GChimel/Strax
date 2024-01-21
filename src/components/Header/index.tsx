import { Container, Logo, Title} from './styles';

type Props = {
    title: string;
}

export function Header({ title }: Props) {
    return (
        <Container>
            <Logo source={require('../../assets/Logo/logo_white.png')} />
            <Title>{title}</Title>
        </Container>
    );
}
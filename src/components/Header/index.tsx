import { Container, Logo} from './styles';

export function Header() {
    return (
        <Container>
            <Logo source={require('../../assets/Logo/logo_white.png')} />
        </Container>
    );
}
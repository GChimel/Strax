import { Container, Form } from './styles';

import { Header } from '../../components/Header';
import { GoalsCard } from '../../components/GoalsCard';

export function Goals() {
    return (
        <Container>
            <Header
                title='Goals'
            />
            <Form>
                <GoalsCard/>
            </Form>
        </Container>
    )
}
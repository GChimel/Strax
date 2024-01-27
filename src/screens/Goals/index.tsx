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
                <GoalsCard
                    title='Comprar um carro'
                    deadline='01/02/2002'
                    value='R$10.000,00'
                    savings='R$1.000,00'
                />
                <GoalsCard
                    title='Comprar uma casa'
                    deadline='01/02/2012'
                    value='R$200.000,00'
                    savings='R$3.000,00'
                />
            </Form>
        </Container>
    )
}
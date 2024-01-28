import { Container, Form, DeadlineContent } from './styles';

import { Header } from '../../components/Header';
import { GoalsCard } from '../../components/GoalsCard';
import { Button } from '../../components/Button';
import { DeadlineGoals } from '../../components/DeadlineGoals';
import { Highlight } from '../../components/Highlight';
import { useState } from 'react';

export function Goals() {


    return (
        <Container>
            <Header
                title='Goals'
            />
            
            <Highlight
                    title='Deadline for targets:'
                />
                
            <DeadlineContent>
                <DeadlineGoals
                    title='Short'
                    isActive
                />
                <DeadlineGoals
                    title='Medium'
                    
                />
                <DeadlineGoals
                    title='Long'
                />
            </DeadlineContent>

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
                <GoalsCard
                    title='Comprar uma casa'
                    deadline='01/02/2012'
                    value='R$200.000,00'
                    savings='R$3.000,00'
                />
            </Form>

            <Button
                title='New Goal'
            />
        </Container>
    )
}
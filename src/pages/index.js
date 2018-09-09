import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { colors } from '../utils/variables';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    text-align: center;
    width: 100vw;
    height: 100vh;
`;

const FirstCategory = styled.div`
    background-color: ${colors.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0.6;
    :hover {
        opacity: 1;
    }
    a:hover {
        color: ${colors.secondary};
    }
`;

const SecondCategory = styled.div`
    background-color: ${colors.secondary};
    display: flex;
    flex-direction: column;
    align-items: center;
    :hover {
        opacity: 1;
    }
    justify-content: center;
    opacity: 0.6;
    a:hover {
        color: ${colors.primary};
    }
`;

export default () => (
    <Container>
        <FirstCategory>
            <h1>
                <Link to="reviews">Reviews</Link>
            </h1>
        </FirstCategory>
        <SecondCategory>
            <h1>
                <Link to="learnings">Learnings</Link>
            </h1>
        </SecondCategory>
    </Container>
);

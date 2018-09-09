import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const Container = styled.div`
    margin: 0 auto;
    max-width: 1500px;
    padding: 0 1rem;
`;

const ListElement = styled.li`
    display: inline-block;
    margin-right: 1rem;
`;

const ListLink = props => (
    <ListElement>
        <Link to={props.to}>{props.children}</Link>
    </ListElement>
);

const Header = styled.header`
    margin-bottom: 1.5rem;
`;

const StyledLink = styled(Link)`
    text-shadow: none;
    background-image: none;
`;

const HeaderTitle = styled.h3`
    display: inline;
`;

const NavList = styled.ul`
    list-style: none;
    float: right;
`;

export default ({ children }) => (
    <Container>
        <Header>
            <StyledLink to="/">
                <HeaderTitle>Bini</HeaderTitle>
            </StyledLink>
        </Header>
        {children()}
    </Container>
);

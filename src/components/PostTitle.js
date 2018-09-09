import styled from 'styled-components';
import Link from 'gatsby-link';
import { colors } from '../utils/variables';

export const PostTitle = styled(Link)`
    color: ${colors.secondary};
    text-decoration: none !important;
`;

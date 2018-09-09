import { PostCard } from './PostCard';
import { PostTitle } from './PostTitle';
import { ButtonLink } from './ButtonLink';
import React from 'react';

export const Post = ({id, slug, title, description}) => (
    <PostCard key={id}>
        <PostTitle to={slug}>
            <h2>{title}</h2>
        </PostTitle>
        <span>{description}</span>
        <br />
        <br />
        <ButtonLink to={slug}>Keep Reading →</ButtonLink>
    </PostCard>
);

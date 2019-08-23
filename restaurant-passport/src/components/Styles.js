// The styles for the app

// colors:
// pink: e44c65
// blue: 5480f1
// green: 39c088
// grey: 272833
// black: 1c1d26v

import React from 'react';
import styled from 'styled-components';

const OnboardForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    flex-wrap: wrap;
    border: 1px solid red;

`;

const CTA = styled.h1`
    color: white;
`;


// input styles in App.css

const Button = styled.button`
    background-color: #39c088;
    color: white;
    border-radius: 5px;
    border: none;
    width: 15%;
    padding: 20px;
    margin: 20px;
    font-size: 1.5rem;
    font-weight: 600;
`;


export { OnboardForm, CTA, Button }
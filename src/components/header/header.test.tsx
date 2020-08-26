import React from 'react';
import { render } from '@testing-library/react';

import Header from "./header.component";

test('Header Renders Text', () =>{
    const { getByText } = render(<Header/>);
    const linkElement = getByText(/Compete with your friends this week!/i);
    expect(linkElement).toBeInTheDocument();
});
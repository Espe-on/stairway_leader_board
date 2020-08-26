import React from 'react';
import { render } from '@testing-library/react';

import Countdown from "./countdown.component";

test('Countdown Renders Test', () =>{
    const { getByText } = render(<Countdown/>);
    const linkElement = getByText(/Resets In:/i);
    expect(linkElement).toBeInTheDocument();
});
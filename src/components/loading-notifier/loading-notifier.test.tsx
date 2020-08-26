import React from 'react';
import { render } from '@testing-library/react';

import LoadingNotifier from "./loading-notifier.component";

test('Loading Notifier Renders', () =>{
    const { getByText } = render(<LoadingNotifier/>);
    const linkElement = getByText(/Loading/i);
    expect(linkElement).toBeInTheDocument();
});
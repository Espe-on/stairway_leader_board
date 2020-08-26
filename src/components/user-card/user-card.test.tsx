import React from 'react';
import { render } from '@testing-library/react';

import UserCard from "./user-card.component";
import {Profile} from "../../models/Profile";

test('User-Card Renders username of Profile given to it', () =>{
    const exampleUser: Profile = {
        username: "Joseph-Crawley",
        weeklyXP: 400,
        isCurrentUser: true,
    }
    const { getByText } = render(<UserCard user={exampleUser} position={1}/>);
    const linkElement = getByText(/Joseph-Crawley/i);
    expect(linkElement).toBeInTheDocument();
});
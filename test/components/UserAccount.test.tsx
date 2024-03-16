import '@testing-library/jest-dom/vitest';
import {render, screen} from '@testing-library/react';

import UserAccount from '../../src/components/UserAccount';
import {User} from "../../src/entities";

describe('UserAccount', () => {
    it('should render UserAccount for Admin', () => {
        const user: User = {id: 1, name: 'John', isAdmin: true};

        render(<UserAccount user={user}/>);

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/^Edit/i);
    });

    it('should render UserAccount for User', () => {
        render(<UserAccount user={{id: 1, name: 'John', isAdmin: false}}/>);

        const button = screen.queryByRole('button');
        expect(button).not.toBeInTheDocument();

        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent(/^User Profile/i);
    });

    it('should render UserAccount with name', () => {
        const user: User = {id: 1, name: 'John', isAdmin: false};

        render(<UserAccount user={user}/>);
        const name = screen.getByText(user.name);
        expect(name).toBeInTheDocument();
    });
})
import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import UserList from '../../src/components/UserList';
import {User} from "../../src/entities";

describe('UserList', () => {
    it('should render UserList with no users', () => {
        render(<UserList users={[]}/>);

        const heading = screen.getByText(/no users/i);
        expect(heading).toBeInTheDocument();
    });

    it('should render UserList with users', () => {
        const users: User[] = [
            {id: 1, name: 'John'},
            {id: 2, name: 'Jane'}
        ];

        render(<UserList users={users}/>);

        const link = screen.getAllByRole('link');
        expect(link).toHaveLength(2);
        expect(link[0]).toHaveAttribute('href', `/users/${users[0].id}`);
        expect(link[1]).toHaveTextContent(users[1].name);
    });

})
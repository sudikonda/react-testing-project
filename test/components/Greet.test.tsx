import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import Greet from '../../src/components/Greet';

describe('Greet', () => {
    it('should render Hello with name when name is provided', () => {
        render(<Greet name="John"/>);
        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent(/^Hello John/i);
    });

    it('should render Login when name is not provided', () => {
        render(<Greet />);
        screen.debug();
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/^Login/i);
    });
})
import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import TermsAndConditions from '../../src/components/TermsAndConditions';
import {expect} from 'vitest';
import {userEvent} from '@testing-library/user-event';


describe('TermsAndConditions', () => {
    let checkbox: Element;
    let button: HTMLElement;
    let heading: HTMLElement;

    beforeEach(() => {
        render(<TermsAndConditions/>);
        heading = screen.getByRole('heading');
        checkbox = screen.getByRole('checkbox');
        button = screen.getByRole('button');
    });

    it('should render TermsAndConditions with heading "Terms & Conditions"', () => {
        expect(heading).toHaveTextContent('Terms & Conditions');
    });

    it('should render TermsAndConditions with checkbox unchecked', () => {
        expect(checkbox).not.toBeChecked();
    });

    it('should render TermsAndConditions with disabled button', () => {
        expect(button).toBeDisabled();
    });

    it('should enable button when checkbox is checked', async () => {

        const user = userEvent.setup();
        await user.click(checkbox);

        expect(checkbox).toBeChecked();
        expect(button).toBeEnabled();
    });
})

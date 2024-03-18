import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import ExpandableText from "../../src/components/ExpandableText";
import {expect} from "vitest";
import userEvent from "@testing-library/user-event";


describe('ExpandableText', () => {

    const limit = 255;
    const longText = 'a'.repeat(limit +1);
    const shortText = longText.substring(0, limit);


    it('should render ExpandableText with button disabled', () => {
        render(<ExpandableText text={shortText}/>);
        const button = screen.queryByRole('button', {name: /Show More/i});
        expect(button).not.toBeInTheDocument();
    });

    it('should render ExpandableText with button enabled', async () => {

        render(<ExpandableText text={longText}/>);

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toBeEnabled();
        expect(button).toHaveTextContent(/Show More/i);

        const user = userEvent.setup();
        await user.click(button);

        const showLessButton = screen.getByRole('button');
        expect(showLessButton).toBeInTheDocument();
        expect(showLessButton).toBeEnabled();
        expect(showLessButton).toHaveTextContent(/Show Less/i);

        const article = screen.getByText(longText);
        expect(article).toBeInTheDocument();
        expect(article).toHaveTextContent(longText);

    });

})
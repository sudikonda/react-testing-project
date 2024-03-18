import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import SearchBox from "../../src/components/SearchBox";
import userEvent from "@testing-library/user-event";
import {expect} from 'vitest';


describe('SearchBox', () => {

    const renderSearchBox = () => {
        const onChange = vi.fn();
        render(<SearchBox onChange={onChange}/>);
        return {
            input: screen.getByPlaceholderText('Search...'),
            onChange
        }
    }

    it('should render SearchBox with placeholder "Search..."', () => {
        const {input} = renderSearchBox();
        expect(input).toBeInTheDocument();
    });

    it('should call onChange when Enter is pressed', async () => {
        const {input, onChange} = renderSearchBox();
        const searchTerm = "SearchTerm";

        const user = userEvent.setup();
        await user.type(input, searchTerm + "{enter}");

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(searchTerm);
    });

    it('should not call onChange when Enter is pressed if input is empty', async () => {
        const {input, onChange} = renderSearchBox();
        const searchTerm = "";

        const user = userEvent.setup();
        await user.type(input, searchTerm + "{enter}");

        expect(onChange).toHaveBeenCalledTimes(0);
    });

})
import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import TagList from "../../src/components/TagList";
import {expect} from 'vitest';


describe('TagList', () => {
    it('should render TagList with tag "tag1"', async () => {
        render(<TagList />);

        // findAllByRole is combination of queryAllByRole and waitFor
        // await waitFor(() => {
        //     const listItems = screen.getAllByRole('list');
        //     expect(listItems.length).toBeGreaterThan(0);
        // })

        const listItems = await screen.findAllByRole('list');
         expect(listItems.length).toBeGreaterThan(0);

    });
})
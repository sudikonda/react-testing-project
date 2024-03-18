import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import ToastDemo from "../../src/components/ToastDemo";
import userEvent from "@testing-library/user-event";
import {Toaster} from 'react-hot-toast';


describe('ToastDemo', () => {
    it('should render ToastDemo with button enabled', () => {
        render(<ToastDemo/>);
        const button = screen.queryByRole('button');
        expect(button).toBeInTheDocument();
    });

    it('should render ToastDemo with success notification with button enabled', async () => {

        render(
            <>
                <ToastDemo/>
                <Toaster/>
            </>
        );

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toBeEnabled();
        expect(button).toHaveTextContent(/Show Toast/i);

        const user = userEvent.setup();
        await user.click(button);

        const toast = await screen.findByText(/success/i);
        expect(toast).toBeInTheDocument();
        expect(toast).toHaveTextContent(/Success/i);

    });

})

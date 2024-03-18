import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import OrderStatusSelector from "../../src/components/OrderStatusSelector";
import {expect} from "vitest";
import userEvent from "@testing-library/user-event";
import {Theme} from '@radix-ui/themes';


describe('OrderStatusSelector', () => {

    const renderOrderStatusSelector = () => {
        const onChange = vi.fn();
        render(
            <Theme>
                <OrderStatusSelector onChange={onChange}/>);
            </Theme>
        );
        return {
            input: screen.getByRole('combobox'),
            onChange
        }
    }

    it('should render OrderStatusSelector with placeholder "status"', () => {
        const {input} = renderOrderStatusSelector();
        expect(input).toBeInTheDocument();
    });

    it('should call onChange when value is changed', async () => {

        const {input} = renderOrderStatusSelector();
        const user = userEvent.setup();
        await user.click(input);

        const options = await screen.findAllByRole('option');
        expect(options).toHaveLength(3);

    });

})
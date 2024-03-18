import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";

import ProductImageGallery from "../../src/components/ProductImageGallery";

describe('ProductImageGallery', () => {
    it('should render ProductImageGallery with no images', () => {
        const { container } = render(<ProductImageGallery imageUrls={[]} />);
        expect(container).toBeEmptyDOMElement();
    });

    it('should render ProductImageGallery with images', () => {
        const imageUrls = ['image1.png', 'image2.png'];
        render(<ProductImageGallery imageUrls={imageUrls} />);

        const images = screen.getAllByRole('img');

        expect(images).toHaveLength(imageUrls.length);
        imageUrls.forEach((url, index) => {
            expect(images[index]).toHaveAttribute('src', url);
        });
    });
})
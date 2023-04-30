import Banner from "./Banner";
import {screen, render} from "@testing-library/react";

describe('Banner', () => {
    it('should contain my name', () => {
       render(<Banner/>);

       expect(screen.getByText('Keith Robertson')).toBeInTheDocument();
    });
});
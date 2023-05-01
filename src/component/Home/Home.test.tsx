import Home from "./Home";
import {render, screen} from "@testing-library/react";

describe('Home', () => {
    it('should have a title of Career', () => {
        render(<Home/>);

        expect(screen.getByText('Career')).toBeInTheDocument();
    });
});
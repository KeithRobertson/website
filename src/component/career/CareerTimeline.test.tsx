import CareerTimeline from "./CareerTimeline";
import {render, screen} from "@testing-library/react";

describe('Career Timeline', () => {
    it('should render description', () => {
        render(<CareerTimeline timeline={[{description: 'Description', year: ''}]}/>);

        expect(screen.getByText('Description')).toBeInTheDocument();
    });
    it('should render year', () => {
        render(<CareerTimeline timeline={[{description: '', year: '2005'}]}/>);

        expect(screen.getByText('2005')).toBeInTheDocument();
    });
});
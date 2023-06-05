import { fireEvent, render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

jest.mock('./useDashboard', () => ({
    useDashboard: () => ({
        handleNewSubmission: jest.fn(() => { }),
        handleViewSubmissions: jest.fn(() => { }),
        state: {
            taxes: [
                {
                    "id": "1",
                    "name": "Tax Season 2021",
                    "year": "2021"
                },
                {
                    "id": "2",
                    "name": "Tax Season 2020",
                    "year": "2020"
                }
            ]
        }
    })
}));

describe('<Dashboard />', () => {
    it('Render Dashboard', () => {
        render(<Dashboard />);
        const submissions = screen.getByText('submissions');
        expect(submissions).toBeVisible();
    });

    it('Render 2 taxes', () => {
        render(<Dashboard />);
        const taxes = screen.getAllByRole('listitem');
        expect(taxes.length).toEqual(2);
    });
});
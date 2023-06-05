import { fireEvent, render, screen } from '@testing-library/react';
import Filter from './Filter';

const mockSubmissions = [
    {
        "name": "a",
        "surname": "a",
        "age": "1",
        "year": "2021"
    },
    {
        "name": "b",
        "surname": "a",
        "age": "2",
        "year": "2021"
    },
    {
        "name": "a",
        "surname": "c",
        "age": "2",
        "year": "2020"
    }
];

describe('<Filter />', () => {
    it('Render Filters', () => {
        render(<Filter data={mockSubmissions} setFiltered={() => { }} />);
        const inputText = screen.getAllByRole('textbox');
        expect(inputText.length).toEqual(2);
        const inputNumber = screen.getAllByRole('spinbutton');
        expect(inputNumber.length).toEqual(2);
        const buttons = screen.getAllByRole('button');
        expect(buttons.length).toEqual(2);
    });

    it('Apply Filters', () => {
        const updateState = jest.fn(data => data);

        render(<Filter data={mockSubmissions} setFiltered={updateState} />);
        const input: any = screen.getByLabelText('Name');
        fireEvent.change(input, { target: { value: 'a' } })
        expect(input.value).toBe('a')

        const apply: any = screen.getAllByRole('button')[0];
        fireEvent.click(apply);
        expect(updateState).toHaveBeenCalled();

        expect(updateState.mock.results[0].value).toEqual([
            { name: 'a', surname: 'a', age: '1', year: '2021' },
            { name: 'a', surname: 'c', age: '2', year: '2020' }
        ]);
    });

    it('Clean Filters', () => {
        const updateState = jest.fn(data => data);

        render(<Filter data={mockSubmissions} setFiltered={updateState} />);
        const input: any = screen.getByLabelText('Name');
        fireEvent.change(input, { target: { value: 'a' } })
        expect(input.value).toBe('a')

        const apply: any = screen.getAllByRole('button')[0];
        fireEvent.click(apply);
        expect(updateState).toHaveBeenCalled();

        const clear: any = screen.getAllByRole('button')[1];
        fireEvent.click(clear);
        expect(updateState.mock.results[1].value).toEqual(mockSubmissions);
    });
});
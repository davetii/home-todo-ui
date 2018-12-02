import React from 'react';
import ReactDOM from 'react-dom';
import TodoHeader from '../../components/TodoHeader';
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';
import { render } from 'react-testing-library';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TodoHeader />, div);
});

it('displays header text', () => {
    const { getByText } = render(<TodoHeader text='test123' />);
    expect(getByText('test123')).toBeInTheDocument();
});
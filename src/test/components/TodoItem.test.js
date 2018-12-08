import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from '../../components/TodoItem';
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';
import {mount, shallow} from 'enzyme';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TodoItem />, div);
});

it('ensure checkbox click event is captured as expected', () => {
    const callBack = jest.fn();
    const wrapper = mount(<TodoItem checkedCallBack={callBack}/>);
    wrapper.find('input').at(0).simulate('change');
    expect(callBack).toHaveBeenCalled();
});

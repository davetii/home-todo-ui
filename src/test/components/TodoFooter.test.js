import React from 'react';
import ReactDOM from 'react-dom';
import TodoFooter from '../../components/TodoFooter';
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';
import {mount, shallow} from 'enzyme'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TodoFooter />, div);
});

it('ensure button click event is captured as expected', () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow(<TodoFooter callBack={mockCallBack}/>);
    wrapper.find('button').at(0).simulate('click');
    expect(mockCallBack).toHaveBeenCalled();
});

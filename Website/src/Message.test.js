import React from 'react';
import ReactDOM, { render } from 'react-dom';
import {shallow,  configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

import Message from './Message/Message';

const wrapper = shallow(<Message />);

describe('<Message />', () => {
  it('Render Message', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('Find link', () => {
    expect(wrapper.find("Link").props("to").to).toBe('/confirm');
  });

  it('calls store Message when button is clicked', () => {
     Message.prototype.newPage = jest.fn();
     let wrapper = shallow(<Message />);
     let { newPage } = wrapper.instance();
     expect(newPage).toHaveBeenCalledTimes(0);
     wrapper.find('#SubmitBtn').prop('onClick')();
     expect(newPage).toHaveBeenCalledTimes(1);
  });
});

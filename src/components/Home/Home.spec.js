import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Home from './Home';

configure({adapter: new Adapter()});

describe ('<HomeComponent />', () => {
  it('should render h1', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.equals('<h1>Home</h1>'));
  });
});

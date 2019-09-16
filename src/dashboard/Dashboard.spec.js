// Test away

import React from 'react';
import Dashboard from './Dashboard';

import renderer from 'react-test-renderer';

describe('<Dashboard/>', () => {
  //2. write a test for SnapShot
  it('it matches snapshot', () => {
    const tree = renderer.create(<Dashboard />); // generates a Dom tree

    //Assertion- snapshots are JSON representation  of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });
});

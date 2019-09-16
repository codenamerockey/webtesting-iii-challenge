// Test away!
import React from 'react';
import Controls from './Controls';

import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';

describe('<Controls />', () => {
  //2. write a test for SnapShot
  it('it matches snapshot', () => {
    const tree = renderer.create(<Controls />); // generates a Dom tree

    //Assertion- snapshots are JSON representation  of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });
  it('should invoke the function toggle locked after button pressed', () => {
    const toggleClosed = jest.fn();
    let locked = false;
    let closed = false;

    const { getByText } = render(
      <Controls toggleClosed={toggleClosed} locked={locked} closed={closed} />
    );
    fireEvent.click(getByText('Close Gate'));
    expect(toggleClosed).toHaveBeenCalled();
  });

  it('should invoke the function toggle locked after button pressed', () => {
    const toggleLocked = jest.fn();
    let locked = true;
    let closed = true;

    const { getByText } = render(
      <Controls toggleLocked={toggleLocked} locked={locked} closed={closed} />
    );
    fireEvent.click(getByText('Unlock Gate'));
    expect(toggleLocked).toHaveBeenCalled();
  });
});

// Test away!
import React from 'react';
import Display from './Display';
import { render, fireEvent, findAllByText } from '@testing-library/react';
import renderer from 'react-test-renderer';

describe('<Display/>', () => {
  //2. write a test for SnapShot
  it('it matches snapshot', () => {
    const tree = renderer.create(<Display />); // generates a Dom tree

    //Assertion- snapshots are JSON representation  of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });

  //   it('should display corresponding color after is button pressed', () => {
  //     const toggleColor = jest.fn();

  //     const { queryAllByTestId } = render(
  //       <Display toggleClosed={toggleColor} locked={false} closed={false} />
  //     );
  //     fireEvent.click(queryAllByTestId('red-led'));
  //     expect(toggleColor).toBeTruthy();
  //   });
});

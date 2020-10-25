import React from 'react';
import FooterSection from './FooterSection';
import renderer from 'react-test-renderer';

test('FooterSection matches the Snapshot', () => {
  const component = renderer.create(<FooterSection />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

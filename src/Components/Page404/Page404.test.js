import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import Page404 from './Page404';

test('404 Page matches the Snapshot', () => {
  const component = renderer.create(
    <Router>
      <Page404 />
    </Router>,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

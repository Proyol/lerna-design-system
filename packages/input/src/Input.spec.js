
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Input } from './Input';

describe('Input', () => {
  test('Renderizou corretamente', () => {
    const tree = renderer.create(<Input placeholder="Nome" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Button } from './Button';

describe('Button', () => {
    test('Renderizou corretamente', () => {
        const tree = renderer.create(<Button> Teste </Button>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})
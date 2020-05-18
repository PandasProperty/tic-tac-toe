import React from 'react';
import Cell from '.';
import { noop } from 'lodash';
import renderer from 'react-test-renderer';

describe('Cell', () => {
    it('Cell should render correctly when an X is there', () => {
        const component = renderer.create(
            <Cell 
                onClick={noop}
                content='X'
                color='red'
            />
        );

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
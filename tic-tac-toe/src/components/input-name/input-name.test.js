import React from 'react';
import InputName from '.';
import { noop } from 'lodash';
import renderer from 'react-test-renderer';

describe('InputName', () => {
    it('Check Rendering', () => {
        const component = renderer.create(
            <InputName 
                value='test'
                player={1}
                color='red'
                onChange={noop}
            />
        );

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
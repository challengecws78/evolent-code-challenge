import React from 'react';
import { shallow } from 'enzyme';
import { DynamicImport } from '../../components/DynamicImport';



test('Will render with a component if there is a component imported', () => {
    let wrapper = shallow(
        <DynamicImport load={() => import('../../../src/components/Header')}>
            {(Component) => Component === null
            ? <span></span>
            : <Component {...props} />}
        </DynamicImport>
    )
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.state('component')).toBe(null)
});
import { shallow } from 'enzyme';
import { expect } from 'chai';
import React from 'react';

import FormSection from '../../source/react/library/form/FormSection';

describe('<FormSection />', () => {
  it('should render without blowing up', () => {
    const wrapper = shallow(<FormSection />);

    expect(wrapper.length).to.eql(1);
  });

  it('should render the label with a tooltip when one is provided', () => {
    const wrapper = shallow(
      <FormSection title="label boii" tooltip="hello world" />,
    );

    expect(wrapper.find('TooltipHoverArea').length).to.eql(1);
    expect(wrapper.find('TooltipHoverArea').prop('tooltip')).to.eql(
      'hello world',
    );
  });
});
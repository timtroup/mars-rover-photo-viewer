import React from 'react';
import ImageDownloader from '../../src/components/image-downloader';

describe('<ImageDownloader />', () => {
    const wrapper = shallow(<ImageDownloader />);

    it('should be an anchor', () => {
        expect(wrapper.type()).to.eql('a');
    });

    it('renders the correct img src', () => {
        wrapper.setProps({ imgSrc: 'http://somerledsolutions.com' });
        expect(wrapper.find({ href: 'http://somerledsolutions.com' })).to.have.length(1);
    });
});
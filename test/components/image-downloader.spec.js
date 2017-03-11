import React from 'react';
import ImageDownloader from '../../src/components/image-downloader';

describe('<ImageDownloader />', () => {
    const props = { imgSrc: 'http://somerledsolutions.com/img.jpeg' };
    const wrapper = shallow(<ImageDownloader {...props}/>);

    it('should be an anchor', () => {
        expect(wrapper.type()).to.eql('a');
    });

    it('renders the correct img src', () => {
        expect(wrapper.find({ href: 'http://somerledsolutions.com/img.jpeg' })).to.have.length(1);
    });
});
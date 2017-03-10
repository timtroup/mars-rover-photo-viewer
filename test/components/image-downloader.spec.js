import React from 'react';
import ImageDownloader from '../../src/components/image-downloader';

describe('<ImageDownloader />', () => {
    const wrapper = shallow(<ImageDownloader />);

    it('should be an anchor', () => {
        expect(wrapper.type()).to.eql('a');
    });
});
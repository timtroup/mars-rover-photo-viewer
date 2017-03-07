import React, { PropTypes } from 'react'

const ImageDownloader = ({ imgSrc }) => (
    <a className="pull-right" href={imgSrc} download="fluffy.jpeg">
        Download
        <i className="glyphicon glyphicon-download-alt" aria-hidden="true"></i>
    </a>
);

ImageDownloader.propTypes = {
    img: PropTypes.string.isRequired
};

export default ImageDownloader
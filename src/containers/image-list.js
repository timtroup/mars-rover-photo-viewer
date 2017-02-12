import React, { Component } from 'react';
import { connect } from 'react-redux';

class ImageList extends Component {

    renderImage(photoData) {
        const url = photoData.img_src;

        return (
            <tr key={url}>
                <td>
                    <img src={url}/>
                </td>
            </tr>
        );
    }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                        {this.props.photos.map(this.renderImage)}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state) {

    return {
        photos: state.photos.photos
    }
}

export default connect(mapStateToProps)(ImageList);
import React, {Component} from 'react';
import { connect } from 'react-redux';
import Lightbox from 'react-images';
import Gallery from 'react-photo-gallery';

class ImageGallery extends Component{

    constructor(){
        super();
        this.state = {
            photos:null,
            photoIndex:0,
            pageNum:1,
            totalPages:1,
            loadedAll: false
        };
    }

    renderGallery(){
        return(
            <Gallery photos={this.props.photos} />
        );
    }

    render(){
        // no loading sign if its all loaded
        if (this.props.photos.length && this.state.loadedAll){
            return(
                <div>
                    {this.renderGallery()}
                </div>
            );
        }
        else if (this.props.photos.length){
            // this.loadMorePhotos();
            return(
                <div>
                    {this.renderGallery()}
                    <div className="loading-msg" id="msg-loading-more">Loading</div>
                </div>
            );
        }
        else{
            return(
                <div>
                    <div id="msg-app-loading" className="loading-msg">Loading</div>
                </div>
            );
        }
    }
}

function mapStateToProps(state) {

    return {
        photos: state.photoGalleryData.data
    }
}

export default connect(mapStateToProps)(ImageGallery);
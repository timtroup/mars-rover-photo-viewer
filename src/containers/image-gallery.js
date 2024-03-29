import React, {Component} from 'react';
import { connect } from 'react-redux';
import Lightbox from 'react-images';
import Gallery from 'react-photo-gallery';
import Spinner from 'react-spin';
import LoadMoreResults from './load-more-results';
import ImageDownloader from '../components/image-downloader'

class ImageGallery extends Component{

    static contextTypes = {
        store: React.PropTypes.object
    }

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

        this.props.photos.forEach(photo => {
            photo.lightboxImage.caption = (<ImageDownloader imgSrc={photo.src}/>)
        });

        return(
            <Gallery photos={this.props.photos} />
        );
    }

    render(){
        // no loading sign if its all loaded
        if (this.props.photos.length){
            return(
                <div>
                    {this.renderGallery()}
                    <div>
                        <LoadMoreResults />
                        <br/><br/><br/><br/>
                    </div>
                </div>
            );
        }
        else if (this.props.isFetching){

            var spinCfg = {
                length: 28,
                width: 10,
                radius: 42
            };
            return (
                <div>
                    <br/><br/><br/><br/>
                    <Spinner config={spinCfg} />
                </div>
            );
        }
        else{
            return(
                <div>
                    <h2>No photos to display</h2>
                </div>
            );
        }
    }
}

function mapStateToProps(state) {

    return {
        photos: state.photoGalleryData.data,
        isFetching: state.photoGalleryData.isFetching || state.photos.isFetching
    }
}

export default connect(mapStateToProps)(ImageGallery);
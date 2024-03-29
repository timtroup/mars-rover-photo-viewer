import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {fetchManifest} from '../actions/manifest-action';
import ImageGallery from '../containers/image-gallery';
import DateSelector from '../containers/date-selector';
import RoverList from '../containers/rover-list';
import CameraList from '../containers/camera-list';
import FindPhotos from '../containers/find-photos';
import RoverInfo from '../containers/rover-info';
import {Grid, Row, Col, Popover, OverlayTrigger, Button, Glyphicon, Panel} from 'react-bootstrap';
import {AutoAffix} from 'react-overlays';

class App extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired
    };

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(fetchManifest('curiosity'));
        dispatch(fetchManifest('opportunity'));
        dispatch(fetchManifest('spirit'));
    }

    render() {
        const roverInfoPopover = (
            <Popover id="popover-positioned-scrolling-bottom" title="Rover Information">
                <RoverInfo />
            </Popover>
        );
        return (
            <Grid>
                <Row>
                    <h1 className="text-center">Mars Rover Photo Viewer</h1>
                    <hr />
                </Row>
                <Row>
                    <AutoAffix viewportOffsetTop={15} container={this}>
                        <Panel>
                            <Col md="2">
                                <RoverList />
                            </Col>
                            <Col md="1">
                                <OverlayTrigger container={this} trigger="click" placement="bottom" overlay={roverInfoPopover}>
                                    <Button><Glyphicon glyph="info-sign" /></Button>
                                </OverlayTrigger>
                            </Col>
                            <Col md="2">
                                <DateSelector />
                            </Col>
                            <Col md="5">
                                <CameraList />
                            </Col>
                            <Col md="2">
                                <FindPhotos />
                            </Col>
                        </Panel>
                    </AutoAffix>
                </Row>
                <Row>
                    <ImageGallery />
                </Row>
            </Grid>
        );
    }
}

export default connect()(App);

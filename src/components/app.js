import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {fetchManifest} from '../actions/manifest-action';
import ImageList from '../containers/image-list';
import DateSelector from '../containers/date-selector';
import RoverList from '../containers/rover-list';
import CameraList from '../containers/camera-list';
import FindPhotos from '../containers/find-photos';
import RoverInfo from '../containers/rover-info';
import {Grid, Row, Col, Popover, OverlayTrigger, Button} from 'react-bootstrap';

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
                    <hr/>
                </Row>
                <Row>
                    <Col md="2">
                        <RoverList />
                    </Col>
                    <Col md="1">
                        <OverlayTrigger container={this} trigger="click" placement="bottom" overlay={roverInfoPopover}>
                            <Button><span className="glyphicon glyphicon-info-sign" /></Button>
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
                </Row>
                <Row>
                    <ImageList />
                </Row>
            </Grid>
        );
    }
}

const mapStateToProps = state => {

    return {
    }
};

export default connect(mapStateToProps)(App);

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchColorized} from '../actions/colorize-action';
import {Button, Glyphicon} from 'react-bootstrap';

class ColorizePhoto extends Component {

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        photo: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {
        const { photo, dispatch } = this.props;
        return (
            <Button bsStyle="primary"
                    onClick={(e) => {
                        e.stopPropagation();
                        dispatch(fetchColorized(photo));
                    }}>
                <Glyphicon glyph="tint" />
                Colorize</Button>
        );
    }
}

export default connect()(ColorizePhoto);
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectDate} from '../actions/select-date-action';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class DateSelector extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        const {dispatch} = this.props;
        dispatch(selectDate(date.format('YYYY-MM-DD')));
    }

    render() {
        return (
            <DatePicker
                onChange={this.handleChange}
                showMonthDropdown
                showYearDropdown
                scrollableYearDropdown/>
        );
    }
}

const mapStateToProps = state => {

    return {}
};

export default connect(mapStateToProps)(DateSelector);
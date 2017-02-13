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
        const { selectedDate } = this.props;
        return (
            <DatePicker
                dateFormat="DD/MM/YYYY"
                selected={selectedDate}
                onChange={this.handleChange}
                showMonthDropdown
                showYearDropdown
                scrollableYearDropdown/>
        );
    }
}

const mapStateToProps = state => {
    const { selectedDate } = state

    return {
        selectedDate: moment(selectedDate)
    }
};

export default connect(mapStateToProps)(DateSelector);
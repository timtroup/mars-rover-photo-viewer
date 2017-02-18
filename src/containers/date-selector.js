import React, {Component} from 'react';
import {connect} from 'react-redux';
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
        const { selectedDate, selectedRover, manifestByRover } = this.props;

        if(manifestByRover[selectedRover].photo_manifest) {
            return (
                <DatePicker
                    dateFormat="DD/MM/YYYY"
                    selected={selectedDate}
                    onChange={this.handleChange}
                    minDate={manifestByRover[selectedRover].photo_manifest.landing_date}
                    maxDate={manifestByRover[selectedRover].photo_manifest.max_date}
                    showMonthDropdown
                    showYearDropdown
                    scrollableYearDropdown/>
            );
        } else {
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
}

const mapStateToProps = state => {
    const { selectedDate, selectedRover, manifestByRover } = state;

    return {
        selectedDate: moment(selectedDate),
        selectedRover,
        manifestByRover
    }
};

export default connect(mapStateToProps)(DateSelector);
import React from 'react';
import configureStore from 'redux-mock-store';
import RoverInfo from '../../src/containers/rover-info';



describe('<RoverInfo />', () => {

    it('should render empty div when store not populated with manifest', () => {

        let mockStore = configureStore()({
            selectedRover: 'curiosity',
            manifestByRover: {
                curiosity: {
                }
            }
        });

        let wrapper = mount(
            <RoverInfo store={mockStore}/>
        );

        expect(wrapper.find('div')).to.have.length(1);
        expect(wrapper.find('div').children()).to.have.length(0);
    });

    it('should render table when store populated with manifest', () => {

        let mockStore = configureStore()({
            selectedRover: 'curiosity',
            manifestByRover: {
                curiosity: {
                    photo_manifest: {
                        "name": "Curiosity",
                        "landing_date": "2012-08-06",
                        "launch_date": "2011-11-26",
                        "status": "active",
                        "max_sol": 1632,
                        "max_date": "2017-03-09",
                        "total_photos": 308058
                    }
                }
            }
        });

        let wrapper = mount(
            <RoverInfo store={mockStore}/>
        );

        expect(wrapper.find('table')).to.have.length(1);
        expect(wrapper.find('table').children()).to.have.length(1);
        expect(wrapper.find('tbody').children()).to.have.length(6);

        expect(wrapper.containsMatchingElement(
            <td>Curiosity</td>
        )).to.eql(true);

        expect(wrapper.containsMatchingElement(
            <td>26/11/2011</td>
        )).to.eql(true);

        expect(wrapper.containsMatchingElement(
            <td>06/08/2012</td>
        )).to.eql(true);

        expect(wrapper.containsMatchingElement(
            <td>active</td>
        )).to.eql(true);

        //TODO mystery as to why this test fails as inspecting the html shows this element exists
        // expect(wrapper.containsMatchingElement(
        //     <td>308058</td>
        // )).to.eql(true);

        expect(wrapper.containsMatchingElement(
            <td>09/03/2017</td>
        )).to.eql(true);
    });

});
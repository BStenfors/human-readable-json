import React from 'react';
import {render} from 'react-dom';
import HumanReadableJson from '../../src';

let testData = {
    name: "HRJ",
    type: "test",
    version: "0.0.1",
    props: {
        prop: 1
    },
    testProp: 'wow',
    nestedProp: {
        prop: 2,
        doubleNested: {
            prop: 3,
            tripleNested: {
                prop: 4
            }
        }
    },
    finalProp: 'complete!',
    lastButNotLeast: 'finito!'
};

let customStyles = {
    container: {
        width: '50%'
    },
    nestedSectionHeaderRow: {
        marginTop: '50px',
        marginLeft: '10px',
        position: 'relative'
    },
    nestedPropertyRow: {
        marginBottom: '50px',
        marginLeft: '15px',
        position: 'relative',
        padding: '7px',
        backgroundColor: 'darkgrey'
    },
    nestedPropertyRowLite: {
        marginBottom: '50px',
        marginLeft: '15px',
        position: 'relative',
        padding: '7px',
        backgroundColor: 'white'
    },
    sectionHeaderRow: {
        marginTop: '50px',
        position: 'relative'
    },
    sectionHeader: {
        fontWeight: 'bolder',
        fontSize: '18px',
        padding: '5px'
    },
    propertyRow: {
        padding: '7px',
        backgroundColor: 'darkgrey'
    },
    propertyRowLite: {
        padding: '7px',
        backgroundColor: 'white'
    },
    propertyLabel: {
        fontWeight: "bold",
        fontSize: '14px'
    },
    propertyValue: {
        fontWeight: "normal"
    },
    propertyLabelCol: {

    },
    propertyValueCol: {

    }
};


const App = () => (
    <HumanReadableJson
        data={testData}
        customStyles={customStyles}
    />
);

render(<App />, document.getElementById('root'));
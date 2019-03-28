import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import {Grid, Row, Col, Label, Table} from 'react-bootstrap';

const Hrj = ({jsonData, customStyles}) => {
    let jsonProps = Object.keys(jsonData);

    let createPropRows = (props, data, nestedProp) => {
        console.log('create prop rows');
        console.log(props);
        console.log(data);

        let jsonPropsItems = props.map((jsonProp, idx) => {
            let itemIdx = props.indexOf(jsonProp);

            let propValue = '';
            let isParentProp = typeof data[jsonProp] === "object";
            let parentProps = isParentProp ? Object.keys(data[jsonProp]) : null;


            console.log(isParentProp);

            console.log(typeof data[jsonProp]);

            let cappedProp = `${jsonProp.substr(0,1).toUpperCase()}${jsonProp.substr(1)}`;

            console.log(cappedProp);

            if(data[jsonProp] !== undefined) {
                propValue = data[jsonProp];
            }

            if(isParentProp) {

                console.log(parentProps.length);
                if(parentProps.length > 0) {
                    if(cappedProp === '') {
                        cappedProp = 'Root';
                    }
                    return (
                        <div key={idx}>
                            <Row className="show-grid" style={customStyles.nestedSectionHeaderRow}>
                                <Col lg={12} md={12} sm={12}>
                                    <Label style={customStyles.sectionHeader}>{cappedProp.toString()}</Label>
                                </Col>
                            </Row>
                            {createPropRows(parentProps, data[jsonProp], true)}
                        </div>
                    )
                } else {
                    return (
                        <Row className="show-grid" key={idx} style={customStyles.nestedSectionHeaderRow}>
                            <Col lg={12} md={12} sm={12}>
                                <Label style={customStyles.sectionHeader}>{cappedProp.toString()}</Label>
                            </Col>
                        </Row>
                    )
                }
            }

            console.log(cappedProp);

            console.log(propValue);

            let rowStyle = customStyles.propertyRow;
            let nestedRowStyle = customStyles.nestedPropertyRow;



            if(itemIdx % 2) {
                rowStyle = customStyles.propertyRowLite;
                nestedRowStyle = customStyles.nestedPropertyRowLite;
            }
            let finalRowStyle = nestedProp ? nestedRowStyle : rowStyle;

            return (
                <Row className="show-grid" style={finalRowStyle} key={idx}>
                    <Col lg={3} md={3} sm={3} style={customStyles.propertyLabelCol}>
                        <Label style={customStyles.propertyLabel}>{cappedProp.toString().replace("_", " ")}</Label>
                    </Col>
                    <Col lg={9} md={9} sm={9} style={customStyles.propertyValueCol}>
                        {propValue}
                    </Col>
                </Row>
            )
        });

        return jsonPropsItems;
    };


    return (

        <Grid className="show-grid" style={customStyles.container}>
            {createPropRows(jsonProps, jsonData)}
        </Grid>
    )
};

export default Hrj;
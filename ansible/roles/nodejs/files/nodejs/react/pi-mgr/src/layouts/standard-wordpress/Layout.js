import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap' ;
import './resources/bootstrap.min.css';
import './resources/bootstrap-theme.min.css';
import './layout.css';

// Standard wordpress is 
//  - banner, 
//  - horizontal strap for nav, 
//  - a sidebar on left for secondary options 
//  - a content area
//  - a footer for status etc
function Layout (props)  {
  console.log('321', props);
  return (
    <Grid>
      <Row className='bannerdiv'>
        <Col xs={12} md={12} >
          {props.banner}
        </Col>
      </Row>
       <Row className='navbardiv'>
        <Col xs={12} md={12} >
          {props.navbar}
        </Col>
      </Row>
      <Row className="rootscreendiv">
        <Col xs={12} md={12}  className="nopadding positionContext">
             <div>{props.sidebar}</div>
            <div>{props.rootScreen}</div>
        </Col>
      </Row>
    </Grid>
  );
}

export default Layout;
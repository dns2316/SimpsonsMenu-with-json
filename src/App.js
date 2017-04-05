import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import dataIsrael from './data.json';
import './App.css';

class App extends Component {
    constructor(){
    super();
    this.state = {
      layout1: {  },
      layout2: {  },
      layout3: {  },
    };
  },
  render() {
    return (
      <div className="App">
        <Grid>
          <Row className="show-grid">
            <Col sm={10} xs={10} md={7} lg={7}>
              <Header titleColor={dataIsrael.cover.titleColor} title={dataIsrael.cover.title} image={dataIsrael.cover.image}/>
                <div className='simContent'>
                  {dataIsrael.items.map((simpson, index) => {
                    //add style
                    let styleForSimpson = {};
                    styleForSimpson.color = simpson.titleColor;
                    //make personal block
                    return (
                      // <div key={simpson.title} className="simpsons" style={{backgroundImage: 'url(' + simpson.image + ')'}}>
                      <div key={simpson.title} className="simpsons">
                        <h2>{index+1}</h2>
                        <h3 style={styleForSimpson}>{simpson.title}</h3>
                        <img src={simpson.image} alt={simpson.title}/>
                      </div>
                    )
                  })}
                </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;

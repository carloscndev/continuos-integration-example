//Import Modules
import React, { Component } from 'react';

//Import Assets
import Header from '../Header/Hader'
import SectionOne from '../SectionOne/SectionOne'
import Form from '../Form/Form'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main">
          <Header />
          <SectionOne />
          <SectionOne />
          <SectionOne />
          <SectionOne />
          <SectionOne />
          <SectionOne />
          <SectionOne />
          <SectionOne />
          <SectionOne />
          <Form />
        </div>
      </div>
    );
  }
}

export default App;

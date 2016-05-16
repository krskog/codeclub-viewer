import React from 'react';
import NavBar from '../components/NavBar';


const App = React.createClass({
  render() {
    return (
      <div>
        <NavBar params={this.props.params}/>
        <h1>Kodeklubben</h1>
        {this.props.children}
      </div>
    );
  }
});

export default App;

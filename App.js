import React from 'react';
import {Provider} from "react-redux";
import store from "./src/store/"
import NavigatorRoot from "./src/navigator";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { }
    
  }
  
  render() {
    
    return (
      <Provider store={store}>
        <NavigatorRoot />
      </Provider>
    );
  }
}

export default App;



import React from "react";
import CardHolder from "./components/CardHolder";
import avatar from "./avatar.json";

class App extends React.Component {
    state = {
      avatar
    };
  
    render() {
      return (
        <React.Fragment>
          <h1 className="title">Avatar: The Last Airbender Memory Game</h1>
          {this.state.avatar.map(character => (
            <CardHolder
              {...character}
              />
          ))}
        </React.Fragment>
      );
    }
  }
  
  export default App;
  
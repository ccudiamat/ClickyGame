import React from "react";
import CardHolder from "./components/CardHolder";
import Title from "./components/Title"
import avatar from "./avatar.json";

class App extends React.Component {
    state = {
      avatar
    };
  
    render() {
      return (
        <React.Fragment>
          <Title title="Avatar: The Last Airbender Memory Game" />
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
  
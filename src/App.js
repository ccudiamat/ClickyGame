import React from "react";
import CardHolder from "./components/CardHolder";
import Title from "./components/Title"
import avatar from "./avatar.json";
import Wrapper from "./components/Wrapper"

class App extends React.Component {
    state = {
      avatar,
      score: 0,
      highscore: 0
    };
  
    clickedId = () => {
        
    }

    render() {
      return (
        <React.Fragment>
          <Title title="Avatar: The Last Airbender Memory Game" score={this.state.score} highscore={this.state.highscore}/>
          <Wrapper>
          {this.state.avatar.map(character => (
            <CardHolder
              {...character}
              />
          ))}
          </Wrapper>
        </React.Fragment>
      );
    }
  }
  
  export default App;
  
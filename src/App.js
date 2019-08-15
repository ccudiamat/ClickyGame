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

    gameOver = () => {
        if (this.state.score > this.state.highscore) {
            this.setState({ highscore: this.state.score });
        }
        this.state.avatar.forEach(character => {
            character.clicked = 0;
        });
        alert(`Game Over :( \nscore: ${this.state.score}`);
        this.setState({ score: 0 });
    }

    render() {
        return (
            <React.Fragment>
                <Title title="Avatar: The Last Airbender Memory Game" score={this.state.score} highscore={this.state.highscore} />
                <Wrapper>
                    {this.state.avatar.map(character => (
                        <CardHolder
                            clickedId={this.clickedId}
                            id={character.id}
                            image={character.image}
                        />
                    ))}
                </Wrapper>
            </React.Fragment>
        );
    }
}

export default App;

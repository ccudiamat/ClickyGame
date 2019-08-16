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

    componentDidMount() {
        this.setState({ data: this.shuffleData(this.state.avatar)});
    }

    shuffleData = avatar => {
        let i = avatar.length - 1;
        while (i > 0) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = avatar[i];
            avatar[i] = avatar[j];
            avatar[j] = temp;
            i--;
        }
        return avatar;
    }

    clickedId = id => {
        let guessCorrect = false;
        const newData = this.state.avatar.map(character =>{
            const newItem = {...character}
            if (newItem.id === id) {
                if (!newItem.clicked) {
                    newItem.clicked = true;
                    guessCorrect = true;
                }
            }
            return newItem;
        });
        guessCorrect ? this.handleCorrect(newData) : this.gameOver(newData);
    }

    handleCorrect = data => {
        this.setState({
            avatar: this.shuffleData(data),
            score: this.state.score + 1
        })
    }

    gameOver = avatar => {
        if (this.state.score > this.state.highscore) {
            this.setState({highscore: this.state.score})}
        const resetData = avatar.map(character => ({ ...character, clicked: false }));
        alert(`Oh no, the Fire Nation took over! You lost.. \nYour score: ${this.state.score}`);
        this.setState({ 
            score: 0,
            avatar: resetData
        })
    }

    render() {
        return (
            <React.Fragment>
                <Title title="Avatar: The Last Airbender Memory Game" score={this.state.score} highscore={this.state.highscore} />
                <Wrapper>
                    {this.state.avatar.map(character => (
                        <CardHolder
                            clickedId={this.clickedId}
                            key={character.id}
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

import React, { Component } from "react";
import "./App.css";
import { Chess } from "chess.js";
import ChessBoard from "./components/chessBoard";

const chess = new Chess();

class App extends Component {
  state = {
    position: "start",
    currentPlayer: "white",
  };

  componentDidMount() {
    this.game = new Chess();
  }

  handleMove = ({ sourceSquare, targetSquare, piece }) => {
    chess.move({ from: sourceSquare, to: targetSquare });
    console.log("target square", piece);
    console.log(chess.ascii());
    const position = chess.fen();

    this.setState({ position });
  };

  render() {
    return (
      <div className="container">
        <ChessBoard position={this.state.position} onMove={this.handleMove} />
      </div>
    );
  }
}

export default App;

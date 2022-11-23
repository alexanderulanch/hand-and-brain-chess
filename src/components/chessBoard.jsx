import React, { Component } from "react";
import Chessboard from "chessboardjsx";

class ChessBoard extends Component {
  render() {
    const { position, onMove } = this.props;

    return (
      <Chessboard
        id="chess-board"
        width={600}
        position={position}
        onDrop={onMove}
        lightSquareStyle={{ backgroundColor: "rgb(228, 63, 90)" }}
        darkSquareStyle={{ backgroundColor: "rgb(31, 64, 104)" }}
        sparePiece
      />
    );
  }
}

export default ChessBoard;

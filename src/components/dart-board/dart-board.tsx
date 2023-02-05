import {Component, h} from "@stencil/core";

@Component({
  tag: "dart-board",
  styleUrl: "./dart-board.css",
  shadow: true
})
export class DartBoard {
  render () {
    const boardScores: number[] = [20, 1, 18, 4, 13, 6, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5];
    return [
      <button id="outer-rim"><ul>{boardScores.map(s => <li id={`s${s}`}>{s}</li>)}</ul></button>
    ]
  }
}

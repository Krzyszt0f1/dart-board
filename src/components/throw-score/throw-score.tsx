import {Component, h, Listen, State} from "@stencil/core";

@Component({
  tag: "throw-score",
  styleUrl: "./throw-score.css",
  shadow: true
})
export  class ThrowScore {
  @State() score = 0;

  @Listen('throwValueSelected', {target: 'body'})
  onStockSymbolSelect(event: CustomEvent) {
    console.log(event.detail)
    this.score = event.detail;
  }

  render () {
    return <h1>This throw is worth: {this.score}</h1>
  }
}

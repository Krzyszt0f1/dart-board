import {Component, h, Listen, State} from "@stencil/core";

@Component({
  tag: "throw-score",
  styleUrl: "./throw-score.css",
  shadow: true
})
export  class ThrowScore {
  @State() score = 0;
  @State() scoreStyleId = "";

  @Listen('throwValueSelected', {target: 'body'})
  onStockSymbolSelect(event: CustomEvent) {
    this.score = event.detail;
    this.scoreStyleId = "anim";
    setTimeout(() => {
      this.scoreStyleId = "";
    }, 2000);
  }

  render () {
    return(
      <div id="container">
        <div id="frame">
          <h1>This throw is worth <span id={this.scoreStyleId}>{this.score}</span></h1>
        </div>
      </div>
      )
  }
}

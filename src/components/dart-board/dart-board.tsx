import {Component, h} from "@stencil/core";

@Component({
  tag: "dart-board",
  styleUrl: "./dart-board.css",
  shadow: true
})
export class DartBoard {
  render () {
    const boardScores: {value: number, x: number, y: number, rotation: number}[] = [
      {
        value: 1,
        x: 1.3090169943749475,
        y: 1.9510565162951536,
        rotation: 18
      },
      {
        value: 18,
        x: 1.5877852522924731,
        y: 1.8090169943749475,
        rotation: 36
      },
      {
        value: 4,
        x: 1.8090169943749475,
        y: 1.5877852522924731,
        rotation: 54
      },
      {
        value: 13,
        x: 1.9510565162951536,
        y: 1.3090169943749475,
        rotation: 72
      },
      {
        value: 6,
        x: 2,
        y: 1,
        rotation: 90
      },
      {
        value: 10,
        x: 1.9510565162951536,
        y: 0.6909830056250525,
        rotation: 108
      },
      {
        value: 15,
        x: 1.8090169943749475,
        y: 0.41221474770752686,
        rotation: 126
      },
      {
        value: 2,
        x: 1.5877852522924731,
        y: 0.19098300562505255,
        rotation: 144
      },
      {
        value: 17,
        x: 1.3090169943749475,
        y: 0.04894348370484647,
        rotation: 162
      },
      {
        value: 3,
        x: 1,
        y: 0,
        rotation: 180
      },
      {
        value: 19,
        x: 0.690983005625053,
        y: 0.04894348370484625,
        rotation: 198
      },
      {
        value: 7,
        x: 0.412214747707527,
        y: 0.19098300562505255,
        rotation: 216
      },
      {
        value: 16,
        x: 0.19098300562505266,
        y: 0.41221474770752675,
        rotation: 234
      },
      {
        value: 8,
        x: 0.04894348370484647,
        y: 0.6909830056250525,
        rotation: 252
      },
      {
        value: 11,
        x: 0,
        y: 1,
        rotation: 270
      },
      {
        value: 14,
        x: 0.04894348370484636,
        y: 1.3090169943749472,
        rotation: 288
      },
      {
        value: 9,
        x: 0.19098300562505255,
        y: 1.587785252292473,
        rotation: 306
      },
      {
        value: 12,
        x: 0.41221474770752675,
        y: 1.8090169943749475,
        rotation: 324
      },
      {
        value: 5,
        x: 0.6909830056250524,
        y: 1.9510565162951536,
        rotation: 342
      },
      {
        value: 20,
        x: 1,
        y: 2,
        rotation: 360
      }
    ];
    return [
      <button id="outer-rim">{boardScores.map(s => <div style={{
        left: `${s.x * 10}rem`,
        top: `calc(20rem - ${s.y * 10}rem)`,
        transform: `rotate(${s.rotation}deg)`
      }}>{s.value}</div>)}</button>
    ]
  }
}

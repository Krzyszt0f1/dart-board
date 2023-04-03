import {Component, Event, EventEmitter, h} from "@stencil/core";

@Component({
  tag: "dart-board",
  styleUrl: "./dart-board.css",
  shadow: true
})
export class DartBoard {
  @Event({ bubbles: true, composed: true }) throwValueSelected: EventEmitter<number>;

  onThrowValueSelect(value: number) {
    this.throwValueSelected.emit(value);
  }
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

    const boardCircularSegments: {path: string, fill: string, value: number}[] = [
      {
        path: "M 284.00 284.00 L 284.00 70.00 A 214 214 0 0 1 350.13 80.47 L 284.00 284.00 A 0 0  0 0 0 284.00 284.00 Z",
        fill: "black",
        value: 20
      },
      {
        path: "M 284.00 284.00 L 350.13 80.47 A 214 214 0 0 1 409.79 110.87 L 284.00 284.00 A 0 0  0 0 0 284.00 284.00 Z",
        fill: "white",
        value: 1
      },
      {
        path: "M 284.00 284.00 L 409.79 110.87 A 214 214 0 0 1 457.13 158.21 L 284.00 284.00 A 0 0  0 0 0 284.00 284.00 Z",
        fill: "black",
        value: 18
      },
      {
        path: "M 284.00 284.00 L 457.13 158.21 A 214 214 0 0 1 487.53 217.87 L 284.00 284.00 A 0 0  0 0 0 284.00 284.00 Z",
        fill: "white",
        value: 4
      },
      {
        path: "M 284.00 284.00 L 487.53 217.87 A 214 214 0 0 1 498.00 284.00 L 284.00 284.00 A 0 0  0 0 0 284.00 284.00 Z",
        fill: "black",
        value: 13
      },
      {
        path: "M 284.00 284.00 L 498.00 284.00 A 214 214 0 0 1 487.53 350.13 L 284.00 284.00 A 0 0  0 0 0 284.00 284.00 Z",
        fill: "white",
        value: 6
      },
      {
        path: "M 284.00 284.00 L 487.53 350.13 A 214 214 0 0 1 457.13 409.79 L 284.00 284.00 A 0 0  0 0 0 284.00 284.00 Z",
        fill: "black",
        value: 10
      },
      {
        path: "M 284.00 284.00 L 457.13 409.79 A 214 214 0 0 1 409.79 457.13 L 284.00 284.00 A 0 0  0 0 0 284.00 284.00 Z",
        fill: "white",
        value: 15
      },
      {
        path: "M 284.00 284.00 L 409.79 457.13 A 214 214 0 0 1 350.13 487.53 L 284.00 284.00 A 0 0  0 0 0 284.00 284.00 Z",
        fill: "black",
        value: 2
      },
      {
        path: "M 284.00 284.00 L 350.13 487.53 A 214 214 0 0 1 284.00 498.00 L 284.00 284.00 A 0 0  0 0 0 284.00 284.00 Z",
        fill: "white",
        value: 17
      },
      {
        path: "M 284.00 284.00 L 284.00 498.00 A 214 214 0 0 1 217.87 487.53 L 284.00 284.00 A 0 0  0 0 0 284.00 284.00 Z",
        fill: "black",
        value: 3
      },
      {
        path: "M 284.00 284.00 L 217.87 487.53 A 214 214 0 0 1 158.21 457.13 L 284.00 284.00 A 0 0  0 0 0 284.00 284.00 Z",
        fill: "white",
        value: 19
      },
      {
        path: "M 284.00 284.00 L 158.21 457.13 A 214 214 0 0 1 110.87 409.79 L 284.00 284.00 A 0 0  0 0 0 284.00 284.00 Z",
        fill: "black",
        value: 7
      },
      {
        path: "M 284.00 284.00 L 110.87 409.79 A 214 214 0 0 1 80.47 350.13 L 284.00 284.00 A 0 0  0 0 0 284.00 284.00 Z",
        fill: "white",
        value: 16
      },
      {
        path: "M 284.00 284.00 L 80.47 350.13 A 214 214 0 0 1 70.00 284.00 L 284.00 284.00 A 0 0  0 0 0 284.00 284.00 Z",
        fill: "black",
        value: 8
      },
      {
        path: "M 284.00 284.00 L 70.00 284.00 A 214 214 0 0 1 80.47 217.87 L 284.00 284.00 A 0 0  0 0 0 284.00 284.00 Z",
        fill: "white",
        value: 11
      },
      {
        path: "M 284.00 284.00 L 80.47 217.87 A 214 214 0 0 1 110.87 158.21 L 284.00 284.00 A 0 0  0 0 0 284.00 284.00 Z",
        fill: "black",
        value: 14
      },
      {
        path: "M 284.00 284.00 L 110.87 158.21 A 214 214 0 0 1 158.21 110.87 L 284.00 284.00 A 0 0  0 0 0 284.00 284.00 Z",
        fill: "white",
        value: 9
      },
      {
        path: "M 284.00 284.00 L 158.21 110.87 A 214 214 0 0 1 217.87 80.47 L 284.00 284.00 A 0 0  0 0 0 284.00 284.00 Z",
        fill: "black",
        value: 12
      },
      {
        path: "M 284.00 284.00 L 217.87 80.47 A 214 214 0 0 1 284.00 70.00 L 284.00 284.00 A 0 0  0 0 0 284.00 284.00 Z",
        fill: "white",
        value: 5
      }
    ];
    const boardAnnularSegments: {path: string, fill: string, value: number}[] =
      boardCircularSegments.map(segment => ({...segment, fill: segment.fill === "black" ? "darkred" : "green"}));

    return (
      <div id="container">
        <div id="outer-rim">{boardScores.map(s => <div
          id="scores"
          style={{
            left: `${s.x * 268}px`,
            top: `calc(536px - ${s.y * 268}px)`,
            transform: `rotate(${s.rotation}deg)`
          }}>{s.value}</div>)}</div>
        <div id="_25" onMouseOver={this.onThrowValueSelect.bind(this,25)}></div>
        <div id="bulls-eye" onMouseOver={this.onThrowValueSelect.bind(this,50)}></div>
        <svg>
          <g>
            <path
              d="M 0 284 A 284 284 0 1 1 568 284 A 284 284 1 1 1 0 284 Z"
              onMouseOver={this.onThrowValueSelect.bind(this,0)}
            />
            {boardAnnularSegments.map(s =>
              <path
                d={s.path}
                onMouseOver={this.onThrowValueSelect.bind(this,s.value * 2)}
                fill={s.fill}
              />)}
            {/*translate values were calculated by doing: (1 - scale) * currentPosition, where current position is x,y = 284 */}
            {boardCircularSegments.map(s =>
              <path
                d={s.path}
                onMouseOver={this.onThrowValueSelect.bind(this,s.value)}
                fill={s.fill}
                transform="translate(14.2, 14.2) scale(0.95)"
              />)}
            {boardAnnularSegments.map(s =>
              <path
                d={s.path}
                onMouseOver={this.onThrowValueSelect.bind(this,s.value * 3)}
                fill={s.fill}
                transform="translate(105, 105) scale(0.63)"
              />)}
            {boardCircularSegments.map(s =>
              <path
                d={s.path}
                onMouseOver={this.onThrowValueSelect.bind(this,s.value)}
                fill={s.fill}
                transform="translate(119.3, 119.3) scale(0.58)"
              />)}
          </g>
        </svg>
      </div>
    )
  }
}

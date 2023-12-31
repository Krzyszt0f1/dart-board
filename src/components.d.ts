/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface DartBoard {
    }
    interface ThrowScore {
    }
}
export interface DartBoardCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLDartBoardElement;
}
declare global {
    interface HTMLDartBoardElement extends Components.DartBoard, HTMLStencilElement {
    }
    var HTMLDartBoardElement: {
        prototype: HTMLDartBoardElement;
        new (): HTMLDartBoardElement;
    };
    interface HTMLThrowScoreElement extends Components.ThrowScore, HTMLStencilElement {
    }
    var HTMLThrowScoreElement: {
        prototype: HTMLThrowScoreElement;
        new (): HTMLThrowScoreElement;
    };
    interface HTMLElementTagNameMap {
        "dart-board": HTMLDartBoardElement;
        "throw-score": HTMLThrowScoreElement;
    }
}
declare namespace LocalJSX {
    interface DartBoard {
        "onThrowValueSelected"?: (event: DartBoardCustomEvent<number>) => void;
    }
    interface ThrowScore {
    }
    interface IntrinsicElements {
        "dart-board": DartBoard;
        "throw-score": ThrowScore;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "dart-board": LocalJSX.DartBoard & JSXBase.HTMLAttributes<HTMLDartBoardElement>;
            "throw-score": LocalJSX.ThrowScore & JSXBase.HTMLAttributes<HTMLThrowScoreElement>;
        }
    }
}

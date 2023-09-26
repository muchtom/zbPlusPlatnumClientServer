import { NgxUiLoaderConfig, PB_DIRECTION, POSITION, SPINNER } from "ngx-ui-loader";

export class UiLoader {
  static load (): NgxUiLoaderConfig {
    return {
      bgsColor: "blue",
      bgsPosition: POSITION.centerCenter,
      bgsSize: 80,
      bgsType: SPINNER.ballSpinClockwise, // background spinner type
      fgsType: SPINNER.ballSpinClockwise, // foreground spinner type
      pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
    };
  }
}
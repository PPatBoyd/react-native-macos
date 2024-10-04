/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 * @format
 */

import type {TurboModule} from '../TurboModule/RCTExport';

import * as TurboModuleRegistry from '../TurboModule/TurboModuleRegistry';

export type ColorSchemeName = 'light' | 'dark';

export type AppearancePreferences = {|
  // TODO: (hramos) T52919652 Use ?ColorSchemeName once codegen supports union
  // types.
  /* 'light' | 'dark' */
  colorScheme?: ?string,

  /*
   * undefined: multicolor
   * -1: graphite
   *  0: red
   *  1: orange
   *  2: yellow
   *  3: green
   *  4: blue
   *  5: purple
   *  6: pink
   */
  accentColor?: ?number,
|};

export interface Spec extends TurboModule {
  // TODO: (hramos) T52919652 Use ?ColorSchemeName once codegen supports union
  // types.
  /* 'light' | 'dark' */
  +getColorScheme: () => ?string;
  +setColorScheme?: (colorScheme: string) => void;

  // RCTEventEmitter
  +addListener: (eventName: string) => void;
  +removeListeners: (count: number) => void;
}

export default (TurboModuleRegistry.get<Spec>('Appearance'): ?Spec);

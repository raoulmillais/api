// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { StorageEntryMetadataLatest } from '../interfaces/metadata';
import type { Codec } from '../types';

export interface StorageEntry {
  (...args: any[]): Uint8Array;
  iterKey?: (...args: any[]) => Uint8Array & Codec;
  keyPrefix: (...args: any[]) => Uint8Array;
  meta: StorageEntryMetadataLatest;
  method: string;
  prefix: string;
  section: string;
  toJSON: () => any;
}

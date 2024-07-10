/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import config from '@zendeskgarden/eslint-config';
import noticePlugin from '@zendeskgarden/eslint-config/plugins/notice.js';
import prettierConfig from 'eslint-config-prettier';

export default [
  ...config,
  noticePlugin,
  prettierConfig,
  {
    languageOptions: {
      parserOptions: {
        requireConfigFile: false
      }
    }
  }
];

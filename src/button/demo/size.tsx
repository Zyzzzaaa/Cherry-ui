/**
 * title: size
 * description: 按钮根据size来变换尺寸，提供了 `small`、`default`、`large`三种
 */

import React from 'react';
import { Button } from 'cherry-ui';
export default () => {
  return (
    <div>
      <Button size="small">small</Button>
      <Button>default</Button>
      <Button size="large">large</Button>
    </div>
  );
};

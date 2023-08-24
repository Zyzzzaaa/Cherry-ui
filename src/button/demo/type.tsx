/**
 * title: type
 * description: 可以根据`type`来设置不同的颜色, `primary`、`success`、 `warning`、 `danger`、 `link`。设置`round`属性可以设置圆角按钮。
 */

import React from 'react';
import { Button } from 'cherry-ui-react';
export default () => {
  return (
    <div>
      <div>
        <Button type="primary">primary</Button>
        <Button type="success">success</Button>
        <Button type="warning">warning</Button>
        <Button type="danger">danger</Button>
        <Button type="link" href="https://github.com/Zyzzzaaa/cherry-ui">
          link
        </Button>
      </div>
      <div>
        <Button type="primary" round>
          primary
        </Button>
        <Button type="success" round>
          success
        </Button>
        <Button type="warning" round>
          warning
        </Button>
        <Button type="danger" round>
          danger
        </Button>
        <Button type="link" round href="https://github.com/Zyzzzaaa/cherry-ui">
          link
        </Button>
      </div>
    </div>
  );
};

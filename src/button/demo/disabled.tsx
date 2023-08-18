/**
 * title: disabled
 * description: 你可以使用`disabled`属性来定义按钮是否被禁用。使用`disabled`属性来控制按钮是否为禁用状态。该属性接受一个`Boolean`类型的值。
 */

import React from 'react';
import { Button } from 'cherry-ui-react';
export default () => {
  return (
    <div>
      <div>
        <Button type="primary" disabled>
          primary
        </Button>
        <Button type="success" disabled>
          success
        </Button>
        <Button type="warning" disabled>
          warning
        </Button>
        <Button type="danger" disabled>
          danger
        </Button>
        <Button type="link" disabled href="https://github.com/Zyzzzaaa/cherry-ui">
          link
        </Button>
      </div>
      <div>
        <Button type="primary" round disabled>
          primary
        </Button>
        <Button type="success" round disabled>
          success
        </Button>
        <Button type="warning" round disabled>
          warning
        </Button>
        <Button type="danger" round disabled>
          danger
        </Button>
        <Button type="link" round disabled href="https://github.com/Zyzzzaaa/cherry-ui">
          link
        </Button>
      </div>
    </div>
  );
};

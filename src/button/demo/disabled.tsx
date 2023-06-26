import React from 'react';
import { Button } from 'cherry-ui';
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

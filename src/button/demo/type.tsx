import React from 'react';
import { Button } from 'cherry-ui';
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

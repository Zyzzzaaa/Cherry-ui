/**
 * title: 颜色
 * description: 我们提出了6种颜色的`Alert`，分别是:`primary` 、`success`、`warning`、`danger`。
 */
import React from "react";
import { Alert } from "cherry-ui";

export default () => {
    return (
        <div>
            <Alert title="默认提示" type="primary">这是一条默认提示。</Alert>
            <Alert title="成功提示" type="success">这是一条成功提示。</Alert>
            <Alert title="警告提示" type="warning">这是一条警告提示。</Alert>
            <Alert title="危险提示" type="danger">这是一条危险提示。</Alert>
        </div>
    )
}
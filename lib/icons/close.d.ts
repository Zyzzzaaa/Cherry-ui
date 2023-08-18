import React from 'react';
export interface iconProps {
    color?: string;
    size?: string;
}
export default function IconClose<iconProps>({ color, size }: {
    color?: string | undefined;
    size?: string | undefined;
}): React.JSX.Element;

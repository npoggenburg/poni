import React, {lazy, Suspense} from 'react';

const LazyButton = lazy(() => import('./button'));

const Button = (props: JSX.IntrinsicAttributes & {children?: React.ReactNode}) => (
    <Suspense fallback={null}>
        <LazyButton label={''} {...props} />
    </Suspense>
);

export default Button;

import React, {lazy, Suspense} from 'react';

const LazyIcon = lazy(() => import('./icon'));

const Icon = (props: JSX.IntrinsicAttributes & {children?: React.ReactNode}) => (
    <Suspense fallback={null}>
        <LazyIcon {...props} />
    </Suspense>
);

export default Icon;

import React, { lazy, Suspense } from 'react';

const LazyDemopage = lazy(() => import('./Demopage'));

const Demopage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyDemopage {...props} />
  </Suspense>
);

export default Demopage;

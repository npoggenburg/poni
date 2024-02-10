import React, { lazy, Suspense } from 'react';

const LazyText = lazy(() => import('./Text'));

const Text = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyText {...props} />
  </Suspense>
);

export default Text;

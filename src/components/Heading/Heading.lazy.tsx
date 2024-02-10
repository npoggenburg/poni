import React, { lazy, Suspense } from 'react';

const LazyHeading = lazy(() => import('./Heading'));

const Heading = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyHeading {...props} />
  </Suspense>
);

export default Heading;

import React, { lazy, Suspense } from 'react';

const LazySection = lazy(() => import('./Section'));

const Section = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySection {...props} />
  </Suspense>
);

export default Section;

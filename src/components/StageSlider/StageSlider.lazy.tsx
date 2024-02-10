import React, {lazy, Suspense} from 'react';

const LazyStageSlider = lazy(() => import('./StageSlider'));

const StageSlider = (props: JSX.IntrinsicAttributes & {children?: React.ReactNode}) => (
    <Suspense fallback={null}>
        <LazyStageSlider {...props} />
    </Suspense>
);

export default StageSlider;

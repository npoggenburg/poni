import React, {FC, ReactNode, useEffect} from 'react';
import './StageSlider.scss';
import {StageSlider as StageSliderLib} from './StageSlider.lib';
import Icon from '../Icon/Icon';
import clsx from 'clsx';

interface StageSliderProps {}

const StageSlider: FC<StageSliderProps> = () => {
    useEffect(() => {
        const stageSliderElements: NodeListOf<HTMLElement> = document.querySelectorAll(
            '[data-stage-slider="container"]',
        );
        if (stageSliderElements !== null) {
            for (const element of stageSliderElements) {
                new StageSliderLib({selector: element});
            }
        }
    }, []);

    return (
        <div className="swiper" data-stage-slider="container">
            <div className="swiper-wrapper">
                <div className="swiper-slide">Slide 1</div>
                <div className="swiper-slide">Slide 2</div>
                <div className="swiper-slide">Slide 3</div>
            </div>
            <div
                className="flex h-6 justify-center bg-red-500"
                data-stage-slider="pagination"
            ></div>

            <StageSliderNavigationButton direction={'prev'}>
                <Icon name="chevron-left" size="md" />
            </StageSliderNavigationButton>
            <StageSliderNavigationButton direction={'next'}>
                <Icon name="chevron-right" size="md" />
            </StageSliderNavigationButton>
        </div>
    );
};
interface StageSliderNavigationButtonProps {
    direction: 'prev' | 'next';
    children?: ReactNode;
}

const StageSliderNavigationButton: FC<StageSliderNavigationButtonProps> = ({
    direction,
    children,
}) => {
    return (
        <div
            className={clsx(
                [' h-10  w-10 bg-red-500'],
                [
                    'absolute top-1/2 flex -translate-y-1/2 transform-gpu items-center justify-center',
                ],
                [direction === 'prev' && 'left-0 '],
                [direction === 'next' && 'right-0 '],
            )}
            data-stage-slider={`navigation-${direction}`}
        >
            {children}
        </div>
    );
};

export default StageSlider;

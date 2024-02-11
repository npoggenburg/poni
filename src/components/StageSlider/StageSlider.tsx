import React, {FC, ReactNode, useEffect} from 'react';
import './StageSlider.scss';
import {StageSlider as StageSliderLib} from './StageSlider.lib';
import Icon from '../Icon/Icon';
import clsx from 'clsx';

interface StageSliderProps {
    items?: number;
}

const StageSlider: FC<StageSliderProps> = ({items = 1}) => {
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
    const itemArray = Array.from({length: items}, (_, index) => index + 1);

    return (
        <div className="swiper" data-stage-slider="container">
            <div className="swiper-wrapper">
                {itemArray.map((slide, index) => (
                    <div className="swiper-slide" key={index} data-stage-slider="slide">
                        <img
                            src={`//placehold.co/600x400?text=Slide ${index + 1}`}
                            title=""
                            alt=""
                            className={clsx([' aspect-video max-h-[60vh] w-full object-cover'])}
                        />
                    </div>
                ))}
            </div>
            <div
                className={clsx(['flex hidden content-stretch items-center gap-1'])}
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
                [
                    ' supports-backdrop-blur:bg-slate/95 h-20 w-10 rounded-sm bg-slate-900/50 text-white backdrop-blur transition-all',
                ],
                ['hover:bg-slate-900/70'],
                [
                    'absolute top-1/2 z-10 -mt-5 flex hidden -translate-y-1/2 transform-gpu cursor-pointer items-center justify-center',
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

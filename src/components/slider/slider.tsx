import {FC, useEffect} from 'react';
import './slider.scss';
import {Slider as SliderLib} from './slider.lib';
import React from 'react';

interface SliderProps {}

const Slider: FC<SliderProps> = () => {
    useEffect(() => {
        const container: HTMLElement | null = document.querySelector('[data-slider]');
        let interval;
        if (container !== null) {
            const slides: HTMLElement[] | null = Array.from(
                container.querySelectorAll('[data-slider-item]'),
            );

            const slider = new SliderLib({
                container: container,
                slides: slides,
                slideWidth: 100,
            });

            interval = setInterval(slider.nextSlide.bind(slider), 1500);
        }
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative overflow-hidden" data-slider>
            <div data-slider-item className="border border-sky-500">
                Slide 1
            </div>
            <div data-slider-item className="border-sky-500">
                Slide 2
            </div>
            <div data-slider-item className="border-sky-500">
                Slide 3
            </div>
            <div data-slider-item className="border-sky-500">
                Slide 4
            </div>
            <div data-slider-item className="border-sky-500">
                Slide 5
            </div>
        </div>
    );
};

export default Slider;

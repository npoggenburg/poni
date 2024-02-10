import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import {Navigation, Pagination, Autoplay} from 'swiper/modules';
import clsx from 'clsx';

interface StageSliderProps {
    selector: HTMLElement;
}

export class StageSlider {
    private selector: HTMLElement;
    private slider;

    constructor(options: StageSliderProps) {
        this.selector = options.selector;
        this.init();
    }

    private init(): void {
        // init Swiper:
        this.slider = new Swiper(this.selector, {
            modules: [Navigation, Pagination, Autoplay],
            pagination: {
                el: '[data-stage-slider="pagination"]',
                type: 'bullets',
                bulletClass: clsx(['h-10 w-10 bg-blue-500']),
                bulletActiveClass: clsx(['bg-green-500']),
            },

            // Navigation arrows
            navigation: {
                nextEl: '[data-stage-slider="navigation-next"]',
                prevEl: '[data-stage-slider="navigation-prev"]',
            },
        });
    }

    public destroy(): void {
        // Remove all event listeners
        this.slider.destroy();
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const stageSliderElements: NodeListOf<HTMLElement> =
        document.querySelectorAll('[data-stage-slider]');
    if (stageSliderElements !== null) {
        for (const element of stageSliderElements) {
            new StageSlider({selector: element});
        }
    }
});

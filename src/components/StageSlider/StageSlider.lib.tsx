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
        const enableControls: boolean =
            this.selector.querySelectorAll('[data-stage-slider="slide"]').length > 1;

        if (enableControls) {
            this.selector
                .querySelectorAll(
                    '[data-stage-slider="pagination"],[data-stage-slider^="navigation-"]',
                )
                .forEach((item) => item.classList.remove('hidden'));
        }

        this.slider = new Swiper(this.selector, {
            modules: [Navigation, Pagination, Autoplay],
            loop: true,
            pagination: enableControls
                ? {
                      el: '[data-stage-slider="pagination"]',
                      type: 'bullets',
                      enabled: enableControls,
                      clickable: true,
                      bulletClass: clsx(
                          [
                              'transition-a relative h-10 grow cursor-pointer rounded-sm transition-all',
                          ],
                          ['hover:bg-slate-700/5'],
                          [
                              'before:absolute before:left-1 before:right-1 before:top-1/2 before:h-1 before:-translate-y-1/2 before:rounded-sm before:bg-slate-500 before:transition-all',
                          ],
                      ),
                      bulletActiveClass: clsx(['before:!h-2 before:!bg-slate-700']),
                  }
                : false,
            navigation: enableControls
                ? {
                      nextEl: '[data-stage-slider="navigation-next"]',
                      prevEl: '[data-stage-slider="navigation-prev"]',
                  }
                : false,
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

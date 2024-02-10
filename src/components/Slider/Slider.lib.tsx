interface SliderOptions {
    container: HTMLElement;
    slides: HTMLElement[];
    slideWidth: number;
    slideIndex?: number;
}

export class Slider {
    private container: HTMLElement;
    private slides: HTMLElement[];
    private slideWidth: number;
    private slideIndex: number;

    constructor(options: SliderOptions) {
        console.log('Slider Lib init');
        this.container = options.container;
        this.slides = options.slides;
        this.slideWidth = options.slideWidth;
        this.slideIndex = options.slideIndex || 0;

        this.init();
    }

    private init(): void {
        this.slides.forEach((slide) => {
            slide.style.width = `${this.slideWidth}px`;
        });

        this.showSlide(this.slideIndex);
    }

    private showSlide(index: number): void {
        console.log('showSlide', this.slideIndex + 1);
        if (index < 0 || index >= this.slides.length) {
            index = 0;
        }

        this.slides.forEach((slide) => {
            slide.classList.remove('border');
        });
        this.slides[index].classList.add('border');

        this.slideIndex = index;
    }

    public nextSlide(): void {
        this.showSlide(this.slideIndex + 1);
    }

    public prevSlide(): void {
        this.showSlide(this.slideIndex - 1);
    }

    public destroy(): void {
        // Remove all event listeners
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const container: HTMLElement | null = document.querySelector('[data-slider]');
    if (container !== null) {
        const slides: HTMLElement[] | null = Array.from(
            container.querySelectorAll('[data-slider-item]'),
        );

        const slider = new Slider({
            container: container,
            slides: slides,
            slideWidth: 100,
        });

        setInterval(slider.nextSlide.bind(slider), 1500);
    }
});

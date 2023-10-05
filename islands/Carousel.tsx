import { tw } from 'twind';
import { useSignal } from '@preact/signals';
import { useEffect, useRef } from 'preact/hooks';
import IconCircleChevronsRight from '@tabler/icons/circle-chevrons-right.tsx';
import IconCircleChevronsLeft from '@tabler/icons/circle-chevrons-left.tsx';

type SlideData = {
    bgImage: string;
    text: string;
    url: string;
};

type SlideProps = {
    class?: string;
    key?: number;
    data: SlideData;
};

const Slide = (props: SlideProps) => {
    const { key, data } = props;
    const { bgImage, text, url } = data;
    if (props.class === undefined) props.class = '';
    return (
        <div
            key={key}
            class={`flex flex-col items-center justify-center ${props.class} w-full h-full text-center text-white font-semibold`}
        >
            <div class='absolute top-4 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-[#313244] rounded-full'>
                <span class='text-md font-bold text-[#cdd6f4]'>{text}</span>
            </div>
            <a href={url} target='_blank'>
                <img
                    src={bgImage}
                    class='self-center object-cover w-full h-full'
                />
            </a>
        </div>
    );
};

type CarouselProps = {
    slideData: SlideData[];
    showNavigation?: boolean;
    interval?: number;
    currentSlide?: number;
    automatic?: boolean;
    class?: string;
};

const Carousel = (props: CarouselProps) => {
    const NAVIGATION_COLOR =
        `hover:text-[#6c6f85] dark:hover:text-[#a6adc8] text-[#4c4f69] dark:text-[#cdd6f4]`;
    const CHEVRON_STYLE =
        `absolute z-30 w-10 h-10 ${NAVIGATION_COLOR} cursor-pointer`;
    const SHOW_NAVIGATION = props.showNavigation === false ? false : true;
    const SLIDE_INTERVAL = props.interval ? props.interval : 3500;
    const currentSlide = useSignal(props.currentSlide ? props.currentSlide : 0);
    const automatic = useSignal(props.automatic === false ? false : true);
    const slideshowRef = useRef<HTMLDivElement>(null);

    const slideClasses = (idx = 0) => {
        let outgoingSlide = currentSlide.value - 1;
        let incomingSlide = currentSlide.value + 1;

        if (outgoingSlide === -1) outgoingSlide = props.slideData.length - 1;
        if (incomingSlide === props.slideData.length) incomingSlide = 0;

        const TRANSITION_CLASS = () => {
            if (currentSlide.value === idx) return 'translate-x-0 z-20';
            if (incomingSlide === idx) return 'translate-x-full z-10';
            if (outgoingSlide === idx) return '-translate-x-full z-10';
            return 'translate-x-full';
        };
        return tw`slide absolute top-0 left-0 transition-all ease-in-out duration-700 transform ${TRANSITION_CLASS}`;
    };

    const nextSlide = () => {
        if (props.slideData.length === currentSlide.value + 1) {
            currentSlide.value = 0;
        } else {
            currentSlide.value++;
        }
    };

    const previousSlide = () => {
        if (currentSlide.value === 0) {
            currentSlide.value = props.slideData.length - 1;
        } else {
            currentSlide.value--;
        }
    };

    const chevronClick = (doCallback = () => {}) => {
        if (automatic.value) automatic.value = false;
        return doCallback();
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (automatic.value) nextSlide();
        }, SLIDE_INTERVAL);
        return () => clearInterval(interval);
    }, []);

    const ArrowKeyNavigation = () => {
        const keydownHandler = (event: KeyboardEvent) => {
            if (automatic.value) automatic.value = false;
            switch (event.code) {
                case 'ArrowLeft':
                    event.preventDefault();
                    previousSlide();
                    break;
                case 'ArrowRight':
                    event.preventDefault();
                    nextSlide();
                    break;
                default:
                    break;
            }
        };
        slideshowRef.current?.addEventListener('keydown', keydownHandler);
        return () =>
            slideshowRef.current?.removeEventListener(
                'keydown',
                keydownHandler,
            );
    };
    useEffect(ArrowKeyNavigation, []);

    const goToSlide = (slide_index = 0) => {
        if (automatic.value) automatic.value = false;
        currentSlide.value = slide_index;
    };

    const DotsNavigation = () => (
        <div
            class={'slide_nav z-30 w-full absolute bottom-0 flex justify-center cursor-pointer'}
        >
            {props.slideData.map((_item, idx) => {
                return (
                    <div
                        class={`px-1 ${NAVIGATION_COLOR}`}
                        onClick={() => {
                            goToSlide(idx);
                        }}
                        key={idx}
                    >
                        {idx === currentSlide.value ? <>●</> : <>○</>}
                    </div>
                );
            })}
        </div>
    );

    return (
        <div
            ref={slideshowRef}
            class={`slideshow relative flex-1 flex-end p-0 overflow-hidden rounded-lg ${
                props.class !== undefined ? props.class : ''
            }`}
            tabIndex={0}
        >
            <IconCircleChevronsLeft
                class={`left-0 ${CHEVRON_STYLE}`}
                style='top: calc(50% - 20px)'
                onClick={() => chevronClick(previousSlide)}
            />
            <IconCircleChevronsRight
                class={`right-0 ${CHEVRON_STYLE}`}
                style='top: calc(50% - 20px)'
                onClick={() => chevronClick(nextSlide)}
            />
            {props.slideData.map((item, idx) => (
                <Slide
                    data={item}
                    key={idx}
                    class={slideClasses(idx)}
                />
            ))}
            {SHOW_NAVIGATION &&
                <DotsNavigation />}
            <Slide
                data={props.slideData[0]}
                class='opacity-0 pointer-events-none'
            />
        </div>
    );
};

export default Carousel;

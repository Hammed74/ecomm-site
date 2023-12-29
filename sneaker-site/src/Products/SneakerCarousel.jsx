import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./SneakerCarouselArrowButtons";
import Autoplay from "embla-carousel-autoplay";
import { sneakerArray } from "./imageByIndex";

const SneakerCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onButtonClick = useCallback((emblaApi) => {
    const { autoplay } = emblaApi.plugins();
    if (!autoplay) return;
    if (autoplay.options.stopOnInteraction !== true) autoplay.stop();
  }, []);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onButtonClick);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {sneakerArray.map((sneaker) => (
            <div className="embla__slide" key={sneaker.title}>
              <div className="slide-container">
                <h3>{sneaker.title}</h3>
                <p>{sneaker.price}</p>
                <img
                  className="embla__slide__img"
                  src={sneaker.src}
                  alt="Your alt text"
                />
                <p className="description">{sneaker.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__buttons">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </div>
  );
};

export default SneakerCarousel;

import '../styles/prodcuts.css'
import SneakerCarousel from './SneakerCarousel';

export default function ProductPage({slides, options}){
      const OPTIONS = { align: "start", loop: true };
      const SLIDE_COUNT = 4;
      const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
    return (
      <>
        <h2 className="product-header">Sneakers of the WEEK</h2>
        <SneakerCarousel slides={slides} options={options} />
      </>
    );
}


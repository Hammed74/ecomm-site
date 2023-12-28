import '../styles/prodcuts.css'
import SneakerCarousel from './SneakerCarousel';

export default function ProductPage({slides, options}){
    return (
      <>
        <h2 className="product-header">Sneakers of the WEEK</h2>
        <SneakerCarousel slides={slides} options={options} />
      </>
    );
}


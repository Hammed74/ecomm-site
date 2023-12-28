import image1 from "../assets/AirForceOne.png"
import image2 from "../assets/Jordan1Bred.png";
import image3 from "../assets/Jordan4Thunder.png";
import image4 from "../assets/NikeDunk.png";

const images = [image1, image2, image3, image4];

export const sneakerArray = [
  {
    title: "Air Force One",
    src: image1,
    description:
      "From musicians to artists to streetwear icons, the Air Force 1 has always been more than a sneaker. Everywhere it’s gone, it’s changed the game. But the past 40 years are behind us, so let’s set the stage for the next 40. Because Force has always been strongest when we do it together.",
    price: "$110",
  },
  {
    title: 'Jordan 1 Bred "Satin"',
    src: image2,
    description:
      "Unveiling the epitome of timeless design with the Jordan 1 Retro High OG Satin Bred in the ever-classic Black/University Red/White colorway. The sophisticated satin finish adorns the iconic silhouette, exuding a blend of vintage charm and modern-day chic.",
    price: "$180",
  },
  {
    title: "Jordan 4 Thunder",
    src: image3,
    description:
      "Jordan Brand brought back this fan favorite colorway that is constructed using premium black nubuck uppers with splashes of Tour Yellow throughout the midsole, lace eyelets, and tongue. Michael Jordan's iconic Jumpman logo is placed on the heel tab, tongue and insoles of the sneakers.",
    price: "$210",
  },
  {
    title: 'Nike Dunk "Purple Pigeon"',
    src: image4,
    description: "The Nike SB Dunk Low Pro SB ‘Purple Pigeon’ was released In 2006 and has a close resemblance to the ‘Pigeon’ Dunk since they share a grey base color. The ‘Purple Pigeon’ showcases a Light Graphite upper with a Violet Swoosh and outsole.",
    price: "$500",
  }
];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;

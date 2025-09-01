import { CardCarousel } from "@/components/ui/card-carousel";
import Image from "next/image";

export default function Home() {
  const images = [
    { src: "/Images/image1.png", alt: "Image 1" },
    { src: "/Images/image2.png", alt: "Image 2" },
    { src: "/Images/image3.png", alt: "Image 3" },
    

  ]
  return (
    <div>
      <main >
       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa aliquam assumenda itaque obcaecati! Ipsam tempora saepe enim non, doloribus quaerat? Animi, commodi dolor explicabo nisi illum magnam? Hic, adipisci reprehenderit.</p>
      </main>
      <CardCarousel
        images={images}
        autoplayDelay={2000}
        showPagination={true}
        showNavigation={true}
      />
    </div>
  );
}

import Carousel from './Carousel.tsx';

interface PBCarouselProps {
  images: string[];
}

// Use this for Projects / Blogs
export default function PBCarousel({ images }: PBCarouselProps) {
  return (
    <div className="w-full sm:w-lg md:w-xl aspect-video mx-auto mb-2">
      <Carousel images={images} stationary={true} grayscale={false} />
    </div>
  );
}

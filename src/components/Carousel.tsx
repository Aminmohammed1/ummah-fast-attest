import React, { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import news_article from "@/assets/news_article.png";
import storeFront from "@/assets/storeFrontWithStudents.jpg"
import articleMention from "@/assets/article_mention.png"
import namePlate from "@/assets/name-plate.jpg"
import insideStore from "@/assets/inside.jpg"
import flags from "@/assets/flags.jpg"
import apostille from "@/assets/apostille.jpg"
import azizBhai from "@/assets/aziz_bhai_with_angrez.jpg"
const Carousel: React.FC = () => {
  const autoplay = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true }) // 3s autoplay
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    autoplay.current,
  ]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const slides = [
    flags,
    apostille,
    storeFront,
    articleMention,
    news_article,
    namePlate,
    insideStore,
    azizBhai

    
  ];

  return (
    <div className="w-full max-w-lg mx-auto py-5">
      {/* Carousel Viewport */}
      <div className="overflow-hidden relative" ref={emblaRef}>
        <div className="flex">
          {slides.map((src, i) => (
            <motion.div
              key={i}
              className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] px-2"
              initial={{ opacity: 0.6, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {(i === 3 || i === 4) ? (
                <a
                  href="https://www.siasat.com/certificate-attestation-woes-end-with-apostille-system-in-saudi-arabia-2510716/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={src}
                    alt={`Slide ${i + 1}`}
                    className="w-full h-56 object-contain rounded-2xl shadow-md"
                  />
                </a>
              ) : (
                <img
                  src={src}
                  alt={`Slide ${i + 1}`}
                  className="w-full h-56 object-contain rounded-2xl shadow-md"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-between mt-3">
        <button
          onClick={scrollPrev}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={scrollNext}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;

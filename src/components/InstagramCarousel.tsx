import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ButtonDivLeft, ButtonDivRight, ContainerInstagram, ContainerPosts } from "./styles";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export default function InstagramCarousel() {
  const [current, setCurrent] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  const posts = [
    "DOdp1RgDR1c",
    "DPRvROtEVqh",
    "CmpNsxduklJ",
    "ClWps-0OT78",
    "CmhQH7rObRd",
    "ClMenzuuxsQ"
  ];

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? posts.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === posts.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [window.innerWidth])

  return (
    <ContainerInstagram>
      <ButtonDivLeft>
        <BiChevronLeft size={50} onClick={handlePrev} onMouseDown={(e) => e.preventDefault()}/>
      </ButtonDivLeft>
      <ContainerPosts>
        {posts.map((src, index) => {
          const distance = Math.abs(current - index);
          const isActive = index === current;

          const scale = isActive ? 1 : distance === 1 ? 0.8 : 0.7;
          const blur = isActive ? "blur(0px)" : "blur(5px)";
          const opacity = isActive ? 1 : 0.3;

          return (
            <motion.div
              key={index}
              animate={{ scale, opacity }}
              transition={{ type: "spring", stiffness: 800, damping: 60 }}
              className="relative flex-shrink-0"
              onMouseDown={(e) => e.preventDefault()}
              style={{
                filter: blur,
                zIndex: isActive ? 2 : 1,
                height: "460px",
                display: isActive ? "flex" : width > 900 ? "flex" : "none"
              }}
            >
              <iframe
                src={`https://www.instagram.com/p/${src}/embed/`}
                allowFullScreen
                frameBorder="0"
                scrolling="no"
                style={{
                  width: "250px",
                  height: "450px",
                  borderRadius: "20px",
                  pointerEvents: isActive ? "auto" : "none"
                }}
              />
            </motion.div>
          );
        })}
      </ContainerPosts>
      <ButtonDivRight>
        <BiChevronRight size={50} onClick={handleNext} onMouseDown={(e) => e.preventDefault()} />
      </ButtonDivRight>
    </ContainerInstagram>
  );
};

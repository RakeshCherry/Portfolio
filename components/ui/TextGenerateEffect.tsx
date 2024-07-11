"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className={className}>
      {wordsArray.map((word, idx) => {
        const isSpecialIndex = [3, 8, 9].includes(idx);
        const textColorClass = isSpecialIndex ? 'text-purple' : 'dark:text-white text-black';

        return (
          <motion.span
            key={word + idx}
            className={`${textColorClass} opacity-0`}
          >
            {word}{" "}
          </motion.span>
        );
      })}
    </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className=" dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

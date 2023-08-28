import React, { useState, useEffect, useRef } from 'react';
import classes from './ImageCard.module.scss';

interface ImageCardProps {
  img: string;
  additionalStyle?: { [key: string]: string };
  scaleOnHover?: boolean;
}

const ImageCard: React.FC<ImageCardProps> = (props) => {
  const { img, additionalStyle, scaleOnHover } = props;

  const [isInView, setIsInView] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }
    const div = divRef.current;

    return () => {
      if (div) {
        observer.unobserve(div);
      }
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: isInView ? `url(${img})` : 'none',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        ...additionalStyle,
      }}
      className={scaleOnHover ? classes.scaleOnHover : ''}
      ref={divRef}
    ></div>
  );
};

export default ImageCard;

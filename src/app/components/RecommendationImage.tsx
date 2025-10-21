import React from 'react';
import Image from 'next/image';

interface RecommendationImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const RecommendationImage: React.FC<RecommendationImageProps> = ({
  src,
  alt,
  width = 1000,
  height = 1000
}) => {
  return (
    <div className="w-full mb-4">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto object-contain rounded-lg"
        priority
      />
    </div>
  );
};

export default RecommendationImage;

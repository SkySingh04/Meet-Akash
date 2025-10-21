import React from 'react';
import RecommendationImage from './RecommendationImage';

const Recommendations = () => {
  const recommendationImages = [
    { src: '/recommendation-1.png', alt: 'Recommendation 1', width: 697, height: 177 },
    { src: '/recommendation-2.png', alt: 'Recommendation 2', width: 692, height: 509 },
    { src: '/recommendation-3.png', alt: 'Recommendation 3', width: 887, height: 462 },
    { src: '/recommendation-4.png', alt: 'Recommendation 4', width: 887, height: 418 },
    { src: '/recommendation-5.png', alt: 'Recommendation 5', width: 889, height: 442 },
    { src: '/recommendation-6.png', alt: 'Recommendation 6', width: 889, height: 442 },
  ];

  return (
    <div
      className="page-section text-base px-5 sm:justify-center section-bg"
      id="Recommendations"
      data-aos="fade-up"
    >
      <div className="section-title">
        <h2 className="other-header">Recommendations</h2>
      </div>

      {/* Masonry Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto py-8">
        {recommendationImages.map((image, index) => (
          <div key={index} className="w-full">
            <RecommendationImage
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;

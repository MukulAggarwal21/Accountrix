import React from 'react';

const Partners = () => {
  const partners = [
    "/partner1.png",
    "/partner2.png",
    "/partner3.png",
    "/partner4.png",
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Partners</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {partners.map((partner, index) => (
            <img key={index} src={partner} alt={`Partner ${index + 1}`} className="h-16" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
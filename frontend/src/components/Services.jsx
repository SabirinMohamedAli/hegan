import React from 'react';

const Services = () => {
  const services = [
    { title: 'Web Development', description: 'We build modern web applications.' },
    { title: 'Mobile App Development', description: 'We create cross-platform mobile apps.' },
    { title: 'AI Solutions', description: 'We provide cutting-edge AI solutions.' },
  ];

  return (
    <section id="services" className="bg-blue-50 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">{service.title}</h3>
              <p className="text-blue-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
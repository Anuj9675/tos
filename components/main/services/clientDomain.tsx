import React from 'react';

// Updated domains data with 4 items
const domains = [
  { name: 'Healthcare', icon: 'M10 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0z' },
  { name: 'Finance', icon: 'M10 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0z' },
  { name: 'Education', icon: 'M10 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0z' },
  { name: 'Retail', icon: 'M10 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0z' },
];

export const ClientDomains: React.FC = () => {
  return (
    <section className="py-24 bg-sky-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className='mb-12'>
        <h2 className="text-6xl font-semibold text-center ">Serving the clients </h2>
        
        <h2 className="text-6xl font-semibold text-center">
          across multiple domains
        </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {domains.map((domain, index) => (
            <div key={index} className="p-6 bg-white border border-gray-200 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="flex items-center justify-center mb-4">
                <svg className="w-16 h-16 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d={domain.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{domain.name}</h3>
              <p className="text-gray-600">We provide top-notch solutions in this domain, ensuring excellence and client satisfaction.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
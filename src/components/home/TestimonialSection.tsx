import React from 'react';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, title, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-neutral-100">
      <div className="flex items-start mb-4">
        <div className="flex-shrink-0 mr-4">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src={image}
            alt={name}
          />
        </div>
        <div>
          <h4 className="text-lg font-medium text-neutral-900">{name}</h4>
          <p className="text-neutral-600">{title}</p>
        </div>
      </div>
      <p className="text-neutral-700 italic">"{quote}"</p>
    </div>
  );
};

const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Shanthi Raksha has transformed how our community responds to safety concerns. The real-time reporting has made our neighborhood much safer.",
      name: "Priya Sharma",
      title: "Community Organizer",
      image: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
      quote: "As a police officer, this platform has improved our communication with citizens and helped us respond to incidents more efficiently.",
      name: "Rajiv Singh",
      title: "Senior Police Officer",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "The cultural exchange forums have brought our diverse community closer together and fostered understanding between different groups.",
      name: "Sarah Johnson",
      title: "School Principal",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  return (
    <section className="py-16 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
            What Our Community Says
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-neutral-600 mx-auto">
            Real stories from people who are making a difference with Shanthi Raksha.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
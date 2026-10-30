import React, { useState, useEffect } from 'react';
import { heroSlides, impactData, solutionData } from '../assets/home/homeData';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-teal-100">

      {/* Hero Slider Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Slides */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
          >
            {/* Image placeholder with gradient overlay */}
            <div className="absolute inset-0">
              {/* Background Image */}
              <img
                className="w-full h-full object-cover"
                src={slide.src}
                alt={slide.alt}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

              {/* Caption */}
              <div className="absolute bottom-20 left-0 right-0 text-center text-white">
                <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto px-4">
                  {slide.caption}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white text-4xl transition-all"
        >
          ‹
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white text-4xl transition-all"
        >
          ›
        </button>
      </section>

      {/* Emotional Heading Section */}
      <section className="py-20 px-6 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-emerald-900 mb-8 leading-tight">
            Our Mother is <span className="text-red-600">Bleeding</span>,<br />
            And We Are Holding the Knife
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-slate-700 leading-relaxed">
            For centuries, we've taken from Earth without giving back. Now, our home is crying out -
            through melting ice caps, choking cities, and dying species. The air we breathe is poisoned,
            the water we drink is contaminated, and the soil that feeds us is turning toxic.
            This isn't a distant future; it's our present reality. The planet that nurtured us for millennia
            is now suffering because of our choices.
          </p>
        </div>
      </section>

      {/* Individual Impact Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-16">
            The Damage in Our Hands
          </h2>

          {impactData.map((item, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center mb-20 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
            >
              {/* Image - Alternates sides */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl overflow-hidden aspect-video flex items-center justify-center">
                  <img src={item.image} alt={item.alt} />
                  {/* <div className="text-center text-slate-600">
                    <div className="text-4xl mb-4">🖼️</div>
                    <p>{item.alt}</p>
                  </div> */}
                </div>
              </div>

              {/* Content - Alternates sides */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <h3 className="text-3xl font-bold text-slate-800 mb-4">{item.title}</h3>
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  {item.description}
                </p>
                <div className="bg-red-50 border-l-4 border-red-500 pl-4 py-3">
                  <p className="text-red-700 font-semibold">{item.stats}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-teal-50 to-emerald-100">
        {/* Final Call to Action */}
        <div className="text-center bg-gradient-to-r from-emerald-600 to-teal-700 rounded-3xl p-12 text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Your Next Step Matters
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            The greatest threat to our planet is the belief that someone else will save it.
            You don't need to be perfect - you just need to start. Every sustainable choice,
            every conversation, every small action creates ripples of change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-700 hover:bg-emerald-50 px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-2xl">
              Start Your Green Journey
            </button>
            <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold transition-all">
              Explore How to Help
            </button>
          </div>
        </div>
      </section>

      {/* Final Emotional Note */}
      <section className="py-16 px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">🌍</div>
          <h3 className="text-2xl md:text-3xl font-light mb-6 leading-relaxed">
            "We are the first generation to feel the effect of climate change and the last generation
            who can do something about it."
          </h3>
          <p className="text-emerald-300 text-lg">
            - Barack Obama
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
import React, { useState } from 'react';
import { pollutionData } from '../assets/pollution/pollutionData';

const Pollution = () => {
  const [activePollution, setActivePollution] = useState('water');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentData = pollutionData[activePollution];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === currentData.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? currentData.images.length - 1 : prev - 1
    );
  };

  // Reset image index when changing pollution type
  React.useEffect(() => {
    setCurrentImageIndex(0);
  }, [activePollution]);



  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-700 to-teal-800 bg-clip-text text-transparent mb-4">
            Pollution Awareness
          </h1>
          <p className="text-xl text-emerald-700 max-w-3xl mx-auto">
            Understanding the invisible threats to our planet and health
          </p>
        </div>

        {/* Pollution Type Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(pollutionData).map(([key, data]) => (
            <button
              key={key}
              onClick={() => setActivePollution(key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${activePollution === key
                ? `bg-gradient-to-r ${data.color} text-white shadow-lg`
                : 'bg-white/80 text-emerald-700 hover:bg-white'
                }`}
            >
              {data.title}
            </button>
          ))}
        </div>

        {/* Emotional Impact Banner */}
        <div className="bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl p-6 mb-8 text-white shadow-xl">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">💔 Hard Truths</h3>
              <p className="text-lg leading-relaxed">
                {currentData.emotionalQuestions[0]}
              </p>
            </div>
            <div className="ml-6 text-4xl opacity-80">
              💭
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Image Carousel & Sources */}
          <div className="space-y-8">
            {/* Image Carousel Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-emerald-100">
              <div className="relative">
                {/* Image Container - Replaced the placeholder */}
                <div className="rounded-xl overflow-hidden min-h-[300px] mb-4 bg-gray-100 flex items-center justify-center cursor-pointer" onClick={()=>setIsModalOpen(true)}>
                  <img
                    src={currentData.images[currentImageIndex]?.source ?? currentData.images[0]?.source}
                    alt={currentData.images[currentImageIndex]?.alt ?? "pollution_image"}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Navigation Arrows */}
                {currentData.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-3 transition-all z-10"
                    >
                      ←
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-3 transition-all z-10"
                    >
                      →
                    </button>
                  </>
                )}

                {/* Image Indicators */}
                <div className="flex justify-center space-x-2 mt-4">
                  {currentData.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${index === currentImageIndex
                        ? 'bg-emerald-500'
                        : 'bg-emerald-200'
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Sources Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-emerald-100">
              <h3 className={`text-2xl font-bold text-${currentData.cardColor}-800 mb-4`}>
                Sources
              </h3>
              <ul className="space-y-3">
                {currentData.sources.map((source, index) => (
                  <li key={index} className="flex items-start">
                    <span className={`text-${currentData.cardColor}-500 mr-2`}>•</span>
                    <span className="text-emerald-800">{source}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Middle Column - Contamination & Diseases */}
          <div className="space-y-8">
            {/* Additional Emotional Questions */}
            <div className="bg-orange-50 border-l-4 border-orange-500 rounded-r-2xl p-6">
              <h4 className="font-bold text-orange-800 mb-3">🤔 Questions That Matter</h4>
              <div className="space-y-4">
                {currentData.emotionalQuestions.slice(1).map((question, index) => (
                  <p key={index} className="text-orange-700 leading-relaxed text-sm">
                    {question}
                  </p>
                ))}
              </div>
            </div>

            {/* Contamination Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-emerald-100">
              <h3 className={`text-2xl font-bold text-${currentData.cardColor}-800 mb-4`}>
                Contamination
              </h3>
              <ul className="space-y-3">
                {currentData.contamination.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className={`text-${currentData.cardColor}-500 mr-2`}>•</span>
                    <span className="text-emerald-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Diseases Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-emerald-100">
              <h3 className={`text-2xl font-bold text-${currentData.cardColor}-800 mb-4`}>
                Diseases & Health Impacts
              </h3>
              <ul className="space-y-3">
                {currentData.diseases.map((disease, index) => (
                  <li key={index} className="flex items-start">
                    <span className={`text-${currentData.cardColor}-500 mr-2`}>•</span>
                    <span className="text-emerald-800">{disease}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Key Points & Action */}
          <div className="space-y-8">
            {/* Key Points Card */}
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 shadow-xl text-white">
              <h3 className="text-2xl font-bold mb-6 text-white">Key Facts</h3>
              <div className="space-y-6">
                {currentData.points.map((point, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-white/20 rounded-full p-2 mr-4 mt-1">
                      <span className="text-lg">💡</span>
                    </div>
                    <p className="text-emerald-50 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-emerald-100">
              <h3 className="text-xl font-bold text-emerald-800 mb-3">Take Action</h3>
              <p className="text-emerald-700 mb-4">
                Ready to make a difference in fighting {currentData.title.split(' ')[1].toLowerCase()} pollution?
              </p>
              <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-3 rounded-full font-semibold transition-all transform hover:scale-105">
                Learn How to Help
              </button>
            </div>
          </div>
        </div>

        {/* Statistics Bar */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-emerald-100 mb-12">
          <h3 className="text-2xl font-bold text-center text-emerald-800 mb-6">
            Global Impact Statistics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-emerald-600">6.7M+</div>
              <div className="text-emerald-700">Annual Air Pollution Deaths</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">40%</div>
              <div className="text-emerald-700">Insect Decline from Light Pollution</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-600">500+</div>
              <div className="text-emerald-700">Years Plastic Lasts in Soil</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">1/3</div>
              <div className="text-emerald-700">Can't See Milky Way Anymore</div>
            </div>
          </div>
        </div>

        {/* Final Emotional Callout */}
        <div className="bg-gradient-to-r from-red-600 to-pink-700 rounded-2xl p-8 text-white text-center shadow-2xl mb-12">
          <h2 className="text-3xl font-bold mb-4">The Time to Act is Now</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto leading-relaxed">
            Future generations will judge us by the world we leave them. Will they thank us for our convenience, or curse us for our silence?
          </p>
          <button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105">
            Join the Movement for Change
          </button>
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300 transition-colors"
            >
              ✕
            </button>
            <img
              src={currentData.images[currentImageIndex].source}
              alt={currentData.images[currentImageIndex].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Pollution;
import React, { useState } from 'react';
import { erasData } from '../assets/history/history';

const History = () => {
  const [selectedEra, setSelectedEra] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openImageModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const nextEra = () => {
    setSelectedEra((prev) => (prev + 1) % erasData.length);
  };

  const prevEra = () => {
    setSelectedEra((prev) => (prev - 1 + erasData.length) % erasData.length);
  };

  const currentEra = erasData[selectedEra];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-emerald-800 bg-clip-text text-transparent mb-4">
            Earth's Story
          </h1>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            A journey through 4.6 billion years of our home's incredible transformation
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-slate-200">
            <div className="flex flex-wrap justify-center gap-2">
              {erasData.map((era, index) => (
                <button
                  key={era.id}
                  onClick={() => setSelectedEra(index)}
                  className={`px-4 py-2 rounded-full font-semibold transition-all ${
                    selectedEra === index
                      ? `bg-gradient-to-r ${era.color} text-white shadow-md`
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {era.name.split(' ')[1]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Era Display */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-slate-200 overflow-hidden mb-12">
          {/* Era Header */}
          <div className={`bg-gradient-to-r ${currentEra.color} text-white p-8 text-center`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-2">{currentEra.name}</h2>
            <p className="text-xl opacity-90">{currentEra.period}</p>
          </div>

          {/* Era Content */}
          <div className="p-8">
            <div className={`grid lg:grid-cols-2 gap-8 items-center ${
              selectedEra % 2 === 0 ? '' : 'lg:grid-flow-dense'
            }`}>
              {/* Images - Alternates sides */}
              <div className={`${selectedEra % 2 === 0 ? '' : 'lg:col-start-2'}`}>
                <div className="grid grid-cols-2 gap-4">
                  {currentEra.images.map((image, index) => (
                    <div 
                      key={index}
                      className={`cursor-pointer transform hover:scale-105 transition-all duration-300 ${
                        currentEra.images.length === 1 ? 'col-span-2' : ''
                      } ${currentEra.images.length === 3 && index === 0 ? 'col-span-2' : ''}`}
                      onClick={() => openImageModal(image)}
                    >
                      <div className="bg-gradient-to-br from-slate-200 to-slate-300 rounded-xl overflow-hidden aspect-video flex items-center justify-center">
                        {/* <div className="text-center text-slate-600">
                          <div className="text-2xl mb-2">🖼️</div>
                          <p className="text-sm">{image.alt}</p>
                        </div> */}
                        <img src={image.src} alt={image.alt} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description - Alternates sides */}
              <div className={`${selectedEra % 2 === 0 ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                <div className="prose prose-lg max-w-none">
                  <p className="text-slate-700 text-lg leading-relaxed">
                    {currentEra.description}
                  </p>
                </div>
                
                {/* Era Navigation */}
                <div className="flex justify-between mt-8 pt-6 border-t border-slate-200">
                  <button
                    onClick={prevEra}
                    className="flex items-center text-slate-600 hover:text-slate-800 transition-colors"
                  >
                    ← {selectedEra > 0 ? erasData[selectedEra - 1].name.split(' ').pop() : 'Beginning'}
                  </button>
                  <button
                    onClick={nextEra}
                    className="flex items-center text-slate-600 hover:text-slate-800 transition-colors"
                  >
                    {selectedEra < erasData.length - 1 ? erasData[selectedEra + 1].name.split(' ').pop() : 'Present'} →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Progress */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-200 mb-12">
          <h3 className="text-2xl font-bold text-center text-slate-800 mb-6">
            Our Planet's Journey
          </h3>
          <div className="relative">
            {/* Progress Bar */}
            <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-red-500 via-green-500 to-blue-500 transition-all duration-500"
                style={{ width: `${((selectedEra + 1) / erasData.length) * 100}%` }}
              ></div>
            </div>
            
            {/* Era Markers */}
            <div className="flex justify-between mt-4">
              {erasData.map((era, index) => (
                <button
                  key={era.id}
                  onClick={() => setSelectedEra(index)}
                  className={`text-xs font-semibold transition-all ${
                    index <= selectedEra 
                      ? 'text-slate-800 scale-110' 
                      : 'text-slate-400'
                  }`}
                >
                  {era.name.split(' ')[1]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Final Reflection */}
        <div className="text-center bg-gradient-to-r from-slate-800 to-blue-900 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-6">From Molten Rock to Conscious Mind</h3>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-8">
            In 4.6 billion years, Earth transformed from a ball of fire to a living, breathing world 
            capable of contemplating its own existence. We are that contemplation. We are Earth's 
            consciousness looking back at itself.
          </p>
          <button className="bg-white text-slate-800 hover:bg-slate-100 px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105">
            Continue Your Journey with Green Path
          </button>
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeImageModal}
        >
          <div 
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeImageModal}
              className="absolute -top-12 right-0 text-white text-3xl hover:text-gray-300 transition-colors z-10"
            >
              ✕
            </button>
            <div className="bg-white rounded-lg overflow-hidden">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain"
              />
              <div className="p-4 bg-white">
                <p className="text-slate-700 text-center">{selectedImage.alt}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default History;
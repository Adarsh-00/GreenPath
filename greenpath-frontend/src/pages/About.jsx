import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-teal-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-teal-400/10"></div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-700 via-teal-700 to-green-800 bg-clip-text text-transparent">
            Our Green Path
          </h1>
          <p className="text-2xl md:text-3xl text-emerald-800 mb-8 leading-relaxed">
            Walking together towards a sustainable future
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-12"></div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-emerald-900 mb-6">Why We Exist</h2>
              <div className="space-y-6 text-lg text-emerald-800 leading-relaxed">
                <p>
                  In a world where <span className="font-semibold text-emerald-600">every breath we take</span> and 
                  <span className="font-semibold text-emerald-600"> every drop we drink</span> is touched by our actions, 
                  we found ourselves at a crossroads.
                </p>
                <p>
                  We created <span className="font-bold text-teal-600">Green Path</span> for the child who wonders why 
                  they can't swim in the same rivers their grandparents did. For the parent who worries about the air 
                  their children breathe. For every person who feels that small actions don't matter.
                </p>
                <p className="bg-emerald-50 border-l-4 border-emerald-500 pl-4 py-2 italic">
                  "We do not inherit the Earth from our ancestors; we borrow it from our children."
                </p>
              </div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-emerald-100">
              <div className="text-6xl text-center mb-6">🌍</div>
              <h3 className="text-2xl font-bold text-center text-emerald-800 mb-4">Our Promise</h3>
              <p className="text-emerald-700 text-center">
                To guide, educate, and empower every individual to become a guardian of our planet, 
                starting with their very next step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Impact Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-emerald-500/10 to-teal-500/10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-emerald-900 mb-12">The Truth That Moves Us</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/80 rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">💔</div>
              <h3 className="text-xl font-bold text-emerald-800 mb-3">8.8 Million Lives</h3>
              <p className="text-emerald-700">
                Lost each year to air pollution alone. That's more than wars, violence, and malaria combined.
              </p>
            </div>
            
            <div className="bg-white/80 rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">🌊</div>
              <h3 className="text-xl font-bold text-emerald-800 mb-3">Every Minute</h3>
              <p className="text-emerald-700">
                A truckload of plastic enters our oceans. By 2050, there could be more plastic than fish in the sea.
              </p>
            </div>
            
            <div className="bg-white/80 rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">👶</div>
              <h3 className="text-xl font-bold text-emerald-800 mb-3">Born Into Crisis</h3>
              <p className="text-emerald-700">
                Children in polluted areas face 50% higher cancer risks. What will we tell them when they ask why?
              </p>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-red-800 mb-4">⚠️ The Hard Reality</h3>
            <p className="text-red-700 text-lg leading-relaxed">
              We are the first generation to feel the impact of climate change and the last generation that can do something about it. 
              The time for waiting is over. The time for action is now.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Action Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-emerald-900 mb-4">Your Power to Change</h2>
          <p className="text-xl text-center text-emerald-700 mb-12 max-w-3xl mx-auto">
            You might feel small against global challenges, but remember: mighty oceans are made of single drops.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-2xl p-6 text-center">
              <div className="text-3xl mb-4">👣</div>
              <h3 className="font-bold mb-2">Start Small</h3>
              <p className="text-sm">One sustainable choice today</p>
            </div>
            
            <div className="bg-gradient-to-br from-teal-500 to-cyan-600 text-white rounded-2xl p-6 text-center">
              <div className="text-3xl mb-4">📚</div>
              <h3 className="font-bold mb-2">Educate Yourself</h3>
              <p className="text-sm">Knowledge is your superpower</p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-2xl p-6 text-center">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="font-bold mb-2">Inspire Others</h3>
              <p className="text-sm">Share your journey</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-2xl p-6 text-center">
              <div className="text-3xl mb-4">🌱</div>
              <h3 className="font-bold mb-2">Grow Together</h3>
              <p className="text-sm">Join our community</p>
            </div>
          </div>

          <div className="bg-white/80 rounded-2xl p-8 shadow-lg border border-emerald-100">
            <h3 className="text-2xl font-bold text-center text-emerald-800 mb-6">Your First Steps Matter</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-emerald-700 mb-3">This Week:</h4>
                <ul className="space-y-2 text-emerald-700">
                  <li className="flex items-center">
                    <span className="text-emerald-500 mr-2">✓</span>
                    Refuse one single-use plastic item
                  </li>
                  <li className="flex items-center">
                    <span className="text-emerald-500 mr-2">✓</span>
                    Learn about one environmental issue
                  </li>
                  <li className="flex items-center">
                    <span className="text-emerald-500 mr-2">✓</span>
                    Share one fact with a friend
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-emerald-700 mb-3">This Month:</h4>
                <ul className="space-y-2 text-emerald-700">
                  <li className="flex items-center">
                    <span className="text-emerald-500 mr-2">✓</span>
                    Join a local cleanup event
                  </li>
                  <li className="flex items-center">
                    <span className="text-emerald-500 mr-2">✓</span>
                    Switch to a sustainable habit
                  </li>
                  <li className="flex items-center">
                    <span className="text-emerald-500 mr-2">✓</span>
                    Inspire someone to join you
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-emerald-600 to-teal-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">The Path Starts With You</h2>
          <p className="text-xl mb-8 leading-relaxed">
            Future generations will look back at this moment. They will see what we did when we knew the truth. 
            They will remember who stood up and who looked away.
          </p>
          <div className="space-y-4 mb-8">
            <p className="text-emerald-100">Will you be the ancestor they're proud of?</p>
            <p className="text-emerald-100">Will you be the reason they have clean air to breathe?</p>
            <p className="text-emerald-100">Will you be their hero?</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-700 hover:bg-emerald-50 px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-2xl">
              Start My Green Path Today
            </button>
            <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-bold transition-all">
              Join Our Community
            </button>
          </div>
        </div>
      </section>

      {/* Hope Section */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-6xl mb-6">✨</div>
          <h3 className="text-3xl font-bold text-emerald-800 mb-4">There is Hope</h3>
          <p className="text-lg text-emerald-700 leading-relaxed">
            Every major change in history started with people who refused to accept the status quo. 
            People like you. Together, we can write a different story for our planet—one of healing, 
            respect, and renewal.
          </p>
          <div className="w-16 h-1 bg-emerald-400 mx-auto mt-8"></div>
        </div>
      </section>
    </div>
  );
};

export default About;
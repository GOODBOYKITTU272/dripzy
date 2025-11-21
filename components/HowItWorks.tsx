import React from 'react';
import { DRIPZY_WEEKS } from '../constants';
import { Calendar, ArrowDown, Lock, Unlock } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-drip-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-drip-neon font-display font-bold tracking-wider uppercase mb-2 block">The Mechanism</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">WEEKLY COMMUNITY CASHBACK</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Every month is a new cycle. 15% of all company revenue is pooled and distributed back to buyers.
            The earlier you buy, the more weeks you earn from.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {DRIPZY_WEEKS.map((phase, index) => (
              <div key={phase.id} className="group">
                <div className={`
                  relative h-full bg-gradient-to-b from-white/5 to-transparent 
                  border border-white/10 p-8 rounded-2xl transition-all duration-300
                  hover:border-drip-neon/50 hover:bg-white/10
                  flex flex-col
                `}>
                  {/* Date Badge */}
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-drip-black border border-white/20 px-4 py-2 rounded-full flex items-center gap-2 whitespace-nowrap">
                    <Calendar size={14} className="text-drip-neon" />
                    <span className="text-sm font-bold">{phase.dates}</span>
                  </div>

                  <div className="mt-6 mb-4">
                    <h3 className="text-2xl font-display font-bold text-white mb-1">{phase.name}</h3>
                    <div className="h-1 w-12 bg-drip-neon rounded-full"></div>
                  </div>

                  <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                    {phase.description}
                  </p>

                  {/* Earning Status */}
                  <div className="bg-black/40 rounded-lg p-4 border border-white/5">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-bold">Who Earns?</p>
                    {phase.eligibleCohorts.length === 0 ? (
                      <div className="flex items-center gap-2 text-gray-500">
                        <Lock size={16} />
                        <span className="text-sm">Pool Accumulating...</span>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        {phase.eligibleCohorts.map(cohortId => (
                          <div key={cohortId} className="flex items-center gap-2 text-drip-neon">
                            <Unlock size={16} />
                            <span className="text-sm font-medium">Week {cohortId} Buyers</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Arrow for flow (mobile only) */}
                  {index < 3 && (
                    <div className="md:hidden flex justify-center mt-4 text-white/20">
                      <ArrowDown />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
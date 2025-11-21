import React from 'react';
import { CheckCircle2, XCircle, Users, DollarSign, Heart } from 'lucide-react';

const Manifesto: React.FC = () => {
    return (
        <section id="manifesto" className="py-12 md:py-24 bg-drip-black relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">THE DRIPZY MANIFESTO</h2>
                    <div className="w-24 h-1 bg-drip-neon mx-auto rounded-full"></div>
                </div>

                <div className="prose prose-invert prose-lg mx-auto text-gray-300 space-y-8">
                    <p className="text-xl md:text-2xl font-medium text-white text-center leading-relaxed">
                        <span className="text-drip-neon font-bold">Essentials, Perfected. Rewards, Reinvented.</span><br />
                        For decades, fashion brands have tried to do too much—selling thousands of average products while burning millions on celebrity ads. You pay for their confusion and their fame.
                    </p>

                    <p className="text-center">
                        Dripzy is the anti-brand. We stripped away the clutter to focus on just two things:<br />
                        <b className="text-white">The Perfect Product. The Perfect Reward System.</b>
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 my-12">
                        <div className="bg-red-500/5 border border-red-500/20 p-8 rounded-2xl">
                            <h3 className="text-red-400 font-display text-xl font-bold mb-4 flex items-center gap-2">
                                <XCircle /> The Old Way
                            </h3>
                            <ul className="space-y-3 text-gray-400">
                                <li>• Expensive Celebrity Contracts</li>
                                <li>• Massive Ad Spend on Instagram</li>
                                <li>• Big Agency Fees</li>
                                <li>• Customers get 0% back</li>
                            </ul>
                        </div>
                        <div className="bg-drip-neon/5 border border-drip-neon/20 p-8 rounded-2xl">
                            <h3 className="text-drip-neon font-display text-xl font-bold mb-4 flex items-center gap-2">
                                <CheckCircle2 /> The Dripzy Way
                            </h3>
                            <ul className="space-y-3 text-gray-300">
                                <li>• Community Cashback Pool</li>
                                <li>• Direct Reward for Referrals</li>
                                <li>• No Levels, No Downlines</li>
                                <li>• Marketing Budget → Users</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 text-center">
                        <h3 className="text-2xl font-display font-bold mb-6 text-white">
                            The Idea: Community Cashback
                        </h3>
                        <p className="mb-8">
                            Instead of paying a movie star crores to wear a Polo T-shirt they’ll never touch again, Dripzy shares that marketing budget with you.
                            This is not an investment scheme. This is not MLM. This is not a chain system.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex flex-col items-center">
                                <DollarSign className="text-drip-neon mb-2" size={32} />
                                <span className="font-bold text-white text-sm">Dripzy Saves on Ads</span>
                            </div>
                            <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex flex-col items-center">
                                <Users className="text-drip-purple mb-2" size={32} />
                                <span className="font-bold text-white text-sm">Money Pools Up</span>
                            </div>

                            <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex flex-col items-center">
                                <Heart className="text-pink-500 mb-2" size={32} />
                                <span className="font-bold text-white text-sm">Community Gets Paid</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Manifesto;
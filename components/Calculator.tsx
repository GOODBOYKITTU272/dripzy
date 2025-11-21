import React, { useState, useMemo } from 'react';
import { Calculator as CalcIcon, ShoppingBag, RefreshCcw, Calendar, Users } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const Calculator: React.FC = () => {
    const [salesCount, setSalesCount] = useState<number>(2400); // Default sales count
    const [buyersWeek1, setBuyersWeek1] = useState<number>(100);
    const [buyersWeek2, setBuyersWeek2] = useState<number>(150);
    const [buyersWeek3, setBuyersWeek3] = useState<number>(200);

    const productPrice = 999;
    const poolPercentage = 0.15; // 15% of revenue goes to community pool

    // Calculation Logic
    const calculations = useMemo(() => {
        // Weekly revenue and pool calculation
        const revenue = salesCount * productPrice;
        const weeklyPool = revenue * poolPercentage; // 15% of total weekly revenue

        // Calculate cumulative buyers for each week
        const cumulativeWeek1 = buyersWeek1;
        const cumulativeWeek2 = buyersWeek1 + buyersWeek2;
        const cumulativeWeek3 = buyersWeek1 + buyersWeek2 + buyersWeek3;

        // Calculate cashback per person for each week
        // Formula: (15% of R) / N where R = revenue, N = total buyers
        const payoutWeek1 = cumulativeWeek1 > 0 ? weeklyPool / cumulativeWeek1 : 0;
        const payoutWeek2 = cumulativeWeek2 > 0 ? weeklyPool / cumulativeWeek2 : 0;
        const payoutWeek3 = cumulativeWeek3 > 0 ? weeklyPool / cumulativeWeek3 : 0;

        const perWeek = [
            { name: 'Week 1', payout: payoutWeek1 },
            { name: 'Week 2', payout: payoutWeek2 },
            { name: 'Week 3', payout: payoutWeek3 }
        ];

        // Calculate total earnings based on when someone bought
        // Each buyer earns from the week they joined onwards
        const totalEarnings = {
            Week1Buyer: payoutWeek1 + payoutWeek2 + payoutWeek3, // Earns from all 3 weeks
            Week2Buyer: payoutWeek2 + payoutWeek3, // Earns from week 2 and 3
            Week3Buyer: payoutWeek3 // Earns only from week 3
        };

        return {
            revenue,
            weeklyPool,
            perWeek,
            totalEarnings,
            salesCount
        };
    }, [salesCount, buyersWeek1, buyersWeek2, buyersWeek3]);

    return (
        <section id="calculator" className="py-12 sm:py-16 md:py-24 bg-drip-black relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-drip-neon/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-3 md:mb-4 px-4">
                        EARNINGS CALCULATOR
                    </h2>
                    <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto px-4">
                        <span className="text-white font-bold">15% of sale value</span> goes into the community pool.
                        The money is shared equally among ALL buyers so far.
                    </p>
                </div>


                {/* Combined Calculator - Inputs + Earnings */}
                <div className="bg-gradient-to-br from-drip-neon/10 to-drip-neon/5 border border-drip-neon/30 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl">
                    {/* Heading - Moved to Top */}
                    <div className="text-center mb-6 md:mb-8">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 flex items-center justify-center gap-2 md:gap-3">
                            <CalcIcon size={20} className="text-drip-neon sm:w-6 sm:h-6" />
                            Total Earnings Per Person
                        </h3>
                        <p className="text-gray-400 text-xs sm:text-sm">See exactly how much you'd earn based on when you join</p>
                    </div>

                    {/* Calculator Inputs */}
                    <div className="bg-black/40 border border-white/10 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 mb-6 md:mb-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            {/* Weekly Sales Volume */}
                            <div>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-3 gap-2">
                                    <label className="flex items-center gap-2 text-sm sm:text-base font-medium text-gray-300">
                                        <ShoppingBag size={16} className="text-drip-neon sm:w-[18px] sm:h-[18px]" /> Weekly Sales Volume
                                    </label>
                                    <span className="text-2xl sm:text-3xl font-bold text-white">
                                        {salesCount.toLocaleString()} <span className="text-xs sm:text-sm text-gray-500 font-normal">units</span>
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    min="100"
                                    max="5000"
                                    step="50"
                                    value={salesCount}
                                    onChange={(e) => setSalesCount(Number(e.target.value))}
                                    className="w-full h-2 sm:h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-drip-neon"
                                />
                            </div>

                            {/* Week Buyers Inputs */}
                            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                                <div>
                                    <label className="block text-xs sm:text-sm text-gray-400 mb-2 flex items-center gap-1 font-medium">
                                        <Users size={12} className="sm:w-[14px] sm:h-[14px]" /> <span className="hidden sm:inline">Week 1</span><span className="sm:hidden">W1</span>
                                    </label>
                                    <input
                                        type="number"
                                        value={buyersWeek1}
                                        onChange={(e) => setBuyersWeek1(Number(e.target.value))}
                                        className="w-full bg-black/50 border border-white/20 rounded-lg p-2 sm:p-3 text-white text-sm sm:text-base focus:border-drip-neon outline-none transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs sm:text-sm text-gray-400 mb-2 flex items-center gap-1 font-medium">
                                        <Users size={12} className="sm:w-[14px] sm:h-[14px]" /> <span className="hidden sm:inline">Week 2</span><span className="sm:hidden">W2</span>
                                    </label>
                                    <input
                                        type="number"
                                        value={buyersWeek2}
                                        onChange={(e) => setBuyersWeek2(Number(e.target.value))}
                                        className="w-full bg-black/50 border border-white/20 rounded-lg p-2 sm:p-3 text-white text-sm sm:text-base focus:border-drip-neon outline-none transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs sm:text-sm text-gray-400 mb-2 flex items-center gap-1 font-medium">
                                        <Users size={12} className="sm:w-[14px] sm:h-[14px]" /> <span className="hidden sm:inline">Week 3</span><span className="sm:hidden">W3</span>
                                    </label>
                                    <input
                                        type="number"
                                        value={buyersWeek3}
                                        onChange={(e) => setBuyersWeek3(Number(e.target.value))}
                                        className="w-full bg-black/50 border border-white/20 rounded-lg p-2 sm:p-3 text-white text-sm sm:text-base focus:border-drip-neon outline-none transition-colors"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-6xl mx-auto">
                        {/* Week 1 Buyer */}
                        <div className="bg-gradient-to-br from-drip-neon/20 to-black/60 border-2 border-drip-neon rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 relative overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-drip-neon/50">
                            <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-drip-neon text-black text-[10px] sm:text-xs font-bold px-2 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-lg">⭐ BEST VALUE</div>
                            <div className="absolute inset-0 bg-drip-neon/5 blur-xl rounded-2xl"></div>
                            <div className="relative z-10">
                                <div className="text-xs sm:text-sm font-medium text-gray-300 mb-2 sm:mb-3 flex items-center gap-1.5 sm:gap-2">
                                    <Calendar size={12} className="text-drip-neon sm:w-[14px] sm:h-[14px]" />
                                    If you bought in Week 1
                                </div>
                                <div className="text-3xl sm:text-4xl font-bold text-drip-neon mb-3 sm:mb-4 drop-shadow-lg">₹{Math.round(calculations.totalEarnings.Week1Buyer).toLocaleString()}</div>
                                <div className="bg-black/40 rounded-lg sm:rounded-xl p-2.5 sm:p-3 backdrop-blur-sm border border-white/10">
                                    <div className="text-[10px] sm:text-xs font-medium text-gray-400 mb-1.5 sm:mb-2">Earnings Breakdown:</div>
                                    <div className="text-[10px] sm:text-xs text-gray-300 space-y-1 sm:space-y-1.5">
                                        <div className="flex justify-between items-center">
                                            <span>Week 1:</span>
                                            <span className="font-bold text-drip-neon">₹{Math.round(calculations.perWeek[0].payout).toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span>Week 2:</span>
                                            <span className="font-bold text-drip-neon">₹{Math.round(calculations.perWeek[1].payout).toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span>Week 3:</span>
                                            <span className="font-bold text-drip-neon">₹{Math.round(calculations.perWeek[2].payout).toLocaleString()}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Week 2 Buyer */}
                        <div className="bg-black/60 border border-white/20 rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 hover:border-white/40 transform hover:scale-105 transition-all duration-300 shadow-lg">
                            <div className="text-xs sm:text-sm font-medium text-gray-300 mb-2 sm:mb-3 flex items-center gap-1.5 sm:gap-2">
                                <Calendar size={12} className="text-gray-400 sm:w-[14px] sm:h-[14px]" />
                                If you bought in Week 2
                            </div>
                            <div className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">₹{Math.round(calculations.totalEarnings.Week2Buyer).toLocaleString()}</div>
                            <div className="bg-black/40 rounded-lg sm:rounded-xl p-2.5 sm:p-3 backdrop-blur-sm border border-white/10">
                                <div className="text-[10px] sm:text-xs font-medium text-gray-400 mb-1.5 sm:mb-2">Earnings Breakdown:</div>
                                <div className="text-[10px] sm:text-xs text-gray-300 space-y-1 sm:space-y-1.5">
                                    <div className="flex justify-between items-center opacity-40">
                                        <span>Week 1:</span>
                                        <span className="font-bold">₹0</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span>Week 2:</span>
                                        <span className="font-bold text-white">₹{Math.round(calculations.perWeek[1].payout).toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span>Week 3:</span>
                                        <span className="font-bold text-white">₹{Math.round(calculations.perWeek[2].payout).toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Week 3 Buyer */}
                        <div className="bg-black/60 border border-white/20 rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 hover:border-white/40 transform hover:scale-105 transition-all duration-300 shadow-lg sm:col-span-2 lg:col-span-1">
                            <div className="text-xs sm:text-sm font-medium text-gray-300 mb-2 sm:mb-3 flex items-center gap-1.5 sm:gap-2">
                                <Calendar size={12} className="text-gray-400 sm:w-[14px] sm:h-[14px]" />
                                If you bought in Week 3
                            </div>
                            <div className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">₹{Math.round(calculations.totalEarnings.Week3Buyer).toLocaleString()}</div>
                            <div className="bg-black/40 rounded-lg sm:rounded-xl p-2.5 sm:p-3 backdrop-blur-sm border border-white/10">
                                <div className="text-[10px] sm:text-xs font-medium text-gray-400 mb-1.5 sm:mb-2">Earnings Breakdown:</div>
                                <div className="text-[10px] sm:text-xs text-gray-300 space-y-1 sm:space-y-1.5">
                                    <div className="flex justify-between items-center opacity-40">
                                        <span>Week 1:</span>
                                        <span className="font-bold">₹0</span>
                                    </div>
                                    <div className="flex justify-between items-center opacity-40">
                                        <span>Week 2:</span>
                                        <span className="font-bold">₹0</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span>Week 3:</span>
                                        <span className="font-bold text-white">₹{Math.round(calculations.perWeek[2].payout).toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 sm:mt-6 text-center bg-black/40 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-drip-neon/20 max-w-2xl mx-auto">
                        <p className="text-xs sm:text-sm text-gray-300">
                            💡 Early buyers earn <span className="text-drip-neon font-bold text-base sm:text-lg">{calculations.totalEarnings.Week1Buyer > 0 && calculations.totalEarnings.Week3Buyer > 0 ? Math.round((calculations.totalEarnings.Week1Buyer / calculations.totalEarnings.Week3Buyer) * 10) / 10 : 0}x more</span> than Week 3 buyers!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Calculator;

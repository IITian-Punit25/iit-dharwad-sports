import React from 'react';
import { Activity, Heart, Zap } from 'lucide-react';

const Fitness = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-primary mb-4">Fitness & Training</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Resources to help you stay fit, healthy, and perform at your best.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Workout Plans */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
                        <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-primary">
                            <Activity className="w-8 h-8" />
                        </div>
                        <h2 className="text-2xl font-bold text-primary mb-4">Workout Plans</h2>
                        <ul className="space-y-3 text-gray-600 mb-6">
                            <li className="flex items-center gap-2">• Beginner Strength Training</li>
                            <li className="flex items-center gap-2">• HIIT Cardio Routine</li>
                            <li className="flex items-center gap-2">• Yoga for Flexibility</li>
                            <li className="flex items-center gap-2">• Core Strengthening</li>
                        </ul>
                        <button className="text-accent font-medium hover:underline">View Plans →</button>
                    </div>

                    {/* Nutrition */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
                        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600">
                            <Heart className="w-8 h-8" />
                        </div>
                        <h2 className="text-2xl font-bold text-primary mb-4">Nutrition Basics</h2>
                        <ul className="space-y-3 text-gray-600 mb-6">
                            <li className="flex items-center gap-2">• Pre-workout Meals</li>
                            <li className="flex items-center gap-2">• Hydration Guide</li>
                            <li className="flex items-center gap-2">• Protein Sources for Vegetarians</li>
                            <li className="flex items-center gap-2">• Recovery Nutrition</li>
                        </ul>
                        <button className="text-accent font-medium hover:underline">Read Guide →</button>
                    </div>

                    {/* Injury Prevention */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
                        <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-6 text-yellow-600">
                            <Zap className="w-8 h-8" />
                        </div>
                        <h2 className="text-2xl font-bold text-primary mb-4">Injury Prevention</h2>
                        <ul className="space-y-3 text-gray-600 mb-6">
                            <li className="flex items-center gap-2">• Warm-up & Cool-down</li>
                            <li className="flex items-center gap-2">• Common Sports Injuries</li>
                            <li className="flex items-center gap-2">• First Aid Basics</li>
                            <li className="flex items-center gap-2">• When to see a Physio</li>
                        </ul>
                        <button className="text-accent font-medium hover:underline">Learn More →</button>
                    </div>
                </div>

                {/* Quote Section */}
                <div className="mt-16 bg-secondary rounded-2xl p-12 text-center text-white">
                    <blockquote className="text-2xl font-light italic mb-6">
                        "Physical fitness is not only one of the most important keys to a healthy body,
                        it is the basis of dynamic and creative intellectual activity."
                    </blockquote>
                    <cite className="font-bold text-accent not-italic">- John F. Kennedy</cite>
                </div>
            </div>
        </div>
    );
};

export default Fitness;

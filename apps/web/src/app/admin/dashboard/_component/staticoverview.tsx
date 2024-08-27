import React from 'react';

const StatisticsOverview: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Total Attendees</h3>
                <p className="text-3xl font-bold text-gray-900">1,234</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Total Revenue</h3>
                <p className="text-3xl font-bold text-gray-900">$12,345</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Events Held</h3>
                <p className="text-3xl font-bold text-gray-900">56</p>
            </div>
        </div>
    );
}

export default StatisticsOverview;
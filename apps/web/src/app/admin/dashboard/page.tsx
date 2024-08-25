import React from 'react';
import EventList from './_component/eventlist';
import StatisticsOverview from './_component/staticoverview';
import RecentTransactions from './_component/recent';
import GraphVisualizations from './_component/visualizations';
import DateRangePicker from './_component/date';

const Dashboard: React.FC = () => {
    return (
        <div className="p-6 w-screen mx-auto bg-sept-black ">
            <h1 className="text-3xl font-bold mb-8 text-center text-white">Event Management Dashboard</h1>
            
            <section className="mb-12 bg-gray-700 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-white">Statistics Overview</h2>
                <StatisticsOverview />
            </section>

            <section className="mb-12 bg-gray-700 p-6 rounded-lg shadow-md">
                <DateRangePicker />
            </section>
            
            <section className="mb-12 bg-gray-700 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-white">Your Events</h2>
                <EventList />
            </section>

            <section className="mb-12 bg-gray-700 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-white">Recent Transactions</h2>
                <RecentTransactions />
            </section>
            
            <section className="bg-gray-700 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-white">Event Statistics</h2>
                <GraphVisualizations />
            </section>
        </div>
    );
}

export default Dashboard;
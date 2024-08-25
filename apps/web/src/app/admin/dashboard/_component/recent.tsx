import React from "react";
import Link from "next/link";

const RecentTransactions: React.FC = () => {
  const transactions = [
    { id: 1, title: "Event Ticket", date: "2023-10-01", amount: "$50" },
    { id: 2, title: "Venue Booking", date: "2023-10-02", amount: "$200" },
    { id: 3, title: "Catering Service", date: "2023-10-03", amount: "$150" },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <ul className="divide-y divide-gray-200">
        {transactions.map((transaction) => (
          <Link
            href={`/admin/dashboard/${transaction.id}`}
            className="py-4 flex justify-between items-center"
          >
            <div>
              <p className="text-gray-900 font-medium">{transaction.title}</p>
              <p className="text-gray-500 text-sm">{transaction.date}</p>
            </div>
            <p className="text-gray-900 font-semibold">{transaction.amount}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default RecentTransactions;

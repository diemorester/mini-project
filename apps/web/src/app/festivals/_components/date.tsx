"use client"
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

export default function ReactDatePicker() {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div>
            <DatePicker
            selected={selectedDate}
            onChange={(date: any) => setSelectedDate(date)}
            className="bg-sept-white text-sept-black pl-6" />
        </div>
    )
}
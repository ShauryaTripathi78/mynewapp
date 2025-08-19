"use client";

import { useState } from "react";

interface AppointmentData {
  fullName: string;
  email: string;
  phone: string;
  doctor: string;
  date: string;
  time: string;
  symptoms: string;
}

const doctorsList = [
  { id: "dr1", name: "Dr. Ramesh Kumar - Cardiologist" },
  { id: "dr2", name: "Dr. Anjali Verma - Dermatologist" },
  { id: "dr3", name: "Dr. Mohan Rao - Neurologist" },
  { id: "dr4", name: "Dr. Suman Yadav - Dentist" },
];

export default function AppointmentPage() {
  const [appointment, setAppointment] = useState<AppointmentData>({
    fullName: "",
    email: "",
    phone: "",
    doctor: "",
    date: "",
    time: "",
    symptoms: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Appointment Submitted:", appointment);
    alert("Your appointment request has been submitted!");
    // Optional: send to backend or API route
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-xl space-y-5"
      >
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-4">
          Book an Appointment
        </h2>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          className="w-full border rounded p-3"
          value={appointment.fullName}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border rounded p-3"
          value={appointment.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="w-full border rounded p-3"
          value={appointment.phone}
          onChange={handleChange}
          required
        />

        <select
        id="doctor"
        title="Doctor"
          name="doctor"
          className="w-full border rounded p-3"
          value={appointment.doctor}
          onChange={handleChange}
          required
        >
          <option value="">Select Doctor</option>
          {doctorsList.map((doc) => (
            <option key={doc.id} value={doc.name}>
              {doc.name}
            </option>
          ))}
        </select>

        <input
        id="date"
        title="Date"
          type="date"
          name="date"
          className="w-full border rounded p-3"
          value={appointment.date}
          onChange={handleChange}
          required
        />

        <input
        id="time"
        title="Time"
          type="time"
          name="time"
          className="w-full border rounded p-3"
          value={appointment.time}
          onChange={handleChange}
          required
        />

        <textarea
          name="symptoms"
          placeholder="Describe your symptoms"
          className="w-full border rounded p-3 h-28"
          value={appointment.symptoms}
          onChange={handleChange}
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
}

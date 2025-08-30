"use client"
import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel"
import { useState } from 'react';

function DoctorList() {
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Sample doctor data
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      experience: "15 years",
      education: "MD, Harvard Medical School",
      photo: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/140b646f-c38e-43c2-bcd1-db7db95a0bfa.png",
      availability: "Mon, Wed, Fri",
      rating: 4.9
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Neurology",
      experience: "12 years",
      education: "MD, Stanford University",
      photo: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/af1b0232-ffbc-4506-bfad-4db60601873b.png",
      availability: "Tue, Thu, Sat",
      rating: 4.8
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrics",
      experience: "8 years",
      education: "MD, Johns Hopkins University",
      photo: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/140b646f-c38e-43c2-bcd1-db7db95a0bfa.png",
      availability: "Mon-Fri",
      rating: 4.7
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      specialty: "Orthopedics",
      experience: "20 years",
      education: "MD, Mayo Clinic",
      photo: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/af1b0232-ffbc-4506-bfad-4db60601873b.png",
      availability: "Wed, Thu, Fri",
      rating: 4.9
    },
    {
      id: 5,
      name: "Dr. Lisa Patel",
      specialty: "Dermatology",
      experience: "10 years",
      education: "MD, UCLA",
      photo: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/140b646f-c38e-43c2-bcd1-db7db95a0bfa.png",
      availability: "Mon, Tue, Thu",
      rating: 4.8
    },
    {
      id: 6,
      name: "Dr. Robert Kim",
      specialty: "Cardiology",
      experience: "18 years",
      education: "MD, Yale School of Medicine",
      photo: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/af1b0232-ffbc-4506-bfad-4db60601873b.png",
      availability: "Tue, Wed, Fri",
      rating: 4.9
    }
  ];

  // Get unique specialties for filter
  const specialties = ['all', ...new Set(doctors.map(doctor => doctor.specialty))];

  // Filter doctors based on selected specialty and search term
  const filteredDoctors = doctors.filter(doctor => {
    const matchesSpecialty = selectedSpecialty === 'all' || doctor.specialty === selectedSpecialty;
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSpecialty && matchesSearch;
  });

  // Generate star ratings
  const generateStars = (rating:number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="text-yellow-400">★</span>);
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className="text-yellow-400">☆</span>);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="text-gray-300">★</span>);
    }

    return stars;
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Medical Team</h2>
      
      {/* Search and Filter Section */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
          {/* Search Input */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search doctors by name or specialty..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Specialty Filter */}
          <div className="flex flex-wrap gap-2">
            {specialties.map((specialty) => (
              <button
                key={specialty}
                className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors ${
                  selectedSpecialty === specialty
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600'
                }`}
                onClick={() => setSelectedSpecialty(specialty)}
              >
                {specialty === 'all' ? 'All Specialties' : specialty}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.map((doctor) => (
          <div key={doctor.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Doctor Image */}
            <div className="relative h-64">
              <Image
                src={doctor.photo}
                alt={`Professional portrait of ${doctor.name}, ${doctor.specialty} specialist`}
                width={400}
                height={400}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/140b646f-c38e-43c2-bcd1-db7db95a0bfa.png';
                }}
              />
              {/* Specialty Badge */}
              <div className="absolute top-4 right-4">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {doctor.specialty}
                </span>
              </div>
            </div>

            {/* Doctor Info */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{doctor.name}</h3>
              
              {/* Rating */}
              <div className="flex items-center mb-3">
                <div className="flex">
                  {generateStars(doctor.rating)}
                </div>
                <span className="text-sm text-gray-600 ml-2">{doctor.rating}</span>
              </div>

              {/* Education */}
              <p className="text-gray-600 mb-3 text-sm">
                <span className="text-blue-600 font-medium">Education:</span> {doctor.education}
              </p>

              {/* Experience */}
              <p className="text-gray-600 mb-3 text-sm">
                <span className="text-blue-600 font-medium">Experience:</span> {doctor.experience}
              </p>

              {/* Availability */}
              <p className="text-gray-600 mb-4 text-sm">
                <span className="text-blue-600 font-medium">Available:</span> {doctor.availability}
              </p>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 font-medium transition-colors text-sm">
                  Book Appointment
                </button>
                <button title="fkmk" className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredDoctors.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">👨‍⚕️</div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No doctors found</h3>
          <p className="text-gray-500">Try adjusting your search criteria or filter settings.</p>
        </div>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [state, handleSubmit] = useForm("YOUR_FORM_ID");

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center mb-20 mt-20">
      <Carousel className="w-full max-w-2xl mb-10">
        <CarouselContent>
          <CarouselItem>
            <Image className="ml-auto mb-8 mr-auto"
              src="/imagexd/OIP.jpeg"
              width={500}
              height={333}
              alt="Modern medical clinic interior with clean design and professional healthcare equipment"
            />
            <span className="text-xl text-justify font-normal">
              <p>At our clinic, we are committed to providing compassionate, patient-centered healthcare that focuses on your overall well-being. Led by [Dr. Full Name], a highly qualified and experienced [Chardiologist] specialist, our mission is to deliver accurate diagnosis, effective treatment, and personalized care in a warm and welcoming environment. With state-of-the-art technology and a focus on preventive healthcare, we strive to build lasting relationships with our patients, ensuring they feel heard, respected, and empowered in their health journey.</p>
            </span>
          </CarouselItem>
          <CarouselItem>
            <Image className="ml-auto mr-auto"
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cbacb3a8-9be5-4b9d-bac0-855c0e0ce293.png"
              width={500}
              height={333}
              alt="Advanced medical technology and equipment in a modern hospital setting"
            />
          </CarouselItem>
          <CarouselItem>
            <Image className="ml-auto mr-auto"
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d5502baf-156e-41e2-a748-455518563b98.png"
              width={500}
              height={333}
              alt="Professional healthcare team discussing patient care in a modern hospital environment"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      
      <div>
        <p className="mb-20 mt h-20 text-xl">At our clinic, we are committed to providing compassionate, patient-centered healthcare that focuses on your overall well-being. Led by [Dr. Gaurav shukla], a highly qualified and experienced [Neuro sergon] specialist, our mission is to deliver accurate diagnosis, effective treatment, and personalized care in a warm and welcoming environment. With state-of-the-art technology and a focus on preventive healthcare, we strive to build lasting relationships with our patients, ensuring they feel heard, respected, and empowered in their health journey.</p>
      </div>
      
      <div className="max-w-4xl px-4 box-border-2 border-2 border-blue-300 rounded-lg p-6 mt-10 shadow-lg bg-zinc-600 text-white">
        <p className="text-2xl mb-10 mt-5 font-bold">Meet Our Team</p>
        <p className="mb-20 mt h-20 text-xl text-justify">Our dedicated team of healthcare professionals is here to provide you with the highest quality care. From our experienced physicians and nurses to our friendly administrative staff, we work together to ensure that your experience at our clinic is positive and supportive. We believe in a collaborative approach to healthcare, where every team member plays a vital role in your well-being. Get to know our team and feel confident that you are in capable hands.</p>
      </div>
      
      {/* Doctor List Component */}
      <DoctorList />
      
    </div>
  );
}


'use client';
import { useCart } from '../providers/cart-provider';
import Link from 'next/link';

interface Medicine {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  image: string;
}

const medicines: Medicine[] = [
  {
    id: 1,
    name: 'Paracetamol 500mg',
    description: 'For relief of mild to moderate pain and fever',
    price: 5.99,
    stock: 100,
    category: 'Pain Relief',
    image: 'https://placehold.co/300x200?text=Paracetamol'
  },
  {
    id: 2,
    name: 'Ibuprofen 200mg',
    description: 'Nonsteroidal anti-inflammatory drug for pain and fever',
    price: 7.50,
    stock: 75,
    category: 'Pain Relief',
    image: 'https://placehold.co/300x200?text=Ibuprofen'
  },
  {
    id: 3,
    name: 'Amoxicillin 500mg',
    description: 'Antibiotic for bacterial infections',
    price: 12.99,
    stock: 50,
    category: 'Antibiotics',
    image: 'https://placehold.co/300x200?text=Amoxicillin'
  },
  {
    id: 4,
    name: 'Cetirizine 10mg',
    description: 'Antihistamine for allergy relief',
    price: 6.25,
    stock: 120,
    category: 'Allergy',
    image: 'https://placehold.co/300x200?text=Cetirizine'
  },
  {
    id: 5,
    name: 'Omeprazole 20mg',
    description: 'Proton pump inhibitor for acid reflux',
    price: 9.99,
    stock: 80,
    category: 'Digestive Health',
    image: 'https://placehold.co/300x200?text=Omeprazole'
  },
  {
    id: 6,
    name: 'Vitamin C 1000mg',
    description: 'Dietary supplement with antioxidants',
    price: 8.50,
    stock: 150,
    category: 'Vitamins',
    image: 'https://placehold.co/300x200?text=Vitamin+C'
  },
  {
    id: 7,
    name: 'Loratadine 10mg',
    description: 'Antihistamine for allergy relief',
    price: 5.75,
    stock: 90,
    category: 'Allergy',
    image: 'https://placehold.co/300x200?text=Loratadine'
  },
  {
    id: 8,
    name: 'Metformin 500mg',
    description: 'Medication for type 2 diabetes',
    price: 10.50,
    stock: 60,
    category: 'Diabetes',
    image: 'https://placehold.co/300x200?text=Metformin'
  },
  {
    id: 9,
    name: 'Simvastatin 20mg',
    description: 'Cholesterol-lowering medication',
    price: 11.25,
    stock: 40,
    category: 'Heart Health',
    image: 'https://placehold.co/300x200?text=Simvastatin'
  },
  {
    id: 10,
    name: 'Omeprazole 20mg',
    description: 'Proton pump inhibitor for acid reflux',
    price: 9.99,
    stock: 80,
    category: 'Digestive Health',
    image: 'https://placehold.co/300x200?text=Omeprazole'
  },
];

export default function MedicineStorePage() {
  const { addToCart, totalItems } = useCart();

  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Hospital Pharmacy</h1>
        <div className="flex items-center gap-4">
          <Link href="/cart" className="relative">
            <button className="p-2 bg-blue-100 rounded-full">
              <span className="flex items-center gap-1">
                🛒 Cart
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </span>
            </button>
          </Link>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {medicines.map(medicine => (
          <div key={medicine.id} className="border rounded-lg p-4 shadow-md">
            <img src={medicine.image} alt={medicine.name} className="w-full h-32 object-cover rounded mb-2" />
            <h3 className="text-lg font-semibold">{medicine.name}</h3>
            <p className="text-sm text-gray-600">{medicine.description}</p>
            <p className="text-sm text-gray-500">Price: ${medicine.price.toFixed(2)}</p>
            <p className="text-sm text-gray-500">In stock: {medicine.stock}</p>
            <button 
              onClick={() => addToCart(medicine)}
              className="mt-2 w-full p-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

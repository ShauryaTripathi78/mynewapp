import Image from "next/image";
import Link from "next/link";
import { Button } from "@/Components/ui/button";

export default function Home() {
  return (
      <div className="flex flex-col items-center justify-center p-8">
         <div className="">
           <img src="https://as2.ftcdn.net/v2/jpg/02/60/04/09/1000_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg" alt="" />
         </div>
         <div>
           <Link href="/about" className="flex justify-center items-center mb-4 mt-4">
             <Button variant="outline" className="bg-blue-200 justify-center">About Us</Button>
           </Link>
           <p className="text-xl text-justify">At our clinic, we are committed to providing compassionate, patient-centered healthcare that focuses on your overall well-being. Led by [Dr. Full Name], a <span className="text-blue-300">highly qualified</span>  and experienced [Specialization] specialist, our mission is to deliver accurate diagnosis, effective treatment, and personalized care in a warm and welcoming environment. With state-of-the-art technology and a focus on preventive healthcare, we strive to build lasting relationships with our patients, ensuring they feel heard, respected, and empowered in their health journey.
          
          </p>
         </div>
       </div>
  );
}

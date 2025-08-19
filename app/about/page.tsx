"use client"
import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

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
        alt="Clinic"
      />
      <span className="text-xl  text-justify font-normal ">
            <p>At our clinic, we are committed to providing compassionate, patient-centered healthcare that focuses on your overall well-being. Led by [Dr. Full Name], a highly qualified and experienced [Specialization] specialist, our mission is to deliver accurate diagnosis, effective treatment, and personalized care in a warm and welcoming environment. With state-of-the-art technology and a focus on preventive healthcare, we strive to build lasting relationships with our patients, ensuring they feel heard, respected, and empowered in their health journey.

</p>
      </span>
    </CarouselItem>
    <CarouselItem>
      <Image className="ml-auto mr-auto"
        src="https://as2.ftcdn.net/v2/jpg/02/60/04/09/1000_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg"
        width={500}
        height={333}
        alt="Clinic"/>
    </CarouselItem>
    <CarouselItem>
      <Image className="ml-auto mr-auto"
        src="https://as2.ftcdn.net/v2/jpg/02/60/04/09/1000_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg"
        width={500}
        height={333}
        alt="Clinic"/>
    </CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
      <div>
        <p className=" mb-20 mt h-20 text-xl">At our clinic, we are committed to providing compassionate, patient-centered healthcare that focuses on your overall well-being. Led by [Dr. Full Name], a highly qualified and experienced [Specialization] specialist, our mission is to deliver accurate diagnosis, effective treatment, and personalized care in a warm and welcoming environment. With state-of-the-art technology and a focus on preventive healthcare, we strive to build lasting relationships with our patients, ensuring they feel heard, respected, and empowered in their health journey.

</p>
      </div>
      
    </div>
    );
}

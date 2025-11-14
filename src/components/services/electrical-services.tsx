'use client';
import Image from 'next/image';
import Button from '@/components/ui/button';

export default function ElectricalServices() {
  const services = [
    {
      img: '/assets/terminator-images/home/hero-section-bg/hero-slide1.jpg',
      title: 'Electrical System',
      desc: 'Full inspection with first-rate routine testing by skilled workers.',
    },
    {
      img: '/assets/terminator-images/home/hero-section-bg/hero-slide2.jpg',
      title: 'Energy Saving',
      desc: 'Replacing LED light bulbs for energy and environmental saving.',
    },
    {
      img: '/assets/terminator-images/home/hero-section-bg/hero-slide3.jpg',
      title: 'Voltage Calculation',
      desc: 'Replacing LED light bulbs for energy and environmental saving.',
    },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="mb-2 text-4xl font-bold text-black md:text-5xl">
          Top-Notch Assistance
        </h2>
        <p className="mb-12 text-sm tracking-[2px] text-black uppercase">
          Maintenance, Repairs, Checks and Much More
        </p>

        <div className="mb-12 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          {services.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-md  bg-white  p-4 text-center  transition "
            >
              <div className="mb-4 h-[150px] w-[150px] overflow-hidden border  border-black ">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={150}
                  height={150}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
              <p className="text-md text-muted">{item.desc}</p>
            </div>
          ))}
        </div>

        <Button className="bg-[#f7c02f] px-6 py-3 font-semibold text-black">
          More Info
        </Button>
      </div>
    </section>
  );
}

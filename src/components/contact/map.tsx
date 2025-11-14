'use client';

export default function Map() {
  return (
    <section className="h-[500px] w-full md:h-[600px]">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509591!2d144.95373631531587!3d-37.8172099797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f07c37b1%3A0x2b2a4d0b3e0c1e3c!2sMelbourne%20City!5e0!3m2!1sen!2sau!4v1615233649645!5m2!1sen!2sau"
        width="100%"
        height="100%"
        allowFullScreen
        loading="lazy"
        className="border-0"
      >
      </iframe>
    </section>
  );
}

'use client';

export default function Map() {
  return (
    <section className="h-[500px] w-full md:h-[600px]">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.8567752849!2d67.07068797097108!3d24.902866594743383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f20cbaaaaad%3A0x10b9c3ee0f57cf15!2sThe%20Terminators!5e0!3m2!1sen!2s!4v1764674495437!5m2!1sen!2s"
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

'use client';

export default function OurGallery() {
  // const containerRef = useRef<HTMLDivElement>(null);
  // const [selectedCategory, setSelectedCategory] = useState<string>('all');
  // const [, setHoveredId] = useState<string | null>(null);

  // useLightGallery(containerRef, {
  //   selector: 'a.gallery-item',
  //   settings: {
  //     thumbWidth: 80,
  //     thumbHeight: 80 as any,
  //     animateThumb: true,
  //     enableSwipe: true,
  //     counter: true,
  //   },
  // });

  // const filteredImages
  //   = selectedCategory === 'all' ? galleryImages : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <section className="w-full bg-background py-16 md:py-24">
      {/* <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-3 font-sans text-3xl font-bold tracking-tight text-foreground md:text-4xl">Our Gallery</h2>
          <p className="text-lg text-muted-foreground">
            Explore our collection of events, exhibitions, and special moments
          </p>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.value)}
              className={`rounded-lg px-6 py-2.5 font-medium transition-all duration-300 ${
                selectedCategory === cat.value
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'border border-border bg-card text-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div
          ref={containerRef}
          className="gallery-grid-masonry grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {filteredImages.map((image: GalleryImage, index: number) => {
            let sizeClass = 'col-span-1 row-span-1';
            if (index % 7 === 0) {
              sizeClass = 'col-span-2 row-span-2';
            } else if (index % 5 === 0) {
              sizeClass = 'col-span-2 row-span-1';
            } else if (index % 3 === 0) {
              sizeClass = 'col-span-1 row-span-2';
            }

            return (
              <div
                key={image.id}
                className={`gallery-card group relative overflow-hidden rounded-lg border border-border bg-card ${sizeClass}`}
                onMouseEnter={() => setHoveredId(image.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <a href={image.src} data-thumb={image.thumb} className="gallery-item block h-full w-full">
                  <div className="relative h-full w-full overflow-hidden bg-muted">
                    <img
                      src={image.thumb || '/placeholder.svg'}
                      alt={image.alt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="inline-block w-fit rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground">
                        {image.category === 'event' && 'Event'}
                        {image.category === 'exhibition' && 'Exhibition'}
                        {image.category === 'general' && 'Gallery'}
                      </span>
                      <p className="mt-2 font-medium text-white">{image.title}</p>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div> */}

      {/* {filteredImages.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-lg text-muted-foreground">No images found in this category</p>
          </div>
        )}
      </div> */}
    </section>
  );
}

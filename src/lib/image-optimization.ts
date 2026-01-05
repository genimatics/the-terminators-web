/**
 * Helper utility for optimizing image display in gallery
 */

export type GridSize = {
  gridClass: string;
  style: React.CSSProperties;
};

/**
 * Determine grid item size based on index for perfect masonry layout
 * Fixed pattern for perfect alignment
 */
export function getGridItemSize(index: number): GridSize {
  // More balanced pattern (8-item cycle for perfect alignment)
  const pattern = index % 8;

  switch (pattern) {
    // Pattern for perfect masonry grid alignment:
    // Large landscape (2 columns, 1 row)
    case 0:
      return {
        gridClass: 'col-span-2 row-span-1',
        style: { aspectRatio: '16/9' },
      };

    // Square (1 column, 1 row)
    case 1:
      return {
        gridClass: 'col-span-1 row-span-1',
        style: { aspectRatio: '1/1' },
      };

    // Portrait (1 column, 2 rows)
    case 2:
      return {
        gridClass: 'col-span-1 row-span-2',
        style: { aspectRatio: '3/4' },
      };

    // Wide landscape (2 columns, 1 row)
    case 3:
      return {
        gridClass: 'col-span-2 row-span-1',
        style: { aspectRatio: '21/9' },
      };

    // Large square (2 columns, 2 rows)
    case 4:
      return {
        gridClass: 'col-span-2 row-span-2',
        style: { aspectRatio: '1/1' },
      };

    // Regular landscape (1 column, 1 row)
    case 5:
      return {
        gridClass: 'col-span-1 row-span-1',
        style: { aspectRatio: '4/3' },
      };

    // Tall portrait (1 column, 2 rows)
    case 6:
      return {
        gridClass: 'col-span-1 row-span-2',
        style: { aspectRatio: '2/3' },
      };

    // Regular square (1 column, 1 row)
    case 7:
    default:
      return {
        gridClass: 'col-span-1 row-span-1',
        style: { aspectRatio: '1/1' },
      };
  }
}

/**
 * Calculate optimal grid columns based on container width
 */
export function calculateGridColumns(containerWidth: number): number {
  if (containerWidth < 640) {
    return 2;
  } // sm
  if (containerWidth < 768) {
    return 2;
  } // md
  if (containerWidth < 1024) {
    return 3;
  } // lg
  if (containerWidth < 1280) {
    return 4;
  } // xl
  return 4; // 2xl
}

/**
 * Preload images for better performance
 */
export async function preloadImages(
  imageUrls: string[],
  maxConcurrent = 4,
): Promise<void> {
  for (let i = 0; i < imageUrls.length; i += maxConcurrent) {
    const batch = imageUrls.slice(i, i + maxConcurrent);
    const promises = batch.map((url) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => resolve();
        img.src = url;
      });
    });
    await Promise.all(promises);
  }
}

/**
 * Calculate image dimensions for display
 */
export function calculateImageDimensions(
  naturalWidth: number,
  naturalHeight: number,
  maxWidth: number,
  maxHeight: number,
): { width: number; height: number } {
  const ratio = Math.min(maxWidth / naturalWidth, maxHeight / naturalHeight);

  return {
    width: Math.round(naturalWidth * ratio),
    height: Math.round(naturalHeight * ratio),
  };
}

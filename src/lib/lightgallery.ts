'use client';

import type { LightGallerySettings } from 'lightgallery/lg-settings';
import type { LightGallery } from 'lightgallery/lightgallery';
import { useEffect } from 'react';

type LightGalleryOptions = {
  selector?: string;
  settings?: Partial<LightGallerySettings>;
};

export const useLightGallery = <T extends HTMLElement = HTMLElement>(
  containerRef: React.RefObject<T | null>,
  options: LightGalleryOptions = {},
) => {
  useEffect(() => {
    let lightGalleryInstance: LightGallery | null = null;

    const initLightGallery = async () => {
      try {
        const lgModule = await import('lightgallery');
        const lgThumbnailModule = await import('lightgallery/plugins/thumbnail');
        const lgZoomModule = await import('lightgallery/plugins/zoom');
        const lgFullscreenModule = await import('lightgallery/plugins/fullscreen');

        const lightgallery = lgModule.default;
        const lgThumbnail = lgThumbnailModule.default;
        const lgZoom = lgZoomModule.default;
        const lgFullscreen = lgFullscreenModule.default;

        if (containerRef.current) {
          lightGalleryInstance = lightgallery(containerRef.current, {
            selector: options.selector || 'a',
            plugins: [lgThumbnail, lgZoom, lgFullscreen],
            speed: 500,
            thumbnail: true,
            showThumbByDefault: true,
            thumbWidth: '80',
            thumbHeight: '80',
            animateThumb: true,
            enableSwipe: true,
            enableDrag: true,
            counter: true,
            controls: true,
            share: false,
            fullScreen: true,
            zoom: true,
            ...options.settings,
            ...(options.settings?.thumbWidth
              ? {
                  thumbWidth: String(options.settings.thumbWidth),
                }
              : {}),
            ...(options.settings?.thumbHeight
              ? {
                  thumbHeight: String(options.settings.thumbHeight),
                }
              : {}),
          } as LightGallerySettings);
        }
      } catch (error) {
        console.error('LightGallery initialization failed:', error);
      }
    };

    initLightGallery();

    return () => {
      if (lightGalleryInstance) {
        try {
          lightGalleryInstance.destroy();
        } catch (e) {
          console.error('Error destroying LightGallery:', e);
        }
      }
    };
  }, [containerRef, options]);
};

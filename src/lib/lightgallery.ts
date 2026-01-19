'use client';

import type { LightGallerySettings } from 'lightgallery/lg-settings';

import type { LightGallery } from 'lightgallery/lightgallery';
import type React from 'react';
import { useEffect } from 'react';

export const LIGHTGALLERY_CONFIG = {
  THUMBNAIL_WIDTH: 80,
  THUMBNAIL_HEIGHT: 80,
  THUMBNAIL_MARGIN: 6,
  THUMBNAIL_BORDER_RADIUS: '8px',
  SPEED: 500,
} as const;

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
            speed: LIGHTGALLERY_CONFIG.SPEED,
            thumbnail: true,
            thumbWidth: LIGHTGALLERY_CONFIG.THUMBNAIL_WIDTH,
            thumbHeight: LIGHTGALLERY_CONFIG.THUMBNAIL_HEIGHT,
            animateThumb: false,
            thumbMargin: LIGHTGALLERY_CONFIG.THUMBNAIL_MARGIN,
            toggleThumb: true,
            counter: false,
            share: false,
            download: false,
            fullScreen: true,
            zoom: true,
            enableSwipe: true,
            enableDrag: true,
            toolbar: true,
            toolbarPosition: 'bottom',
            controls: true,
            showBarsAfter: 5000,
            ...options.settings,
          } as LightGallerySettings);

          const style = document.createElement('style');
          style.textContent = `
            .lg-thumb-outer {
              display: none !important;
            }
            .lg-thumbs {
              display: none !important;
            }
          `;
          document.head.appendChild(style);
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

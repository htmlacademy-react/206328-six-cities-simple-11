import React from 'react';
import { GalleryProps } from '../../types';

export const Gallery = ({ images }: GalleryProps) => (
  <div className='property__gallery-container container'>
    <div className='property__gallery'>
      {images.slice(0,6).map((image: string, index: number) => (
        <div className='property__pic-wrapper' key={image}>
          <img
            className='property__pic'
            src={image}
            alt={`studio pic${index}`}
          />
        </div>
      ))}
    </div>
  </div>
);

import React, { useState } from 'react';

export default function ProfileAvatar({ src, alt, size = 68, gradientBorder = true, borderColor = '#2878ff' }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        padding: gradientBorder ? '2px' : '0px',
        background: gradientBorder ? 'linear-gradient(45deg, #00f2fe 0%, #2878ff 50%, #fe2c55 100%)' : 'transparent',
        flexShrink: 0
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          backgroundColor: '#0b1120',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          border: !gradientBorder ? `2px solid ${borderColor}` : 'none'
        }}
      >
        {src && !hasError ? (
          <img
            src={src}
            alt={alt || 'Perfil'}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
            onError={() => setHasError(true)}
          />
        ) : (
          /* Fallback visual seguro caso a imagem não exista ou falhe ao carregar */
          <span style={{ color: '#9898a6', fontWeight: 'bold', fontSize: `${size * 0.35}px` }}>
            {alt ? alt.charAt(0).toUpperCase() : 'U'}
          </span>
        )}
      </div>
    </div>
  );
}
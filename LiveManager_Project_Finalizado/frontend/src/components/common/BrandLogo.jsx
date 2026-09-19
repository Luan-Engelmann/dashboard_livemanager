import React, { useState } from 'react';

export default function BrandLogo({ size = 56, borderWidth = 2, imagePath = "/logo.png" }) {
  const [imgSrc, setImgSrc] = useState(imagePath);
  const [hasError, setHasError] = useState(false);

  // Tentativas de fallback automáticas caso o nome na pasta public seja ligeiramente diferente
  const handleImageError = () => {
    if (imgSrc === "/logo.png") {
      setImgSrc("/Logo.png");
    } else if (imgSrc === "/Logo.png") {
      setImgSrc("/logo.jpg");
    } else if (imgSrc === "/logo.jpg") {
      setImgSrc("/logo_troia.jpeg");
    } else {
      setHasError(true);
    }
  };

  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        border: `${borderWidth}px solid #2878ff`,
        boxShadow: '0 0 16px rgba(40, 120, 255, 0.35)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#0b1120',
        flexShrink: 0
      }}
    >
      {!hasError ? (
        <img
          src={imgSrc}
          alt="oTalDoTroia"
          onError={handleImageError}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      ) : (
        /* Fallback de texto caso a imagem não seja encontrada na pasta public */
        <span style={{ color: '#2878ff', fontWeight: 'bold', fontSize: `${size * 0.4}px` }}>
          T
        </span>
      )}
    </div>
  );
}
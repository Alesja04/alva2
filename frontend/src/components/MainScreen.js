import React from 'react';

export default function MainScreen() {
  return (
    <div
      style={{
        minHeight: '100vh', // Минимальная высота в 100% высоты экрана
        backgroundImage: 'url("../img/main.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center', // Центрирование изображения
        backgroundRepeat: 'no-repeat', // Запрет повторения изображения
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
    </div>
  );
}
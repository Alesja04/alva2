import React from 'react';

export default function MainScreen() {
  return (
    <div
      style={{
        height: '100vh', // Задаем высоту блока на всю высоту экрана
        backgroundImage: 'url("../img/main.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center', // Центрируем фоновое изображение
      }}
    ></div>
  );
}
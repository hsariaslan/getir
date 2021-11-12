import React from 'react';

export default function Categories() {
  const categories = [
    "Yeni Ürünler",
    "İndirimler",
    "Su & İçecek",
    "Meyve & Sebze",
    "Fırından",
    "Temel Gıda",
    "Atıştırmalık",
    "Dondurma",
    "Yiyecek",
    "Süt & Kahvaltı",
    "Fit & Form",
    "Kişisel Bakım",
    "Ev Bakım",
    "Ev & Yaşam",
    "Teknoloji",
    "Evcil Hayvan",
    "Bebek",
    "Cinsel Sağlık",
    "Giyim",
  ]
  const items = []
  for (const [index, value] of categories.entries()) {
    items.push (
      <div key={index} className="category">
        <img src={`/images/categories/${index + 1}.jpeg`} width="48" height="48" className="border-1 border-gray-200 rounded-lg" />
        <span className="text-sm">{value}</span>
      </div>
    )
  }
  return (
    <div className="bg-white shadow-light">
      <div className="container pt-5">
        <span>Kategoriler</span>
        <div className="flex flex-wrap justify-start mt-3">{items}</div>
      </div>
    </div>
  )
}

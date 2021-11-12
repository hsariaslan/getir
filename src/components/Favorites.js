import React from 'react';
import FavoriteProduct from 'components/FavoriteProduct';

export default function Favorites() {
  const products = [
    [
      'Kuzeyden',
      '2,95',
      '1.5 L',
    ],
    [
      'Kızılay Erzincan',
      '5,90',
      '6 x 200 ml',
    ],
    [
      'Lay\'s Mevsim Yeşillikli',
      '6,39',
      '96 g',
    ],
    [
      'Eti Canga',
      '2,85',
      '45 g',
    ],
    [
      'Ülker Napoliten',
      '3,30',
      '33 g',
    ],
    [
      'Kavrulmuş Siyah Ay Çekirdeği',
      '10,95',
      '180 g',
    ],
    [
      'Magnum Badem',
      '7,50',
      '100 ml',
    ],
    [
      'İçim %3 Yağlı Süt',
      '7,95',
      '1 L',
    ],
    [
      'Bahçıvan Süzme Peynir',
      '20,75',
      '500 g',
    ],
    [
      'Hertane Kuru Sele Zeytin',
      '33,90',
      '285 g',
    ],
    [
      'La Lorraine Tombul Ekmek',
      '5,95',
      '350 g',
    ],
    [
      'Barilla Spagetti',
      '7,35',
      '500 g',
    ],
    [
      'Colgate Üçlü Etki',
      '18,25',
      '150 ml',
    ],
    [
      'Selpak Tuvalet Kağıdı',
      '57,90',
      '16\'lı',
    ],
    [
      'Yumoş Extra Lilyum & Lotus',
      '30,49',
      '1440 ml',
    ],
    [
      'Domestos Dağ Esintisi',
      '8,35',
      '750 ml',
    ],
  ];
  const items = [];
  for (const [i, value] of products.entries()) {
    items.push (
      <FavoriteProduct
        key={i}
        title={value[0]}
        price={value[1]}
        quantity={value[2]}
        image={`/images/favorites/${i + 1}.jpeg`}
      />
    )
  }
  return (
    <div className="container mt-8">
      <span>Favoriler</span>
      <div className="grid grid-cols-8 gap-1 mt-3 bg-white">{items}</div>
    </div>
  )
}

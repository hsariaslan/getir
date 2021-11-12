import React from 'react';
import Card from 'components/Card';

export default function Cards() {
  const cards = [
    [
      'Her siparişinize bir kampanya',
      'Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.'
    ],
    [
      'Dakikalar içinde kapınızda',
      'Getir’le siparişiniz dakikalar içinde kapınıza gelir.'
    ],
    [
      'Binlerce çeşit mutluluk',
      'Getir’de binlerce çeşit arasından seçiminizi yapabilirsiniz.'
    ],
  ];
  const items = [];
  for (const [i, value] of cards.entries()) {
    items.push (
      <Card
        key={i}
        title={value[0]}
        description={value[1]}
        image={`/images/cards-${i + 1}.svg`}
      />
    )
  }
  return (
    <div className="container mt-14 flex justify-between gap-x-4">
      {items}
    </div>
  )
}

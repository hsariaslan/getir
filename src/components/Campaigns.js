import React from 'react';

export default function Campaigns() {
  const items = []
  for (let i = 1; i <= 2; i ++) {
    items.push (
      <img key={i} className="rounded-lg mr-4" src={`/images/campaigns/${i}.jpeg`} width="400" height="200" />
    )
  }
  return (
    <div className="container pt-5">
      <span>Kampanyalar</span>
      <div className="flex flex-wrap justify-start mt-3">{items}</div>
    </div>
  )
}

import React from 'react'
import Card from './Card'

import b from "./b.jpg"
import bs from './bs.jpg'
import at from './at.jpg'

const cards = [
  {
    id: 1,
    title: "Blur",
    image: b,
    url: "https://google.com",
  },
  {
    id: 2,
    title: "Black Sabbath",
    image: bs,
    url: "https://google.com",
  },
  {
    id: 3,
    title: "Aphex Twin",
    image: at,
    url: "https://google.com",
  },
];

const Cards = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center h-150 mt-25">
      <div className="row">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
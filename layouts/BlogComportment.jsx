import React from 'react';
import { BlogNew, BlogAlaUne, BlogItemsLittle } from '../composants/blogComponent';
import Style from '../styles/style-e.module.css'

const Data = [
  {
    id: 1,
    titre: 'Je suis un titre dont je ne connais pas encore le contenu',
    publier: '12 / 12 / 2022',
  },
  {
    id: 2,
    titre: 'Je suis un titre dont je ne connais pas encore le contenu',
    publier: '12 / 12 / 2022',
  },
  {
    id: 3,
    titre: 'Je suis un titre dont je ne connais pas encore le contenu',
    publier: '12 / 12 / 2022',
  },
  {
    id: 4,
    titre: 'Je suis un titre dont je ne connais pas encore le contenu',
    publier: '12 / 12 / 2022',
  },
];

export function BlogNewSection() {
  return (
    <div className={Style.screenGrid}>
      <div className={Style.contentGrid}>
        <div className={Style.grid_left} style={{ gap: 24 }}>
          {Data.map((el) => (
            <BlogNew key={el.id} titre={el.titre} publier={el.publier} id ={el.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
export function BlogPlus() {
  return (
    <div className={Style.screenGrid}>
      <div className={Style.contentGrid}>
        <div className={Style.grid} style={{ gap: 24 }}>
          {Data.map((el) => (
            <BlogItemsLittle
              key={el.id}
              titre={el.titre}
              publier={el.publier}
              id = { el.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function BlogAlaUneSpace() {
  return (
    <div>
      <BlogAlaUne id={655733765} />
    </div>
  );
}

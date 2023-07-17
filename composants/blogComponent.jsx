import Link from 'next/link';
import React from 'react';
import Style from '../styles/style-e.module.css'

export function BlogNew({ titre, publier, id }) {
  const newTitre = titre.length > 50 ? `${titre.slice(0, 49)}...` : titre;

  return (
    <Link href={`/actualites/${id}`} >
      <div className={Style.blogNew}>
        <div
          className={Style.blogImgTop}
          style={{
            backgroundImage:
              'url("https://sellam.cm/image/cache/catalog/MAM/TV%20Stand/MAM%20(20)-228x228.jpg")',
          }}
        >
          <div className={Style.nouveaute}>Nouveauté</div>
        </div>
        <div className={Style.descBlog}>
          <div className={Style.titre}>{newTitre}</div>
          <div className={Style.publication}>Publier le : {publier}</div>
        </div>
      </div>
    </Link>
  );
}

export function BlogItemsLittle({ titre, publier, id }) {
  const newTitre = titre.length > 50 ? `${titre.slice(0, 49)}...` : titre;

  return (
    <Link href={`/actualites/${id}`} >
      <div className={Style.blogItemsLittle}>
        <div
          className={Style.blogImgTop}
          style={{
            backgroundImage:
              'url("https://sellam.cm/image/cache/catalog/MAM/TV%20Stand/MAM%20(20)-228x228.jpg")',
          }}
        ></div>
        <div className={Style.descBlog}>
          <div className={Style.titre}>{newTitre}</div>
          <div className={Style.publication}>Publier le : {publier}</div>
        </div>
      </div>
    </Link>
  );
}

export function BlogAlaUne({id}) {
  return (
    <Link href={`/actualites/${id}`} >
    <div className="Une">
      <div
        className={Style.uneBlog}
        style={{
          backgroundImage:
            'url("https://media.gqmagazine.fr/photos/62d924d13a5500ded9072a6d/16:9/w_2560%2Cc_limit/GettyImages-1029518538.jpg")',
        }}
      >
        <div className={Style.descBlog}>
          <div className={Style.nouveaute}>Nouveaute</div>
          <div className={Style.titre}>
            Ceci est le plus gros titre que je n'ai ecrit
          </div>
          <div className={Style.publier}>Publier le : </div>
        </div>
      </div>
    </div>
    </Link>
  );
}

import React from 'react';


const ArtistsItem = ({ artist }) => {
  return (
    <div className="artist-item">
      <figure>
        <p className="image"><img src={artist.image} alt={artist.name} /></p>
        <figcaption>
          <p className="type">{artist.type}</p>
          <p className="name">{artist.name}</p>
        </figcaption>
      </figure>
      <div className="badges">
        {artist.new ? <span className="new">new</span> : null}
        {artist.top ? <span className="top">top</span> : null}
      </div>
    </div>
  );
};


export default ArtistsItem;

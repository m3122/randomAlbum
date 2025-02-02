'use client'

import { useState } from 'react';
import albums from '../albums.json';

export default function Home() {
  const getRandomAlbum = () => {
    const randomIndex = Math.floor(Math.random() * albums.length);
    return albums[randomIndex];
  };

  const [album, setAlbum] = useState(getRandomAlbum());

  const handleRefresh = () => {
    setAlbum(getRandomAlbum());
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', textAlign: 'center' }}>
      <img src={album.cover} alt={`${album.album} cover`} style={{ width: '300px', height: '300px', objectFit: 'cover', marginBottom: '20px' }} />
      <p>{album.album}</p>
      <p>{album.artist}</p>
      <button onClick={handleRefresh} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>Refresh Album</button>
    </div>
  );
}

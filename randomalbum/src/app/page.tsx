'use client'

import { useState } from 'react';
import Link from 'next/link';
import albums from '../../public/albums.json';

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
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <img src={album.cover} alt={`${album.album} cover`} className="w-72 h-72 object-cover mb-5" />
      <p className="text-xl font-semibold">{album.album}</p>
      <p className="text-lg text-gray-600">{album.artist}</p>
      <div className="flex justify-center space-x-2 mt-3">
        {album.spotify && (
          <a href={album.spotify} target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg" alt="Spotify" className="w-6 h-6" />
          </a>
        )}
        {album.bandcamp && (
          <a href={album.bandcamp} target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Bandcamp-button-circle-aqua.svg" alt="Bandcamp" className="w-6 h-6" />
          </a>
        )}
        {album.soundcloud && (
          <a href={album.soundcloud} target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Antu_soundcloud.svg" alt="SoundCloud" className="w-6 h-6" />
          </a>
        )}
      </div>
      <button onClick={handleRefresh} className="mt-5 px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Refresh Album
      </button>
      <Link href="/list">
        <p className="mt-5 px-5 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Go to List
        </p>
      </Link>
    </div>
  );
}

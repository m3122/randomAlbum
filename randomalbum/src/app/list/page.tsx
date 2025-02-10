'use client'

import React, { useState, useEffect } from "react";
import Link from 'next/link';

interface Album {
  album: string;
  artist: string;
  cover: string;
  spotify?: string;
  bandcamp?: string;
  soundcloud?: string;
}

export default function List() {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch('/api/albums');
        const albums: Album[] = await response.json();
        setAlbums(albums);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch albums:', error);
        setLoading(false);
      }
    };

    fetchAlbums();
  }, []);

  const sortedAlbums = [...albums].sort((a, b) => a.artist.localeCompare(b.artist));

  if (loading) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center justify-start min-h-screen text-center mt-10">
      <Link href="/">
        <button className="mb-5 px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Go Back
        </button>
      </Link>
      <p className="text-xl font-semibold mb-5">List Page</p>
      <table className="table-auto border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Album</th>
            <th className="border border-gray-300 px-4 py-2">Artist</th>
          </tr>
        </thead>
        <tbody>
          {sortedAlbums.map((album, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">{album.album}</td>
              <td className="border border-gray-300 px-4 py-2">{album.artist}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
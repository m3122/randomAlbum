'use client'

import React from "react";
import Link from 'next/link';
import albums from '../../../public/albums.json';

export default function List() {
    const sortedAlbums = [...albums].sort((a, b) => a.artist.localeCompare(b.artist));

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
      <Link href="/albums.json">
        <button className="mt-5 px-5 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Get JSON
        </button>
      </Link>
    </div>
  );
}
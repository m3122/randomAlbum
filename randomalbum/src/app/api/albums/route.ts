import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';

export async function GET(req: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db('RandomAlbum');
    const albums = await db.collection('Albums.Albums').find({}).toArray(); // Use the correct collection name
    console.log('Fetched albums:', albums); // Log the fetched albums
    return NextResponse.json(albums);
  } catch (error) {
    console.error('Failed to fetch albums:', error);
    return NextResponse.json({ error: 'Failed to fetch albums' }, { status: 500 });
  }
}
import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';

export async function GET(req: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db('Albums');
    const albums = await db.collection('Albums').find({}).toArray(); // Use the correct collection name
    return NextResponse.json(albums);
  } catch (error) {
    console.error('Failed to fetch albums:', error);
    return NextResponse.json({ error: 'Failed to fetch albums' }, { status: 500 });
  }
}
import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

const API_BASE = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;

    const params: Record<string, string> = {
      page: searchParams.get('page') ?? '1',
      limit: searchParams.get('limit') ?? '4',
    };

    const location = searchParams.get('location');
    if (location) params.location = location;

    const form = searchParams.get('form');
    if (form) params.form = form;

    const response = await axios.get(`${API_BASE}/campers`, { params });

    return NextResponse.json({
      items: response.data,
      total: Number(response.headers['x-total-count']) || response.data.length,
    });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ items: [], total: 0 });
  }
}

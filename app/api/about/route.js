import { aboutData } from '../data/mockData';

export async function GET() {
  return Response.json(aboutData);
}

export async function POST(request) {
  try {
    const body = await request.json();
    Object.assign(aboutData, body);
    return Response.json(aboutData, { status: 200 });
  } catch (error) {
    return Response.json({ error: 'Failed to update about section' }, { status: 500 });
  }
} 
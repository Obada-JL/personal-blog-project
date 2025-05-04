import { videos } from '../data/mockData';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  
  let filteredVideos = videos;
  
  if (category && category !== 'All') {
    filteredVideos = videos.filter(video => video.category === category);
  }
  
  return Response.json(filteredVideos);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const newVideo = {
      id: videos.length + 1,
      ...body,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    };
    
    videos.push(newVideo);
    return Response.json(newVideo, { status: 201 });
  } catch (error) {
    return Response.json({ error: 'Failed to create video' }, { status: 500 });
  }
} 
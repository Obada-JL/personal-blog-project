import { blogPosts } from '../data/mockData';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  
  let filteredPosts = blogPosts;
  
  if (category && category !== 'All') {
    filteredPosts = blogPosts.filter(post => post.category === category);
  }
  
  return Response.json(filteredPosts);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const newPost = {
      id: blogPosts.length + 1,
      ...body,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    };
    
    blogPosts.push(newPost);
    return Response.json(newPost, { status: 201 });
  } catch (error) {
    return Response.json({ error: 'Failed to create post' }, { status: 500 });
  }
} 
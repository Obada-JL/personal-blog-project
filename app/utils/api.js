const API_BASE_URL = 'http://localhost:5000/api';

export async function fetchBlogPosts(category = 'All') {
  const response = await fetch(`${API_BASE_URL}/blogs?category=${category}`);
  if (!response.ok) {
    throw new Error('Failed to fetch blog posts');
  }
  return response.json();
}

export async function fetchVideos(category = 'All') {
  const response = await fetch(`${API_BASE_URL}/videos?category=${category}`);
  if (!response.ok) {
    throw new Error('Failed to fetch videos');
  }
  return response.json();
}

export async function fetchAboutData() {
  const response = await fetch(`${API_BASE_URL}/about`);
  if (!response.ok) {
    throw new Error('Failed to fetch about data');
  }
  return response.json();
}

export async function createBlogPost(postData) {
  const response = await fetch(`${API_BASE_URL}/blogs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  });
  if (!response.ok) {
    throw new Error('Failed to create blog post');
  }
  return response.json();
}

export async function createVideo(videoData) {
  const response = await fetch(`${API_BASE_URL}/videos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(videoData),
  });
  if (!response.ok) {
    throw new Error('Failed to create video');
  }
  return response.json();
}

export async function updateAboutData(aboutData) {
  const response = await fetch(`${API_BASE_URL}/about`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(aboutData),
  });
  if (!response.ok) {
    throw new Error('Failed to update about data');
  }
  return response.json();
} 
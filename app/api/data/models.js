// Blog post model
export const blogPost = {
  id: Number,
  title: String,
  excerpt: String,
  content: String,
  image: String,
  category: String,
  readTime: String,
  date: String,
  author: String,
  tags: Array
};

// Video model
export const video = {
  id: Number,
  title: String,
  description: String,
  thumbnail: String,
  embedId: String,
  duration: String,
  category: String,
  date: String
};

// About section model
export const about = {
  title: String,
  description: String,
  mission: String,
  vision: String,
  team: Array,
  stats: Object
}; 
// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from 'react';

const App: React.FC = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-[#0092d2] cursor-pointer">MindfulBlog</a>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-600 hover:text-[#0092d2] cursor-pointer">Home</a>
            <a href="/blog" className="text-gray-600 hover:text-[#0092d2] font-medium cursor-pointer">Blog</a>
            <a href="/videos" className="text-gray-600 hover:text-[#0092d2] cursor-pointer">Videos</a>
            <a href="/about" className="text-gray-600 hover:text-[#0092d2] cursor-pointer">About</a>
            <button className="text-gray-600 hover:text-[#0092d2] cursor-pointer">
              <i className="fas fa-search"></i>
            </button>
          </nav>
          <button className="md:hidden text-gray-600">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </header>

      {/* Blog Post Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Category and Date */}
          <div className="mb-4 flex items-center">
            <span className="bg-[#0092d2] text-white px-3 py-1 rounded-full text-sm font-medium !rounded-button whitespace-nowrap">Lifestyle</span>
            <span className="ml-4 text-gray-500 text-sm">April 3, 2025</span>
            <span className="ml-4 text-gray-500 text-sm">8 min read</span>
          </div>

          {/* Blog Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Minimalist Living: Less is More</h1>
          
          {/* Author */}
          <div className="flex items-center mb-8">
            <img 
              src="https://public.readdy.ai/ai/img_res/cdf9f1d3f39df743dec230af4bc8723b.jpg" 
              alt="Author" 
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="ml-4">
              <p className="font-medium text-gray-800">Emma Thompson</p>
              <p className="text-gray-500 text-sm">Mindfulness Coach & Writer</p>
            </div>
            <div className="ml-auto flex space-x-3">
              <button className="text-gray-500 hover:text-[#0092d2] cursor-pointer">
                <i className="fab fa-twitter"></i>
              </button>
              <button className="text-gray-500 hover:text-[#0092d2] cursor-pointer">
                <i className="fab fa-facebook"></i>
              </button>
              <button className="text-gray-500 hover:text-[#0092d2] cursor-pointer">
                <i className="fab fa-linkedin"></i>
              </button>
              <button className="text-gray-500 hover:text-[#0092d2] cursor-pointer">
                <i className="fas fa-link"></i>
              </button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-10 rounded-xl overflow-hidden">
            <img 
              src="https://public.readdy.ai/ai/img_res/2da58d944357b447ef4ee65fb02650e4.jpg" 
              alt="Minimalist Living Room" 
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Blog Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              In our increasingly complex and fast-paced world, the philosophy of minimalism offers a refreshing alternative. Embracing minimalism isn't just about decluttering your physical space—it's a mindful approach to living that can transform your mental landscape and overall well-being.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">What is Minimalist Living?</h2>
            <p className="text-gray-700 mb-6">
              At its core, minimalist living is about intentionality. It's the practice of identifying what truly adds value to your life and eliminating everything else. This doesn't mean living in an empty white room with a single chair—rather, it means surrounding yourself only with things that serve a purpose or bring genuine joy.
            </p>
            
            <div className="bg-gray-100 p-6 rounded-lg my-8">
              <blockquote className="text-xl italic text-gray-700 border-l-4 border-[#0092d2] pl-4">
                "The intention of minimalism is not to own less, but to make room for more: more time, more peace, more creativity, more experiences, more contribution, more contentment, more freedom."
              </blockquote>
              <p className="text-right mt-2 text-gray-600">— Joshua Becker</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">The Benefits of Minimalist Living</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Reduced Stress and Anxiety</h3>
              <p className="text-gray-700">
                Research has consistently shown that cluttered environments contribute to increased stress levels. By simplifying your surroundings, you create a space that allows your mind to rest and recover from the constant stimulation of modern life.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Increased Focus and Productivity</h3>
              <p className="text-gray-700">
                With fewer distractions competing for your attention, you'll find it easier to concentrate on meaningful tasks and projects. Minimalism helps clear both physical and mental clutter, creating space for deep work and creative thinking.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">3. Financial Freedom</h3>
              <p className="text-gray-700">
                By becoming more intentional about your purchases, you naturally spend less on unnecessary items. This mindful approach to consumption can lead to significant savings, reduced debt, and greater financial flexibility.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">4. Environmental Impact</h3>
              <p className="text-gray-700">
                Consuming less means producing less waste. Minimalism aligns beautifully with sustainable living practices, reducing your carbon footprint and contributing to a healthier planet.
              </p>
            </div>

            {/* Image in content */}
            <div className="my-10 rounded-xl overflow-hidden">
              <img 
                src="https://public.readdy.ai/ai/img_res/f7dc3654182327c406f8fe455d85e791.jpg" 
                alt="Mindful meditation in minimalist space" 
                className="w-full h-auto object-cover"
              />
              <p className="text-sm text-gray-500 mt-2 italic">Finding peace in a decluttered environment allows for deeper mindfulness practices.</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Practical Steps to Embrace Minimalism</h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Start Small</h3>
              <p className="text-gray-700">
                Begin with a single drawer or closet rather than attempting to overhaul your entire home at once. Small victories build momentum and confidence in the process.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">The One-In-One-Out Rule</h3>
              <p className="text-gray-700">
                For every new item you bring into your home, commit to removing something else. This simple practice helps maintain equilibrium and prevents accumulation.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Digital Minimalism</h3>
              <p className="text-gray-700">
                Don't forget about your digital spaces. Unsubscribe from unnecessary email lists, organize your files, and be intentional about your social media consumption and screen time.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">The 90/90 Rule</h3>
              <p className="text-gray-700">
                When evaluating items, ask yourself: "Have I used this in the past 90 days? Will I use it in the next 90?" If the answer to both questions is no, it might be time to let it go.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Minimalism Beyond Possessions</h2>
            <p className="text-gray-700 mb-6">
              True minimalism extends beyond your physical belongings. Consider how you can apply minimalist principles to your:
            </p>

            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li className="mb-2"><strong>Schedule:</strong> Are you filling your calendar with activities that truly matter, or are you overcommitting?</li>
              <li className="mb-2"><strong>Relationships:</strong> Are you nurturing connections that enrich your life, or maintaining relationships out of obligation?</li>
              <li className="mb-2"><strong>Digital consumption:</strong> Is your media intake intentional, or are you scrolling mindlessly?</li>
              <li className="mb-2"><strong>Work:</strong> Are you focusing on impactful projects, or spreading yourself too thin?</li>
            </ul>

            <p className="text-gray-700 mb-6">
              By applying minimalist principles holistically, you create space for what truly matters—connection, creativity, rest, and purpose.
            </p>

            {/* Conclusion */}
            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Embracing the Journey</h2>
            <p className="text-gray-700 mb-6">
              Minimalism isn't a destination but a continuous journey of intentional living. There will be challenges and setbacks along the way, but the benefits—reduced stress, increased focus, financial freedom, and environmental sustainability—make it well worth the effort.
            </p>
            <p className="text-gray-700 mb-6">
              Remember that your minimalist journey is uniquely yours. There's no perfect formula or end goal—just the ongoing practice of making room for what matters most to you.
            </p>
            <p className="text-gray-700 mb-6">
              As you continue on this path, you may find that less truly is more—more peace, more purpose, and more joy in the everyday moments of your life.
            </p>
          </div>

          {/* Tags */}
          <div className="mt-10 pt-6 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm !rounded-button whitespace-nowrap cursor-pointer hover:bg-gray-200">Minimalism</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm !rounded-button whitespace-nowrap cursor-pointer hover:bg-gray-200">Mindful Living</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm !rounded-button whitespace-nowrap cursor-pointer hover:bg-gray-200">Decluttering</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm !rounded-button whitespace-nowrap cursor-pointer hover:bg-gray-200">Wellness</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm !rounded-button whitespace-nowrap cursor-pointer hover:bg-gray-200">Intentional Living</span>
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-10 bg-gray-50 p-6 rounded-xl border border-gray-100">
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <img 
                src="https://public.readdy.ai/ai/img_res/f9b46ee45f94b57c58174163cc74fdcd.jpg" 
                alt="Author" 
                className="w-20 h-20 rounded-full object-cover mb-4 md:mb-0"
              />
              <div className="md:ml-6">
                <h3 className="text-xl font-bold text-gray-800">Emma Thompson</h3>
                <p className="text-gray-600 mb-3">Mindfulness Coach & Writer</p>
                <p className="text-gray-700">
                  Emma is a certified mindfulness coach and writer passionate about helping others create space for what matters most. With a background in psychology and environmental studies, she brings a holistic perspective to minimalist living.
                </p>
                <div className="mt-3 flex space-x-3">
                  <a href="#" className="text-[#0092d2] hover:text-[#007bb8] cursor-pointer">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-[#0092d2] hover:text-[#007bb8] cursor-pointer">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="text-[#0092d2] hover:text-[#007bb8] cursor-pointer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <section className="bg-[#0092d2] py-16 mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Join Our Mindful Community</h2>
            <p className="text-white text-lg mb-8">
              Get weekly insights on mindful living, wellness tips, and exclusive content delivered straight to your inbox.
            </p>
            {!isSubscribed ? (
              <form className="flex flex-col md:flex-row gap-3 max-w-xl mx-auto" onSubmit={(e) => {
                e.preventDefault();
                setIsSubscribed(true);
              }}>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-white text-gray-800"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-[#0092d2] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors !rounded-button whitespace-nowrap cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            ) : (
              <div className="bg-white/20 rounded-lg p-6 max-w-xl mx-auto">
                <i className="fas fa-check-circle text-white text-4xl mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-2">Thank You for Subscribing!</h3>
                <p className="text-white">You'll receive our next newsletter in your inbox soon.</p>
              </div>
            )}
            <p className="text-white/80 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">You Might Also Enjoy</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Related Post 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://public.readdy.ai/ai/img_res/8c98d51c20786f7105abb1ee947d4e0e.jpg" 
                  alt="Digital Detox" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <span className="bg-[#0092d2]/10 text-[#0092d2] px-3 py-1 rounded-full text-sm font-medium !rounded-button whitespace-nowrap">Technology</span>
                <h3 className="text-xl font-bold text-gray-800 mt-3 mb-2">Digital Detox: Reclaiming Your Attention</h3>
                <p className="text-gray-600 mb-4">Practical strategies for mindful technology use in an always-connected world.</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>March 28, 2025</span>
                  <span>6 min read</span>
                </div>
              </div>
            </div>
            
            {/* Related Post 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://public.readdy.ai/ai/img_res/c5c3174df0f613c69e780a809915cffb.jpg" 
                  alt="Morning Routine" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <span className="bg-[#0092d2]/10 text-[#0092d2] px-3 py-1 rounded-full text-sm font-medium !rounded-button whitespace-nowrap">Wellness</span>
                <h3 className="text-xl font-bold text-gray-800 mt-3 mb-2">The Power of a Mindful Morning Routine</h3>
                <p className="text-gray-600 mb-4">How the first hour of your day can transform your mental wellbeing and productivity.</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>March 20, 2025</span>
                  <span>5 min read</span>
                </div>
              </div>
            </div>
            
            {/* Related Post 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://public.readdy.ai/ai/img_res/60523ab35e07f6c0790f979c725b3c4d.jpg" 
                  alt="Sustainable Wardrobe" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <span className="bg-[#0092d2]/10 text-[#0092d2] px-3 py-1 rounded-full text-sm font-medium !rounded-button whitespace-nowrap">Lifestyle</span>
                <h3 className="text-xl font-bold text-gray-800 mt-3 mb-2">Building a Sustainable Capsule Wardrobe</h3>
                <p className="text-gray-600 mb-4">Simplify your closet while reducing environmental impact with these timeless essentials.</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>March 15, 2025</span>
                  <span>7 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-10">Discussion (3)</h2>
            
            {/* Comment Form */}
            <div className="mb-12">
              <div className="flex items-start mb-6">
                <img 
                  src="https://public.readdy.ai/ai/img_res/f4a58290e5af4ab5eadb796185f77e02.jpg" 
                  alt="User Avatar" 
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div className="flex-grow">
                  <textarea 
                    className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0092d2] focus:border-transparent"
                    placeholder="Share your thoughts..."
                    rows={4}
                  ></textarea>
                  <button className="mt-3 bg-[#0092d2] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#007bb8] transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                    Post Comment
                  </button>
                </div>
              </div>
            </div>
            
            {/* Comments List */}
            <div className="space-y-8">
              {/* Comment 1 */}
              <div className="border-b border-gray-100 pb-8">
                <div className="flex items-start">
                  <img 
                    src="https://public.readdy.ai/ai/img_res/d5c34c763705035139456deb19c5ff2b.jpg" 
                    alt="Commenter Avatar" 
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div className="flex-grow">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-gray-800">David Chen</h4>
                      <span className="text-sm text-gray-500">2 days ago</span>
                    </div>
                    <p className="text-gray-700 mb-3">
                      This article came at the perfect time for me. I've been feeling overwhelmed by all the "stuff" in my life, both physical and digital. The 90/90 rule is something I'm definitely going to implement starting today. Thank you for the practical advice!
                    </p>
                    <div className="flex items-center space-x-4 text-sm">
                      <button className="text-gray-500 hover:text-[#0092d2] flex items-center cursor-pointer">
                        <i className="far fa-thumbs-up mr-1"></i> 12
                      </button>
                      <button className="text-gray-500 hover:text-[#0092d2] cursor-pointer">Reply</button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Comment 2 */}
              <div className="border-b border-gray-100 pb-8">
                <div className="flex items-start">
                  <img 
                    src="https://public.readdy.ai/ai/img_res/a64725a368e825f0103cc0e941304e91.jpg" 
                    alt="Commenter Avatar" 
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div className="flex-grow">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-gray-800">Sarah Johnson</h4>
                      <span className="text-sm text-gray-500">3 days ago</span>
                    </div>
                    <p className="text-gray-700 mb-3">
                      I've been practicing minimalism for about a year now, and it's truly transformed my life. One tip I'd add is to take before and after photos of spaces you declutter - it's incredibly motivating to see the visual difference!
                    </p>
                    <div className="flex items-center space-x-4 text-sm">
                      <button className="text-gray-500 hover:text-[#0092d2] flex items-center cursor-pointer">
                        <i className="far fa-thumbs-up mr-1"></i> 8
                      </button>
                      <button className="text-gray-500 hover:text-[#0092d2] cursor-pointer">Reply</button>
                    </div>
                    
                    {/* Reply to Comment 2 */}
                    <div className="mt-6 ml-6 pl-6 border-l-2 border-gray-100">
                      <div className="flex items-start">
                        <img 
                          src="https://public.readdy.ai/ai/img_res/fabc226fe68410a0057d2d6c07704470.jpg" 
                          alt="Author Avatar" 
                          className="w-8 h-8 rounded-full mr-3"
                        />
                        <div className="flex-grow">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-bold text-gray-800">Emma Thompson <span className="text-[#0092d2] text-sm ml-2">Author</span></h4>
                            <span className="text-sm text-gray-500">2 days ago</span>
                          </div>
                          <p className="text-gray-700 mb-3">
                            That's an excellent suggestion, Sarah! Visual documentation of the process can be both motivating and a wonderful reminder of how far you've come. I'll have to add that to my follow-up article.
                          </p>
                          <div className="flex items-center space-x-4 text-sm">
                            <button className="text-gray-500 hover:text-[#0092d2] flex items-center cursor-pointer">
                              <i className="far fa-thumbs-up mr-1"></i> 5
                            </button>
                            <button className="text-gray-500 hover:text-[#0092d2] cursor-pointer">Reply</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Comment 3 */}
              <div>
                <div className="flex items-start">
                  <img 
                    src="https://public.readdy.ai/ai/img_res/ed150430d754465b469255f32ecab169.jpg" 
                    alt="Commenter Avatar" 
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div className="flex-grow">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-gray-800">Michael Torres</h4>
                      <span className="text-sm text-gray-500">4 days ago</span>
                    </div>
                    <p className="text-gray-700 mb-3">
                      I appreciate the holistic approach to minimalism presented here. Too often people think it's just about throwing things away, but the focus on intentionality in all aspects of life is what makes it truly transformative. Would love to see a follow-up article on minimalist approaches to digital life specifically.
                    </p>
                    <div className="flex items-center space-x-4 text-sm">
                      <button className="text-gray-500 hover:text-[#0092d2] flex items-center cursor-pointer">
                        <i className="far fa-thumbs-up mr-1"></i> 15
                      </button>
                      <button className="text-gray-500 hover:text-[#0092d2] cursor-pointer">Reply</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <button className="mt-10 text-[#0092d2] font-medium flex items-center mx-auto cursor-pointer">
              Load More Comments <i className="fas fa-chevron-down ml-2"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">MindfulBlog</h3>
              <p className="text-gray-400 mb-4">
                Exploring technology, lifestyle, and wellness through a thoughtful lens.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Categories</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">Technology</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">Lifestyle</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">Wellness</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">Travel</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">Food</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">Advertise</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Subscribe</h4>
              <p className="text-gray-400 mb-4">
                Get the latest posts delivered straight to your inbox.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-l-lg border-none text-gray-800 w-full"
                />
                <button
                  type="submit"
                  className="bg-[#0092d2] text-white px-4 py-2 rounded-r-lg !rounded-button whitespace-nowrap cursor-pointer"
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 MindfulBlog. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <img src="https://via.placeholder.com/200x30/2d3748/FFFFFF?text=Payment+Methods" alt="Payment Methods" className="h-6" />
            </div>
          </div>
        </div>
      </footer>

      {/* Back to top button */}
      <button 
        className="fixed bottom-6 right-6 bg-[#0092d2] text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-[#007bb8] transition-colors cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
};

export default App;


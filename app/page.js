"use client"
import  { useState, useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('الكل');
  const statsChartRef = useRef(null);
  
  // Animation for elements on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  // Stats chart initialization
  useEffect(() => {
    if (statsChartRef.current) {
      const chart = echarts.init(statsChartRef.current);
      
      const option = {
        animation: false,
        tooltip: {
          trigger: 'item'
        },
        color: ['#0088cc', '#38b2ac', '#4299e1', '#667eea'],
        series: [
          {
            name: 'Blog Stats',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 16,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 48, name: 'Technology' },
              { value: 32, name: 'Lifestyle' },
              { value: 26, name: 'Travel' },
              { value: 18, name: 'Food' }
            ]
          }
        ]
      };
      
      chart.setOption(option);
      
      const handleResize = () => {
        chart.resize();
      };
      
      window.addEventListener('resize', handleResize);
      
      return () => {
        chart.dispose();
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);
  
  const categories = ['الكل', 'التكنولوجيا', 'نمط الحياة', 'السفر', 'الطعام'];
  
  const posts = [
    {
      id: 1,
      title: 'مستقبل تطوير الويب في 2025',
      excerpt: 'استكشاف أحدث الاتجاهات والتقنيات التي تشكل مستقبل تطوير الويب.',
      image: 'https://public.readdy.ai/ai/img_res/d80bf3823fc08b95f0f25b1006ce8a8d.jpg',
      category: 'التكنولوجيا',
      readTime: '5 دقائق',
      date: '1 أبريل 2025'
    },
    {
      id: 2,
      title: 'العيش البسيط: الأقل هو الأكثر',
      excerpt: 'كيف يمكن أن يؤدي تبني البساطة إلى نمط حياة أكثر إشباعًا وخاليًا من التوتر.',
      image: 'https://public.readdy.ai/ai/img_res/e42001b254ec39348aa2e749e73505a0.jpg',
      category: 'نمط الحياة',
      readTime: '4 دقائق',
      date: '28 مارس 2025'
    },
    {
      id: 3,
      title: 'Hidden Gems: Unexplored Destinations',
      excerpt: 'Discover these off-the-beaten-path locations that offer authentic travel experiences.',
      image: 'https://public.readdy.ai/ai/img_res/24ab1264050c5679ceda97683346913c.jpg',
      category: 'السفر',
      readTime: '7 min',
      date: 'March 25, 2025'
    },
    {
      id: 4,
      title: 'Plant-Based Cooking: A Beginner\'s Guide',
      excerpt: 'Simple and delicious plant-based recipes that anyone can prepare at home.',
      image: 'https://public.readdy.ai/ai/img_res/de399cdb4e8e6af640e42a449276db59.jpg',
      category: 'الطعام',
      readTime: '6 min',
      date: 'March 22, 2025'
    },
    {
      id: 5,
      title: 'AI Revolution: How Machine Learning is Changing Industries',
      excerpt: 'An in-depth look at how artificial intelligence is transforming various sectors.',
      image: 'https://public.readdy.ai/ai/img_res/937042b6a1586e8b6d69313ce067afc1.jpg',
      category: 'التكنولوجيا',
      readTime: '8 min',
      date: 'March 19, 2025'
    },
    {
      id: 6,
      title: 'Digital Detox: Reconnecting with Reality',
      excerpt: 'Strategies for reducing screen time and improving your mental wellbeing.',
      image: 'https://public.readdy.ai/ai/img_res/5af81cf9bbdd8d9a30a5ad8e286a5122.jpg',
      category: 'نمط الحياة',
      readTime: '5 min',
      date: 'March 16, 2025'
    }
  ];
  
  const videos = [
    {
      id: 1,
      title: 'أدوات تطوير الويب الأساسية لعام 2025',
      thumbnail: 'https://public.readdy.ai/ai/img_res/6884fa3b072cd58de5d3ec6f34ba9bd8.jpg',
      embedId: 'dQw4w9WgXcQ'
    },
    {
      id: 2,
      title: 'Mindfulness Practices for Daily Life',
      thumbnail: 'https://public.readdy.ai/ai/img_res/65e1c069baa04ef78f558143611283bd.jpg',
      embedId: 'inpok4MKVLM'
    },
    {
      id: 3,
      title: 'Travel Photography Tips & Techniques',
      thumbnail: 'https://public.readdy.ai/ai/img_res/cbfee715927cee0244212fb78abf0369.jpg',
      embedId: 'L_tqK4eqelA'
    }
  ];
  
  const recentPosts = posts.slice(0, 3);
  
  const filteredPosts = activeCategory === 'الكل' 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-[var(--font-noto-kufi)]" dir="rtl">
      {/* Header */}
      <header className="fixed w-full bg-white bg-opacity-95 shadow-sm z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-[#0088cc] hover:text-[#006699] transition-colors duration-300">
            <span className="inline-block transform hover:scale-105 transition-transform duration-300">مدونة<span className="text-gray-800">واعية</span></span>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav>
              <ul className="flex space-x-8">
                {['الرئيسية', 'المقالات', 'البرامج المرئية', 'من نحن'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className="text-gray-700 hover:text-[#0088cc] transition-colors duration-300 relative group cursor-pointer"
                    >
                      {item}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0088cc] transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            
            <button className="text-gray-700 hover:text-[#0088cc] transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap">
              <i className="fas fa-search text-lg"></i>
            </button>
          </div>
          
          <button 
            className="md:hidden text-gray-700 hover:text-[#0088cc] transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 animate-fadeDown">
            <nav>
              <ul className="space-y-4">
                {['الرئيسية', 'المقالات', 'البرامج المرئية', 'من نحن'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className="block text-gray-700 hover:text-[#0088cc] transition-colors duration-300 py-2 cursor-pointer"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <button className="flex items-center text-gray-700 hover:text-[#0088cc] transition-colors duration-300 py-2 cursor-pointer !rounded-button whitespace-nowrap">
                <i className="fas fa-search ml-2"></i> بحث
              </button>
            </div>
          </div>
        )}
      </header>
      
      {/* Hero Section */}
      <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0088cc]/10 to-transparent z-0"></div>
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: 'url("https://public.readdy.ai/ai/img_res/7685c93f06a316ff578a1da9483b868a.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-on-scroll opacity-0">
              <span className="text-gray-800">رؤى لحياة </span>
              <span className="text-[#0088cc]">رقمية واعية</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-on-scroll opacity-0" style={{animationDelay: '0.2s'}}>
              استكشاف التكنولوجيا ونمط الحياة والعافية من خلال عدسة مدروسة. اكتشف الأفكار التي تلهم اتصالات ذات معنى في عالمنا الرقمي.
            </p>
            <div className="animate-on-scroll opacity-0" style={{animationDelay: '0.4s'}}>
              <a 
                href="#blog" 
                className="inline-block bg-[#0088cc] text-white px-8 py-3 rounded-lg hover:bg-[#006699] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-medium cursor-pointer !rounded-button whitespace-nowrap"
              >
                استكشف أحدث المقالات
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>
      
      {/* Featured Posts Slider */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 animate-on-scroll opacity-0">
              <span className="text-[#0088cc]">قصص</span> مميزة
            </h2>
            <a href="#blog" className="text-[#0088cc] hover:text-[#006699] font-medium flex items-center group animate-on-scroll opacity-0 cursor-pointer">
              عرض الكل
              <i className="fas fa-arrow-left mr-2 transform group-hover:-translate-x-1 transition-transform duration-300"></i>
            </a>
          </div>
          
          <div className="animate-on-scroll opacity-0">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={3}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                }
              }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
            >
              {posts.map((post) => (
                <SwiperSlide key={post.id}>
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute top-4 right-4 bg-[#0088cc] text-white text-xs font-medium px-2 py-1 rounded">
                        {post.category}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold mb-3 text-gray-800 hover:text-[#0088cc] transition-colors duration-300">
                        <a href="#" className="cursor-pointer">{post.title}</a>
                      </h3>
                      <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <span>{post.date}</span>
                        <span>{post.readTime} قراءة</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      
      {/* Main Blog Section */}
      <section id="blog" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Main Content */}
            <div className="md:w-2/3">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 animate-on-scroll opacity-0">
                  <span className="text-[#0088cc]">مقالات</span> حديثة
                </h2>
                
                {/* Categories */}
                <div className="flex flex-wrap gap-2 mb-8 animate-on-scroll opacity-0" style={{animationDelay: '0.2s'}}>
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer !rounded-button whitespace-nowrap ${
                        activeCategory === category
                          ? 'bg-[#0088cc] text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                
                {/* Blog Posts Grid */}
                <div className="grid grid-cols-3 md:grid-cols-3 gap-8">
                  {filteredPosts.map((post, index) => (
                    <div 
                      key={post.id} 
                      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 animate-on-scroll opacity-0 transform hover:-translate-y-1"
                      style={{animationDelay: `${0.1 * (index + 1)}s`}}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute top-4 right-4 bg-[#0088cc] text-white text-xs font-medium px-2 py-1 rounded">
                          {post.category}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-gray-800 hover:text-[#0088cc] transition-colors duration-300">
                          <a href="#" className="cursor-pointer">{post.title}</a>
                        </h3>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <div className="flex justify-between items-center text-sm text-gray-500">
                          <span>{post.date}</span>
                          <span>{post.readTime} read</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Load More Button */}
                <div className="mt-10 text-center animate-on-scroll opacity-0">
                  <button className="bg-white border border-[#0088cc] text-[#0088cc] hover:bg-[#0088cc] hover:text-white transition-colors duration-300 px-6 py-3 rounded-lg font-medium cursor-pointer !rounded-button whitespace-nowrap">
                    تحميل المزيد من المقالات
                  </button>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="md:w-1/3">
              <div className="sticky top-24">
                {/* About Blog */}
                <div className="bg-white rounded-xl p-6 shadow-sm mb-8 animate-on-scroll opacity-0">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">عن المدونة</h3>
                  <p className="text-gray-600 mb-4">
                    تستكشف مدونة واعية تقاطع التكنولوجيا ونمط الحياة والنمو الشخصي. نشارك رؤى لمساعدتك في التنقل في العالم الرقمي بوعي.
                  </p>
                  <div className="flex space-x-3">
                    {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                      <a 
                        key={social} 
                        href="#" 
                        className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#0088cc] hover:text-white transition-colors duration-300 cursor-pointer"
                      >
                        <i className={`fab fa-${social}`}></i>
                      </a>
                    ))}
                  </div>
                </div>
                
                {/* Categories */}
                <div className="bg-white rounded-xl p-6 shadow-sm mb-8 animate-on-scroll opacity-0" style={{animationDelay: '0.2s'}}>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">التصنيفات</h3>
                  <ul className="space-y-3">
                    {categories.filter(cat => cat !== 'الكل').map((category) => (
                      <li key={category} className="flex justify-between items-center">
                        <a 
                          href="#" 
                          className="text-gray-700 hover:text-[#0088cc] transition-colors duration-300 cursor-pointer"
                          onClick={() => setActiveCategory(category)}
                        >
                          {category}
                        </a>
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                          {posts.filter(post => post.category === category).length}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Recent Posts */}
                <div className="bg-white rounded-xl p-6 shadow-sm mb-8 animate-on-scroll opacity-0" style={{animationDelay: '0.3s'}}>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">مقالات حديثة</h3>
                  <div className="space-y-4">
                    {recentPosts.map((post) => (
                      <div key={post.id} className="flex space-x-3">
                        <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800 hover:text-[#0088cc] transition-colors duration-300 line-clamp-2">
                            <a href="#" className="cursor-pointer">{post.title}</a>
                          </h4>
                          <span className="text-sm text-gray-500">{post.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Newsletter */}
                <div className="bg-gradient-to-r from-[#0088cc] to-[#00a3cc] rounded-xl p-6 text-white shadow-sm animate-on-scroll opacity-0" style={{animationDelay: '0.4s'}}>
                  <h3 className="text-xl font-bold mb-3">اشترك في النشرة البريدية</h3>
                  <p className="mb-4 opacity-90">احصل على أحدث المقالات والرؤى مباشرة إلى بريدك الإلكتروني.</p>
                  <form className="space-y-3">
                    <input 
                      type="email" 
                      placeholder="عنوان بريدك الإلكتروني" 
                      className="w-full px-4 py-3 rounded-lg text-gray-800 border-none focus:ring-2 focus:ring-white"
                    />
                    <button 
                      type="submit" 
                      className="w-full bg-white text-[#0088cc] font-medium px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap"
                    >
                      اشترك الآن
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Video Content Section */}
      <section id="videos" className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10 animate-on-scroll opacity-0">
            <span className="text-[#0088cc]">فيديوهات</span> مميزة
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div 
                key={video.id} 
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 animate-on-scroll opacity-0 transform hover:-translate-y-1"
                style={{animationDelay: `${0.1 * (index + 1)}s`}}
              >
                <div className="relative aspect-video overflow-hidden group">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a 
                      href={`https://www.youtube.com/watch?v=${video.embedId}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-16 h-16 rounded-full bg-white bg-opacity-90 flex items-center justify-center text-[#0088cc] transform hover:scale-110 transition-transform duration-300 cursor-pointer"
                    >
                      <i className="fas fa-play text-xl"></i>
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 hover:text-[#0088cc] transition-colors duration-300">
                    <a 
                      href={`https://www.youtube.com/watch?v=${video.embedId}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="cursor-pointer"
                    >
                      {video.title}
                    </a>
                  </h3>
                  <div className="flex justify-between items-center">
                    <button 
                      className="text-[#0088cc] hover:text-[#006699] font-medium flex items-center group cursor-pointer !rounded-button whitespace-nowrap"
                      onClick={() => {
                        window.open(`https://www.youtube.com/watch?v=${video.embedId}`, '_blank');
                      }}
                    >
                      Watch Now 
                      <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform duration-300"></i>
                    </button>
                    <span className="text-gray-500 text-sm">
                      <i className="far fa-clock mr-1"></i> 12:45
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Embedded Video Section */}
          <div className="mt-16 animate-on-scroll opacity-0">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg p-6">
              <h3 className="text-xl font-bold mb-6 text-gray-800">أحدث فيديو</h3>
              <div className="aspect-video w-full">
                <iframe 
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-gray-800 mb-2">The Future of Web Development in 2025</h4>
                <p className="text-gray-600">
                  In this comprehensive video, we explore the emerging trends and technologies that are shaping the future of web development in 2025. From AI-powered development tools to new frameworks and design paradigms, discover what skills you need to stay ahead in this rapidly evolving field.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-on-scroll opacity-0">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                عن <span className="text-[#0088cc]">مدونة واعية</span>
              </h2>
              <p className="text-xl text-gray-600">استكشاف التكنولوجيا ونمط الحياة من خلال عدسة مدروسة</p>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="md:flex">
                <div className="md:w-1/2 p-8 md:p-10 animate-on-scroll opacity-0">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">مهمتنا</h3>
                  <p className="text-gray-600 mb-6">
                    في مدونة واعية، نؤمن بقوة المحتوى المدروس الذي يساعد القراء على التنقل في العالم الرقمي بقصد وهدف. مهمتنا هي تقديم مقالات وموارد ثاقبة تلهم اتصالات ذات معنى في عالم رقمي متزايد.
                  </p>
                  <p className="text-gray-600 mb-6">
                    تأسست في عام 2023، نمت من مدونة شخصية صغيرة إلى مجتمع من الكتاب والقراء المتحمسين لاستخدام التكنولوجيا الواعية والعيش المتعمد والعافية الرقمية.
                  </p>
                  <div className="flex space-x-4 mt-8">
                    {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                      <a 
                        key={social} 
                        href="#" 
                        className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#0088cc] hover:text-white transition-colors duration-300 cursor-pointer"
                      >
                        <i className={`fab fa-${social}`}></i>
                      </a>
                    ))}
                  </div>
                </div>
                
                <div className="md:w-1/2 p-8 md:p-10 bg-gray-50 animate-on-scroll opacity-0" style={{animationDelay: '0.2s'}}>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">خبراتنا</h3>
                  
                  <div className="space-y-4">
                    {[
                      { name: 'التكنولوجيا', value: 90 },
                      { name: 'نمط الحياة', value: 85 },
                      { name: 'العافية الرقمية', value: 95 },
                      { name: 'إنشاء المحتوى', value: 80 }
                    ].map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-700 font-medium">{skill.name}</span>
                          <span className="text-gray-500 text-sm">{skill.value}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-[#0088cc] h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.value}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="font-bold text-gray-800 mb-2">إحصائيات المدونة</h4>
                    <div className="h-64" ref={statsChartRef}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16 text-center animate-on-scroll opacity-0">
              <h3 className="text-xl font-bold text-gray-800 mb-6">تواصل معنا</h3>
              <a 
                href="mailto:contact@mindfullblog.com" 
                className="inline-block bg-[#0088cc] text-white px-8 py-3 rounded-lg hover:bg-[#006699] transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 font-medium cursor-pointer !rounded-button whitespace-nowrap"
              >
                <i className="far fa-envelope ml-2"></i> تواصل معنا
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 md:py-20 bg-[#0088cc] relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url("https://public.readdy.ai/ai/img_res/6363f35ddd15e3b4dcdf7f0643367197.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 animate-on-scroll opacity-0">
              انضم إلى نشرتنا البريدية
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-8 animate-on-scroll opacity-0" style={{animationDelay: '0.2s'}}>
              ابق على اطلاع بأحدث مقالاتنا وفيديوهاتنا ورؤانا مباشرة إلى بريدك الإلكتروني.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto animate-on-scroll opacity-0" style={{animationDelay: '0.3s'}}>
              <input 
                type="email" 
                placeholder="عنوان بريدك الإلكتروني" 
                className="flex-grow px-4 py-3 rounded-lg text-gray-800 border-none focus:ring-2 focus:ring-white"
              />
              <button 
                type="submit" 
                className="bg-white text-[#0088cc] font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap cursor-pointer !rounded-button"
              >
                اشتراك
              </button>
            </form>
            <p className="text-sm opacity-75 mt-4 animate-on-scroll opacity-0" style={{animationDelay: '0.4s'}}>
              نحترم خصوصيتك. يمكنك إلغاء الاشتراك في أي وقت.
            </p>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4">مدونة واعية</h3>
              <p className="text-gray-400 mb-6">
                استكشاف التكنولوجيا ونمط الحياة والعافية من خلال عدسة مدروسة. اكتشف الأفكار التي تلهم اتصالات ذات معنى في عالمنا الرقمي.
              </p>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                  <a 
                    key={social} 
                    href="#" 
                    className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#0088cc] hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    <i className={`fab fa-${social}`}></i>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
              <ul className="space-y-2">
                {[
                  { name: 'الرئيسية', url: '#home' },
                  { name: 'المقالات', url: '#blog' },
                  { name: 'البرامج المرئية', url: '#videos' },
                  { name: 'من نحن', url: '#about' },
                  { name: 'اتصل بنا', url: 'mailto:contact@mindfullblog.com' }
                ].map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.url} 
                      className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">التصنيفات</h3>
              <ul className="space-y-2">
                {categories.filter(cat => cat !== 'الكل').map((category) => (
                  <li key={category}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                      onClick={() => {
                        setActiveCategory(category);
                        document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
            <div className="flex justify-center space-x-6 mb-4">
              <i className="fab fa-cc-visa text-2xl"></i>
              <i className="fab fa-cc-mastercard text-2xl"></i>
              <i className="fab fa-cc-paypal text-2xl"></i>
              <i className="fab fa-cc-apple-pay text-2xl"></i>
            </div>
            <p>© {new Date().getFullYear()} مدونة واعية. جميع الحقوق محفوظة.</p>
            <div className="mt-2 flex justify-center space-x-4">
              <a href="#" className="hover:text-gray-300 transition-colors duration-300 cursor-pointer">سياسة الخصوصية</a>
              <span>|</span>
              <a href="#" className="hover:text-gray-300 transition-colors duration-300 cursor-pointer">شروط الخدمة</a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Back to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-[#0088cc] text-white shadow-lg flex items-center justify-center hover:bg-[#006699] transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
      
      {/* CSS Animations */}
      <style jsx>{`
      @import url('https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@400;500;700&display=swap');
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .animate-fadeDown {
          animation: fadeDown 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

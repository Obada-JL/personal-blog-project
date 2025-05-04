"use client"
import { useState } from 'react';

export default function BlogPost({ params }) {
  const [isSubscribed, setIsSubscribed] = useState(false);
  return (
<div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-[#0092d2] cursor-pointer">مدونة اليقظة</a>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-600 hover:text-[#0092d2] cursor-poإيما طومسون
inter">الرئيسية</a>
            <a href="/blog" className="text-gray-600 hover:text-[#0092d2] font-medium cursor-pointer">المدونة</a>
            <a href="/videos" className="text-gray-600 hover:text-[#0092d2] cursor-pointer">الفيديوهات</a>
            <a href="/about" className="text-gray-600 hover:text-[#0092d2] cursor-pointer">من نحن</a>
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
            <span className="bg-[#0092d2] text-white px-3 py-1 rounded-full text-sm font-medium !rounded-button whitespace-nowrap">نمط الحياة</span>
            <span className="ml-4 text-gray-500 text-sm">٣ أبريل ٢٠٢٥</span>
            <span className="ml-4 text-gray-500 text-sm">٨ دقائق قراءة</span>
          </div>

          {/* Blog Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">العيش البسيط: الأقل هو الأكثر</h1>
          
          {/* Author */}
          <div className="flex items-center mb-8">
            <img 
              src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
              alt="المؤلف" 
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="ml-4">
              <p className="font-medium text-gray-800">إيما طومسون</p>
              <p className="text-gray-500 text-sm">مدربة اليقظة والكاتبة</p>
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
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="غابة خضراء" 
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Blog Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              في عالمنا المعقد والمتسارع، تقدم فلسفة البساطة بديلاً منعشاً. تبني البساطة ليس مجرد تخليص مساحتك المادية من الفوضى - إنه نهج واعٍ للعيش يمكن أن يغير منظرك العقلي ورفاهيتك العامة.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">ما هو العيش البسيط؟</h2>
            <p className="text-gray-700 mb-6">
              في جوهره، العيش البسيط هو عن القصد. إنه ممارسة تحديد ما يضيف قيمة حقيقية لحياتك وإزالة كل شيء آخر. هذا لا يعني العيش في غرفة بيضاء فارغة مع كرسي واحد - بل يعني إحاطة نفسك فقط بأشياء تخدم غرضاً أو تجلب فرحاً حقيقياً.
            </p>
            
            <div className="bg-gray-100 p-6 rounded-lg my-8">
              <blockquote className="text-xl italic text-gray-700 border-l-4 border-[#0092d2] pl-4">
                "الهدف من البساطة ليس امتلاك أقل، بل إفساح المجال للمزيد: المزيد من الوقت، المزيد من السلام، المزيد من الإبداع، المزيد من التجارب، المزيد من المساهمة، المزيد من الرضا، المزيد من الحرية."
              </blockquote>
              <p className="text-right mt-2 text-gray-600">— جوشوا بيكر</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">فوائد العيش البسيط</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">١. تقليل التوتر والقلق</h3>
              <p className="text-gray-700">
                أظهرت الأبحاث باستمرار أن البيئات المزدحمة تساهم في زيادة مستويات التوتر. من خلال تبسيط محيطك، تخلق مساحة تسمح لعقلك بالراحة والتعافي من التحفيز المستمر للحياة الحديثة.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">٢. زيادة التركيز والإنتاجية</h3>
              <p className="text-gray-700">
                مع عدد أقل من المشتتات التي تتنافس على انتباهك، ستجد أنه من الأسهل التركيز على المهام والمشاريع ذات المعنى. تساعد البساطة في إزالة الفوضى الجسدية والعقلية، مما يخلق مساحة للعمل العميق والتفكير الإبداعي.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">٣. الحرية المالية</h3>
              <p className="text-gray-700">
                من خلال أن تصبح أكثر قصداً في مشترياتك، تنفق بشكل طبيعي أقل على الأشياء غير الضرورية. يمكن أن يؤدي هذا النهج الواعي للاستهلاك إلى وفورات كبيرة، وتقليل الديون، ومرونة مالية أكبر.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">٤. التأثير البيئي</h3>
              <p className="text-gray-700">
                استهلاك أقل يعني إنتاج نفايات أقل. تتوافق البساطة بشكل جميل مع ممارسات العيش المستدام، مما يقلل من بصمتك الكربونية ويساهم في كوكب أكثر صحة.
              </p>
            </div>

            {/* Image in content */}
            <div className="my-10 rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="غروب الشمس في الطبيعة" 
                className="w-full h-auto object-cover"
              />
              <p className="text-sm text-gray-500 mt-2 italic">العثور على السلام في بيئة منظمة يسمح بممارسات اليقظة الأعمق.</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">خطوات عملية لتبني البساطة</h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">ابدأ صغيراً</h3>
              <p className="text-gray-700">
                ابدأ بدرج واحد أو خزانة واحدة بدلاً من محاولة إصلاح منزلك بالكامل دفعة واحدة. الانتصارات الصغيرة تبني الزخم والثقة في العملية.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">قاعدة الداخل والخارج</h3>
              <p className="text-gray-700">
                لكل عنصر جديد تجلبه إلى منزلك، التزم بإزالة شيء آخر. تساعد هذه الممارسة البسيطة في الحفاظ على التوازن وتمنع التراكم.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">البساطة الرقمية</h3>
              <p className="text-gray-700">
                لا تنس مساحاتك الرقمية. ألغِ الاشتراك في قوائم البريد الإلكتروني غير الضرورية، ونظم ملفاتك، وكن مقصوداً في استهلاك وسائل التواصل الاجتماعي ووقت الشاشة.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">قاعدة ٩٠/٩٠</h3>
              <p className="text-gray-700">
                عند تقييم العناصر، اسأل نفسك: "هل استخدمت هذا في الـ ٩٠ يوماً الماضية؟ هل سأستخدمه في الـ ٩٠ يوماً القادمة؟" إذا كانت الإجابة على كلا السؤالين لا، فقد حان الوقت للتخلي عنه.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">البساطة تتجاوز الممتلكات</h2>
            <p className="text-gray-700 mb-6">
              تمتد البساطة الحقيقية إلى ما وراء ممتلكاتك المادية. فكر في كيفية تطبيق مبادئ البساطة على:
            </p>

            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li className="mb-2"><strong>جدولك:</strong> هل تملأ تقويمك بأنشطة مهمة حقاً، أم أنك تفرط في الالتزام؟</li>
              <li className="mb-2"><strong>علاقاتك:</strong> هل تعزز الروابط التي تثري حياتك، أم تحافظ على العلاقات بدافع الالتزام؟</li>
              <li className="mb-2"><strong>استهلاكك الرقمي:</strong> هل تناولك للوسائط مقصود، أم أنك تتصفح بلا وعي؟</li>
              <li className="mb-2"><strong>عملك:</strong> هل تركز على المشاريع المؤثرة، أم أنك توزع نفسك بشكل مفرط؟</li>
            </ul>

            <p className="text-gray-700 mb-6">
              من خلال تطبيق مبادئ البساطة بشكل شامل، تخلق مساحة لما يهم حقاً - التواصل، الإبداع، الراحة، والهدف.
            </p>

            {/* Conclusion */}
            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">تبني الرحلة</h2>
            <p className="text-gray-700 mb-6">
              البساطة ليست وجهة بل رحلة مستمرة من العيش المقصود. ستكون هناك تحديات وعقبات على طول الطريق، لكن الفوائد - تقليل التوتر، زيادة التركيز، الحرية المالية، والاستدامة البيئية - تجعلها تستحق الجهد.
            </p>
            <p className="text-gray-700 mb-6">
              تذكر أن رحلتك في البساطة فريدة لك. لا توجد صيغة مثالية أو هدف نهائي - فقط الممارسة المستمرة لإفساح المجال لما يهمك أكثر.
            </p>
            <p className="text-gray-700 mb-6">
              بينما تواصل في هذا المسار، قد تجد أن الأقل هو حقاً أكثر - المزيد من السلام، المزيد من الهدف، والمزيد من الفرح في اللحظات اليومية من حياتك.
            </p>
          </div>

          {/* Tags */}
          <div className="mt-10 pt-6 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm !rounded-button whitespace-nowrap cursor-pointer hover:bg-gray-200">البساطة</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm !rounded-button whitespace-nowrap cursor-pointer hover:bg-gray-200">العيش الواعي</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm !rounded-button whitespace-nowrap cursor-pointer hover:bg-gray-200">التنظيم</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm !rounded-button whitespace-nowrap cursor-pointer hover:bg-gray-200">الرفاهية</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm !rounded-button whitespace-nowrap cursor-pointer hover:bg-gray-200">العيش المقصود</span>
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-10 bg-gray-50 p-6 rounded-xl border border-gray-100">
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <img 
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                alt="المؤلف" 
                className="w-20 h-20 rounded-full object-cover mb-4 md:mb-0"
              />
              <div className="md:ml-6">
                <h3 className="text-xl font-bold text-gray-800">إيما طومسون</h3>
                <p className="text-gray-600 mb-3">مدربة اليقظة والكاتبة</p>
                <p className="text-gray-700">
                  إيما مدربة يقظة معتمدة وكاتبة شغوفة بمساعدة الآخرين في خلق مساحة لما يهم حقاً. مع خلفية في علم النفس والدراسات البيئية، تجلب منظوراً شاملاً للعيش البسيط.
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
            <h2 className="text-3xl font-bold text-white mb-4">انضم إلى مجتمعنا الواعي</h2>
            <p className="text-white text-lg mb-8">
              احصل على رؤى أسبوعية حول العيش الواعي، ونصائح الرفاهية، ومحتوى حصري يتم إرساله مباشرة إلى بريدك الإلكتروني.
            </p>
            {!isSubscribed ? (
              <form className="flex flex-col md:flex-row gap-3 max-w-xl mx-auto" onSubmit={(e) => {
                e.preventDefault();
                setIsSubscribed(true);
              }}>
                <input
                  type="email"
                  placeholder="عنوان بريدك الإلكتروني"
                  className="flex-grow px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-white text-gray-800"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-[#0092d2] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors !rounded-button whitespace-nowrap cursor-pointer"
                >
                  اشتراك
                </button>
              </form>
            ) : (
              <div className="bg-white/20 rounded-lg p-6 max-w-xl mx-auto">
                <i className="fas fa-check-circle text-white text-4xl mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-2">شكراً على اشتراكك!</h3>
                <p className="text-white">ستتلقى نشرتنا الإخبارية التالية في بريدك الإلكتروني قريباً.</p>
              </div>
            )}
            <p className="text-white/80 text-sm mt-4">
              نحن نحترم خصوصيتك. يمكنك إلغاء الاشتراك في أي وقت.
            </p>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">قد يعجبك أيضاً</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Related Post 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="التخلص من السموم الرقمية" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <span className="bg-[#0092d2]/10 text-[#0092d2] px-3 py-1 rounded-full text-sm font-medium !rounded-button whitespace-nowrap">التكنولوجيا</span>
                <h3 className="text-xl font-bold text-gray-800 mt-3 mb-2">التخلص من السموم الرقمية: استعادة انتباهك</h3>
                <p className="text-gray-600 mb-4">استراتيجيات عملية للاستخدام الواعي للتكنولوجيا في عالم متصل دائماً.</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>٢٨ مارس ٢٠٢٥</span>
                  <span>٦ دقائق قراءة</span>
                </div>
              </div>
            </div>
            
            {/* Related Post 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="روتين الصباح" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <span className="bg-[#0092d2]/10 text-[#0092d2] px-3 py-1 rounded-full text-sm font-medium !rounded-button whitespace-nowrap">الرفاهية</span>
                <h3 className="text-xl font-bold text-gray-800 mt-3 mb-2">قوة روتين الصباح الواعي</h3>
                <p className="text-gray-600 mb-4">كيف يمكن للساعة الأولى من يومك أن تحول رفاهيتك العقلية وإنتاجيتك.</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>٢٠ مارس ٢٠٢٥</span>
                  <span>٥ دقائق قراءة</span>
                </div>
              </div>
            </div>
            
            {/* Related Post 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="خزانة ملابس مستدامة" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <span className="bg-[#0092d2]/10 text-[#0092d2] px-3 py-1 rounded-full text-sm font-medium !rounded-button whitespace-nowrap">نمط الحياة</span>
                <h3 className="text-xl font-bold text-gray-800 mt-3 mb-2">بناء خزانة ملابس مستدامة</h3>
                <p className="text-gray-600 mb-4">تبسيط خزانة ملابسك مع تقليل التأثير البيئي باستخدام هذه الأساسيات الخالدة.</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>١٥ مارس ٢٠٢٥</span>
                  <span>٧ دقائق قراءة</span>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-10">النقاش (٣)</h2>
            
            {/* Comment Form */}
            <div className="mb-12">
              <div className="flex items-start mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                  alt="صورة المستخدم" 
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div className="flex-grow">
                  <textarea 
                    className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0092d2] focus:border-transparent"
                    placeholder="شارك أفكارك..."
                    rows={4}
                  ></textarea>
                  <button className="mt-3 bg-[#0092d2] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#007bb8] transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                    نشر التعليق
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
                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                    alt="صورة المعلق" 
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div className="flex-grow">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-gray-800">ديفيد تشن</h4>
                      <span className="text-sm text-gray-500">قبل يومين</span>
                    </div>
                    <p className="text-gray-700 mb-3">
                      جاء هذا المقال في الوقت المناسب تماماً بالنسبة لي. كنت أشعر بالإرهاق من كل "الأشياء" في حياتي، سواء المادية أو الرقمية. قاعدة ٩٠/٩٠ شيء سأبدأ في تطبيقه بالتأكيد من اليوم. شكراً على النصيحة العملية!
                    </p>
                    <div className="flex items-center space-x-4 text-sm">
                      <button className="text-gray-500 hover:text-[#0092d2] flex items-center cursor-pointer">
                        <i className="far fa-thumbs-up mr-1"></i> ١٢
                      </button>
                      <button className="text-gray-500 hover:text-[#0092d2] cursor-pointer">رد</button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Comment 2 */}
              <div className="border-b border-gray-100 pb-8">
                <div className="flex items-start">
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                    alt="صورة المعلق" 
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div className="flex-grow">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-gray-800">سارة جونسون</h4>
                      <span className="text-sm text-gray-500">قبل ٣ أيام</span>
                    </div>
                    <p className="text-gray-700 mb-3">
                      كنت أمارس البساطة منذ حوالي عام، وقد غيرت حياتي حقاً. نصيحة أود إضافتها هي أخذ صور قبل وبعد للمساحات التي تقوم بتنظيمها - إنه محفز بشكل لا يصدق أن ترى الفرق البصري!
                    </p>
                    <div className="flex items-center space-x-4 text-sm">
                      <button className="text-gray-500 hover:text-[#0092d2] flex items-center cursor-pointer">
                        <i className="far fa-thumbs-up mr-1"></i> ٨
                      </button>
                      <button className="text-gray-500 hover:text-[#0092d2] cursor-pointer">رد</button>
                    </div>
                    
                    {/* Reply to Comment 2 */}
                    <div className="mt-6 ml-6 pl-6 border-l-2 border-gray-100">
                      <div className="flex items-start">
                        <img 
                          src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                          alt="صورة المؤلف" 
                          className="w-8 h-8 rounded-full mr-3"
                        />
                        <div className="flex-grow">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-bold text-gray-800">إيما طومسون <span className="text-[#0092d2] text-sm ml-2">المؤلف</span></h4>
                            <span className="text-sm text-gray-500">قبل يومين</span>
                          </div>
                          <p className="text-gray-700 mb-3">
                            هذه اقتراح ممتاز، سارة! يمكن أن يكون توثيق العملية بصرياً محفزاً وتذكيراً رائعاً بمدى تقدمك. سأضيف ذلك بالتأكيد إلى مقالي التالي.
                          </p>
                          <div className="flex items-center space-x-4 text-sm">
                            <button className="text-gray-500 hover:text-[#0092d2] flex items-center cursor-pointer">
                              <i className="far fa-thumbs-up mr-1"></i> ٥
                            </button>
                            <button className="text-gray-500 hover:text-[#0092d2] cursor-pointer">رد</button>
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
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                    alt="صورة المعلق" 
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div className="flex-grow">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-gray-800">مايكل توريس</h4>
                      <span className="text-sm text-gray-500">قبل ٤ أيام</span>
                    </div>
                    <p className="text-gray-700 mb-3">
                      أقدر النهج الشمولي للبساطة المقدم هنا. كثيراً ما يعتقد الناس أنها مجرد التخلص من الأشياء، لكن التركيز على القصد في جميع جوانب الحياة هو ما يجعلها تحويلية حقاً. أود أن أرى مقالاً متابعة عن نهج البساطة في الحياة الرقمية تحديداً.
                    </p>
                    <div className="flex items-center space-x-4 text-sm">
                      <button className="text-gray-500 hover:text-[#0092d2] flex items-center cursor-pointer">
                        <i className="far fa-thumbs-up mr-1"></i> ١٥
                      </button>
                      <button className="text-gray-500 hover:text-[#0092d2] cursor-pointer">رد</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <button className="mt-10 text-[#0092d2] font-medium flex items-center mx-auto cursor-pointer">
              تحميل المزيد من التعليقات <i className="fas fa-chevron-down ml-2"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">مدونة اليقظة</h3>
              <p className="text-gray-400 mb-4">
                استكشاف التكنولوجيا، نمط الحياة، والرفاهية من خلال عدسة مدروسة.
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
              <h4 className="text-lg font-semibold mb-4">التصنيفات</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">التكنولوجيا</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">نمط الحياة</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">الرفاهية</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">السفر</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">الطعام</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">من نحن</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">اتصل بنا</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">سياسة الخصوصية</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">شروط الخدمة</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">الإعلان</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">اشترك</h4>
              <p className="text-gray-400 mb-4">
                احصل على أحدث المنشورات مباشرة إلى بريدك الإلكتروني.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="بريدك الإلكتروني"
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
              © ٢٠٢٥ مدونة اليقظة. جميع الحقوق محفوظة.
            </p>
            <div className="mt-4 md:mt-0">
              <img src="https://via.placeholder.com/200x30/2d3748/FFFFFF?text=Payment+Methods" alt="طرق الدفع" className="h-6" />
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
}

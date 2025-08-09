import React from 'react';
import { Link } from 'react-router-dom';

const NewsDetail = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white font-sans text-sm" style={{fontFamily: "'Inter', sans-serif"}}>
      
      {/* Publisher Logo */}
      <div className="flex justify-center items-center w-full max-w-[1140px] mx-auto mt-8 h-[80px] px-4">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/c308d55f0f01eb08e6497b637b6ca912506d33fe?width=2280" 
          alt="Publisher logo"
          className="w-full max-w-[600px] h-[80px] object-contain"
        />
      </div>

      {/* Categories Section - Simplified */}
      <div className="w-full max-w-[1140px] mx-auto mt-6 px-4">
        <div className="flex gap-2 md:gap-4 mb-4 justify-center flex-wrap overflow-x-auto md:overflow-visible pb-2">
          {[
            "https://api.builder.io/api/v1/image/assets/TEMP/f51d99ef73b95d20a147f51eef4742a3c0532f46?width=160",
            "https://api.builder.io/api/v1/image/assets/TEMP/5bcded3e7f622da641f4a21c89f0656eede42f49?width=160",
            "https://api.builder.io/api/v1/image/assets/TEMP/01e73edd7248536a9f4f2059eb25b8a54b8f6779?width=160",
            "https://api.builder.io/api/v1/image/assets/TEMP/b911aa85cd15781e38f0b274d8533845ad0a80ab?width=160",
            "https://api.builder.io/api/v1/image/assets/TEMP/e11da7820a25c5af72efdbf732941088e9131bc9?width=160"
          ].map((src, index) => (
            <div key={index} className="inline-flex p-1 md:p-2 px-2 md:px-3 justify-center items-center rounded-2xl md:rounded-3xl bg-white shadow-sm border border-gray-100 min-w-[80px] md:min-w-[100px] h-6 md:h-8 flex-shrink-0">
              <img src={src} alt={`Category ${index + 1}`} className="w-[50px] md:w-[70px] h-[10px] md:h-[14px]" />
            </div>
          ))}
        </div>

        {/* Live TV Section */}
        <div className="w-full max-w-[1140px] mx-auto h-14 rounded-xl bg-detikblue shadow-sm mt-6 mb-6 flex items-center px-4 gap-6">
          <div className="flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M14.265 12.2775H3.375C2.9625 12.2775 2.625 11.94 2.625 11.5275V4.125C2.625 3.7125 2.9625 3.375 3.375 3.375H14.265C14.6775 3.375 15.015 3.7125 15.015 4.125V11.5275C15.015 11.9475 14.6775 12.2775 14.265 12.2775Z" stroke="white" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10.5448 13.7626L10.2298 12.2776H7.4098L7.0948 13.7626C6.9673 14.3626 6.5173 14.8501 5.9248 15.0151H11.7148C11.1223 14.8426 10.6723 14.3626 10.5448 13.7626Z" stroke="white" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-white text-sm font-semibold">Live TV</span>
            <div className="relative">
              <svg width="6" height="6" viewBox="0 0 6 6" className="absolute -right-2 -top-1">
                <circle cx="3" cy="3" r="2.5" fill="#FF3030" stroke="white" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="w-full max-w-[1140px] mx-auto px-4 mb-6">
        <nav className="flex items-center gap-2 text-sm">
          <Link to="/" className="text-detikblue hover:underline">Home</Link>
          <span className="text-textgray">/</span>
          <span className="text-detikblue">DetikNews</span>
          <span className="text-textgray">/</span>
          <span className="text-textgray">Detail Berita</span>
        </nav>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-[1140px] mx-auto flex flex-col lg:flex-row gap-8 px-4">
        
        {/* Article Content */}
        <article className="flex-1 max-w-[825px]">
          
          {/* Article Header */}
          <div className="mb-6">
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-block px-3 py-1 bg-detikblue text-white text-xs font-semibold rounded-full">
                DetikNews
              </span>
              <div className="flex items-center gap-2 text-textgray-light text-sm">
                <span>14 Mei 2022</span>
                <span>•</span>
                <span>15:30 WIB</span>
              </div>
            </div>
            
            <h1 className="text-darkcolor text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4">
              LINE Today Tutup 6 Juli 2022, Mau Fokus di Fintech
            </h1>
            
            <p className="text-textgray text-lg leading-relaxed mb-6">
              LINE Indonesia mengumumkan akan menutup layanan berita LINE Today pada 6 Juli 2022. Perusahaan akan mengalihkan fokus ke layanan financial technology yang dinilai lebih potensial.
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-3 pb-6 border-b border-gray-200">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">DN</span>
              </div>
              <div>
                <p className="text-darkcolor font-semibold text-sm">DetikNews</p>
                <p className="text-textgray-light text-xs">Wartawan</p>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/0a4b4556ca6f5689dd9c83f8de922a969221bd3a?width=2784"
              alt="LINE Today akan ditutup"
              className="w-full h-[300px] md:h-[400px] lg:h-[450px] object-cover rounded-lg"
            />
            <p className="text-textgray-light text-sm mt-2 italic">
              Ilustrasi aplikasi LINE Today yang akan ditutup pada 6 Juli 2022. (Foto: LINE Indonesia)
            </p>
          </div>

          {/* Social Share Buttons */}
          <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-200">
            <span className="text-darkcolor font-semibold text-sm mr-2">Bagikan:</span>
            <button className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
              <span className="text-xs">f</span>
            </button>
            <button className="w-8 h-8 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
              <span className="text-xs">t</span>
            </button>
            <button className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
              <span className="text-xs">w</span>
            </button>
            <button className="w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
              <span className="text-xs">@</span>
            </button>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            <p className="text-darkcolor text-base leading-relaxed mb-6">
              <strong>Jakarta</strong> - LINE Indonesia resmi mengumumkan penutupan layanan berita LINE Today yang akan berlangsung pada 6 Juli 2022. Keputusan ini diambil sebagai bagian dari strategi perusahaan untuk fokus pada pengembangan layanan financial technology (fintech).
            </p>

            <p className="text-darkcolor text-base leading-relaxed mb-6">
              Menurut keterangan resmi yang diterima detikINET, Selasa (14/5/2022), LINE Indonesia menyatakan bahwa penutupan LINE Today merupakan langkah strategis untuk mengalokasikan sumber daya secara lebih optimal pada layanan yang memiliki potensi pertumbuhan lebih besar.
            </p>

            <p className="text-darkcolor text-base leading-relaxed mb-6">
              "Kami mengucapkan terima kasih kepada seluruh pengguna LINE Today yang telah setia menggunakan layanan kami. Keputusan ini bukanlah hal yang mudah, namun kami perlu fokus pada layanan fintech yang memiliki prospek lebih cerah di masa depan," ungkap spokesperson LINE Indonesia.
            </p>

            <h3 className="text-darkcolor text-xl font-bold mb-4 mt-8">
              Fokus ke Layanan Fintech
            </h3>

            <p className="text-darkcolor text-base leading-relaxed mb-6">
              LINE Indonesia akan mengalihkan fokus penuh pada pengembangan LINE Bank dan layanan pembayaran digital lainnya. Perusahaan melihat potensi besar pada sektor fintech di Indonesia yang terus mengalami pertumbuhan signifikan.
            </p>

            <p className="text-darkcolor text-base leading-relaxed mb-6">
              Pengguna LINE Today masih dapat mengakses layanan hingga tanggal 6 Juli 2022. Setelah itu, seluruh konten dan fitur akan dihentikan secara permanen. LINE menyarankan pengguna untuk mencari alternatif platform berita lainnya.
            </p>

            <h3 className="text-darkcolor text-xl font-bold mb-4 mt-8">
              Dampak bagi Pengguna
            </h3>

            <p className="text-darkcolor text-base leading-relaxed mb-6">
              Penutupan LINE Today tentu memberikan dampak bagi jutaan pengguna yang telah terbiasa mengonsumsi berita melalui platform tersebut. LINE menyediakan periode transisi selama hampir dua bulan untuk memberikan waktu adaptasi bagi pengguna.
            </p>

            <p className="text-darkcolor text-base leading-relaxed mb-8">
              Meski demikian, aplikasi LINE utama tetap akan beroperasi normal dengan seluruh fitur komunikasi yang ada. Penutupan hanya berlaku untuk layanan LINE Today saja.
            </p>
          </div>

          {/* Tags */}
          <div className="border-t border-gray-200 pt-6 mb-8">
            <h4 className="text-darkcolor font-semibold mb-3">Tag:</h4>
            <div className="flex flex-wrap gap-2">
              {['LINE Today', 'Fintech', 'Aplikasi Berita', 'LINE Indonesia', 'Teknologi'].map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-gray-100 text-textgray text-sm rounded-full hover:bg-gray-200 cursor-pointer">
                  #{tag.toLowerCase().replace(' ', '')}
                </span>
              ))}
            </div>
          </div>

          {/* Related Articles */}
          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-darkcolor text-2xl font-bold mb-6">Berita Terkait</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  image: "https://api.builder.io/api/v1/image/assets/TEMP/daa6d393c924e6fdb307cf9356338798bebdc77a?width=534",
                  title: "Aplikasi Berita Lokal Mulai Bermunculan Setelah LINE Today Tutup",
                  excerpt: "Penutupan LINE Today membuka peluang bagi aplikasi berita lokal untuk mengisi kekosongan pasar...",
                  time: "2 jam yang lalu"
                },
                {
                  image: "https://api.builder.io/api/v1/image/assets/TEMP/2726f9666437d51cd4ab114844e7e132e10b6010?width=536",
                  title: "LINE Bank Siap Ekspansi Layanan Fintech di Indonesia",
                  excerpt: "Setelah menutup LINE Today, LINE Indonesia berkomitmen penuh mengembangkan sektor fintech...",
                  time: "4 jam yang lalu"
                }
              ].map((article, index) => (
                <div key={index} className="w-full">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-[150px] rounded-lg object-cover mb-4"
                  />
                  <h4 className="text-darkcolor text-base font-semibold leading-6 mb-2 line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="text-textgray text-sm leading-5 line-clamp-2 mb-2">
                    {article.excerpt}
                  </p>
                  <span className="text-textgray-light text-xs">{article.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Comments Section */}
          <div className="border-t border-gray-200 pt-8 mt-8">
            <h3 className="text-darkcolor text-2xl font-bold mb-6">Komentar (23)</h3>
            
            {/* Comment Form */}
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="text-darkcolor font-semibold mb-4">Tulis Komentar</h4>
              <textarea 
                className="w-full h-24 p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-detikblue focus:border-transparent"
                placeholder="Bagikan pendapat Anda tentang berita ini..."
              ></textarea>
              <div className="flex justify-end mt-3">
                <button className="px-6 py-2 bg-detikblue text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Kirim Komentar
                </button>
              </div>
            </div>

            {/* Sample Comments */}
            <div className="space-y-6">
              {[
                {
                  name: "Ahmad Rizki",
                  time: "2 jam yang lalu",
                  comment: "Sangat disayangkan LINE Today ditutup. Padahal aplikasinya bagus dan interface-nya user friendly."
                },
                {
                  name: "Sari Indah", 
                  time: "3 jam yang lalu",
                  comment: "Fokus ke fintech memang langkah yang tepat sih, mengingat potensi pasar fintech di Indonesia masih besar."
                },
                {
                  name: "Budi Santoso",
                  time: "5 jam yang lalu", 
                  comment: "Semoga dengan fokus ke fintech, LINE bisa memberikan inovasi yang lebih baik untuk layanan keuangan digital."
                }
              ].map((comment, index) => (
                <div key={index} className="flex gap-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold text-sm">{comment.name.charAt(0)}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h5 className="text-darkcolor font-semibold text-sm">{comment.name}</h5>
                      <span className="text-textgray-light text-xs">{comment.time}</span>
                    </div>
                    <p className="text-darkcolor text-sm leading-relaxed">{comment.comment}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <button className="text-textgray-light text-xs hover:text-detikblue">Balas</button>
                      <button className="text-textgray-light text-xs hover:text-red-500">Laporkan</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <button className="px-6 py-2 border border-gray-300 text-textgray rounded-lg hover:bg-gray-50 transition-colors">
                Muat Komentar Lainnya
              </button>
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="w-full lg:w-[350px] lg:max-w-[350px] mt-8 lg:mt-0">
          
          {/* Popular News */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
            <h3 className="text-detikblue text-xl font-bold mb-4">Berita Terpopuler</h3>
            
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num} className="flex gap-3">
                  <div className="text-detikblue text-lg font-bold w-6 flex-shrink-0">
                    #{num}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-darkcolor text-sm font-semibold leading-5 mb-1 line-clamp-3">
                      Beda Versi Ayu Thalia Vs Nicholas Sean di Sidang soal Tidur Bareng
                    </h4>
                    <div className="text-textgray-light text-xs">
                      detikNews • 1 jam yang lalu
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Most Comments */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
            <h3 className="text-detikblue text-xl font-bold mb-4">Komentar Terbanyak</h3>
            
            <div className="space-y-4">
              {[
                { title: "Anggota DPR Geram Ada Usaha Kuliner Nasi Padang Babi di Jakarta", comments: "185 komentar" },
                { title: "Jokowi Naik Mobil Listrik Hyundai, Roy Suryo Sindir Begini", comments: "125 komentar" },
                { title: "Roy Suryo: Sama Sekali Tidak Ada Niat Hina Simbol Negara", comments: "106 komentar" }
              ].map((item, index) => (
                <div key={index} className="flex gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" className="mt-1 flex-shrink-0" fill="none">
                    <path d="M13.0599 10.42H8.27994" stroke="#244B9C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15.5699 13.71H10.2799" stroke="#244B9C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17.93 17.94C21.6 14.27 21.16 8.05002 16.62 4.99002C13.79 3.08002 9.97001 3.14002 7.19001 5.11002C3.35001 7.83002 2.59001 12.87 4.91001 16.51L3.83001 19.19C3.58001 19.8 4.19001 20.41 4.81001 20.17L7.49001 19.09C10.73 21.16 15.09 20.78 17.93 17.94Z" stroke="#244B9C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="18" cy="6" r="3" fill="#FF3030" stroke="white" />
                  </svg>
                  <div className="flex-1">
                    <h4 className="text-darkcolor text-sm font-semibold leading-5 mb-2 line-clamp-3">
                      {item.title}
                    </h4>
                    <div className="text-textgray-light text-xs">
                      {item.comments}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Advertisement */}
          <div className="bg-gray-100 rounded-lg p-6 text-center">
            <div className="w-full h-[200px] bg-gray-300 rounded-lg flex items-center justify-center mb-4">
              <span className="text-gray-500 font-semibold">Advertisement</span>
            </div>
            <p className="text-textgray-light text-xs">Sponsored Content</p>
          </div>

        </aside>
      </div>

      {/* Back to Top */}
      <div className="text-center py-8">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-detikblue text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 15V1M8 1L1 8M8 1L15 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
};

export default NewsDetail;

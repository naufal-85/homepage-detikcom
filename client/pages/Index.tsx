import React from 'react';

const Index = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white font-['Inter'] text-sm">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] md:h-[586px] mt-10 md:mt-20 px-4 md:px-6">
        <div className="relative w-full max-w-[1392px] mx-auto h-[350px] md:h-[550px] rounded-2xl md:rounded-3xl overflow-hidden">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/0a4b4556ca6f5689dd9c83f8de922a969221bd3a?width=2784" 
            alt="Hero news image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/85 rounded-3xl" />
          
          <div className="absolute left-4 md:left-6 top-[80px] md:top-[150px] w-[calc(100%-32px)] md:w-[calc(100%-48px)] max-w-[643px] z-10">
            <div className="text-white font-bold text-sm md:text-base leading-normal mb-1 md:mb-2">
              detikInet
            </div>
            <div className="text-white text-xs md:text-sm font-normal leading-normal mb-3 md:mb-6">
              | 14 Mei 2022
            </div>
            <h1 className="text-white text-lg md:text-2xl font-bold leading-tight md:leading-normal mb-8 md:mb-16 max-w-[586px]">
              LINE Today Tutup 6 Juli 2022, Mau Fokus di Fintech
            </h1>
            <p className="text-white text-sm md:text-base leading-normal mb-2 md:mb-4 max-w-[643px] hidden md:block">
              <span className="font-bold">Jakarta - LINE</span>
              <span className="font-normal"> Today akan resmi ditutup pada 6 Juli 2022. Line Indonesia menyampaikan, langkah ini dilakukan sebagai bentuk....</span>
            </p>
            <div className="text-white text-xs md:text-sm font-normal leading-normal">
              8 menit yang lalu
            </div>
          </div>
          
          {/* Carousel dots */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[117px]">
            <svg width="44" height="8" viewBox="0 0 44 8" fill="none">
              <circle cx="4" cy="4" r="4" fill="white" />
              <circle cx="16" cy="4" r="4" fill="white" fillOpacity="0.3" />
              <circle cx="28" cy="4" r="4" fill="white" fillOpacity="0.3" />
              <circle cx="40" cy="4" r="4" fill="white" fillOpacity="0.3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Publisher Logo */}
      <div className="flex justify-center items-center w-full max-w-[1140px] mx-auto mt-[95px] h-[131px]">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/c308d55f0f01eb08e6497b637b6ca912506d33fe?width=2280" 
          alt="Publisher logo"
          className="w-full h-[131px] object-cover"
        />
      </div>

      {/* Categories Section */}
      <div className="w-full max-w-[1140px] mx-auto mt-10 px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-darkcolor text-xl font-bold">detikcom Categories</h2>
          <div className="flex items-center gap-1">
            <span className="text-detikblue text-sm">See all</span>
            <svg width="14" height="14" viewBox="0 0 14 14" className="transform -rotate-90">
              <path d="M3 5L7 9L11 5" stroke="#244B9C" strokeWidth="1.152" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* First row of categories */}
        <div className="flex gap-4 mb-4 justify-center flex-wrap">
          {[
            "https://api.builder.io/api/v1/image/assets/TEMP/f51d99ef73b95d20a147f51eef4742a3c0532f46?width=160",
            "https://api.builder.io/api/v1/image/assets/TEMP/5bcded3e7f622da641f4a21c89f0656eede42f49?width=160",
            "https://api.builder.io/api/v1/image/assets/TEMP/01e73edd7248536a9f4f2059eb25b8a54b8f6779?width=160",
            "https://api.builder.io/api/v1/image/assets/TEMP/b911aa85cd15781e38f0b274d8533845ad0a80ab?width=160",
            "https://api.builder.io/api/v1/image/assets/TEMP/e11da7820a25c5af72efdbf732941088e9131bc9?width=160",
            "https://api.builder.io/api/v1/image/assets/TEMP/7426a63c32668e6d14a783596177bc6bad1981d1?width=160",
            "https://api.builder.io/api/v1/image/assets/TEMP/ef53d23bc52183c0253ac3c1d7bf0c5d747c93f3?width=160",
            "https://api.builder.io/api/v1/image/assets/TEMP/7e889c679eb5a7a84c43a8bfa79e8d21d9243423?width=160",
            "https://api.builder.io/api/v1/image/assets/TEMP/e129cd518bd23863a4f9a0225e8b70d9cfc0ace1?width=160"
          ].map((src, index) => (
            <div key={index} className="inline-flex p-2 px-3 justify-center items-center rounded-3xl bg-white shadow-sm border border-gray-100 min-w-[100px] h-8">
              <img src={src} alt={`Category ${index + 1}`} className="w-[70px] h-[14px]" />
            </div>
          ))}
        </div>

        {/* Second row of categories */}
        <div className="flex gap-4 mb-6 justify-center flex-wrap">
          {[
            "https://api.builder.io/api/v1/image/assets/TEMP/565a04890aad92fb89711dbb188dc96d72c6be53?width=160",
            "https://api.builder.io/api/v1/image/assets/TEMP/44602b81366075ec10a480a4c49ba0c0b0ace0cb?width=160",
            "https://api.builder.io/api/v1/image/assets/TEMP/673e446708eeadf47833560e41f85e9ae78d47cc?width=166",
            "https://api.builder.io/api/v1/image/assets/TEMP/20294950414f5d532fdfd13d94bb6e4ecd6f33f2?width=160",
            "https://api.builder.io/api/v1/image/assets/TEMP/770698730acd1e68fc0bce79d3fddc99c3125dae?width=160",
            "https://api.builder.io/api/v1/image/assets/TEMP/4c6dadaee629d6acac9bcfcf708cf996679c9a0b?width=160",
            "https://api.builder.io/api/v1/image/assets/TEMP/34b83ac421de116c730980107c5a0762f1689852?width=160",
            "https://api.builder.io/api/v1/image/assets/TEMP/4747451787c7a31ab26eb97a3da290706177a133?width=160"
          ].map((src, index) => (
            <div key={index} className="inline-flex p-2 px-3 justify-center items-center rounded-3xl bg-white shadow-sm border border-gray-100 min-w-[100px] h-8">
              <img src={src} alt={`Category ${index + 1}`} className={index === 2 ? "w-[83px] h-4" : "w-[70px] h-[14px]"} />
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

      {/* Main Content Area */}
      <div className="w-full max-w-[1140px] mx-auto mt-10 flex gap-6 px-4">
        {/* Left Content */}
        <div className="flex-1 max-w-[825px]">
          {/* Featured Article */}
          <div className="relative w-full h-[250px] rounded-lg overflow-hidden mb-10">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/16c08fd2a20844cd827209e693b5497204da5e34?width=1116" 
              alt="Featured article"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
            <div className="absolute left-6 bottom-[59px] max-w-[440px]">
              <div className="flex items-center gap-1 mb-2">
                <span className="text-white text-sm font-bold">DetikNews</span>
                <span className="text-white text-sm">| Mei 14, 2022</span>
              </div>
              <h3 className="text-white text-lg font-bold leading-normal">
                KPK Dianggap Tak Jeli, Samin Tan Lolos dari Jeruji
              </h3>
            </div>
            <div className="absolute left-6 bottom-[18px] text-white text-xs">
              1 minggu yang lalu
            </div>
          </div>

          {/* Latest News */}
          <h2 className="text-darkcolor text-2xl font-bold mb-6">Berita terkini</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {[
              {
                image: "https://api.builder.io/api/v1/image/assets/TEMP/daa6d393c924e6fdb307cf9356338798bebdc77a?width=534",
                title: "Isu Panas Terbaru Seputar Reshuffle 15 Juni",
                excerpt: "Jakarta - Isu reshuffle kabinet 15 Juni 2022 menguat dengan Istana...."
              },
              {
                image: "https://api.builder.io/api/v1/image/assets/TEMP/d3ed17b378023e652f5356d3b433b4251115d65a?width=534",
                title: "Naik Candi Borobudur Nggak Jadi Bayar Rp 750.000...",
                excerpt: "Jakarta - Menteri PUPR Basuki Hadimuljono menyatakan....."
              },
              {
                image: "https://api.builder.io/api/v1/image/assets/TEMP/2726f9666437d51cd4ab114844e7e132e10b6010?width=536",
                title: "Pernyataan Resmi Kahitna Terkait Kasus Narkoba Andrie Bayuajie",
                excerpt: "Jakarta - Menteri PUPR Basuki Hadimuljono menyatakan....."
              },
              {
                image: "https://api.builder.io/api/v1/image/assets/TEMP/9cf858dd677c35711aeaa94f315ebb5a5de6e4d3?width=538",
                title: "7 Fakta Terbaru Gitaris Kahitna Ditangkap Gegara Psikotropika",
                excerpt: "Jakarta - Menteri PUPR Basuki Hadimuljono menyatakan....."
              }
            ].map((article, index) => (
              <div key={index} className="w-full">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-[150px] rounded-lg object-cover mb-4"
                />
                <h3 className="text-darkcolor text-base font-semibold leading-6 mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-textgray text-sm leading-5 line-clamp-2">
                  <span className="font-bold text-darkcolor">Jakarta - </span>
                  {article.excerpt}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-1 mb-10">
            <span className="text-detikblue text-sm">Indeks berita</span>
            <svg width="14" height="14" viewBox="0 0 14 14">
              <path d="M5 11L9 7L5 3" stroke="#244B9C" strokeWidth="1.152" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* News Feed */}
          <h2 className="text-darkcolor text-2xl font-bold mb-6">News Feed</h2>
          
          <div className="space-y-6">
            {[
              {
                image: "https://api.builder.io/api/v1/image/assets/TEMP/2b3ae2b2d4e91f90e91d998b9804664c2bd3816d?width=922",
                source: "DetikOto",
                date: "juni 14, 2022",
                title: "2 Toyota Alphard di garasi Zulkifli Hasan",
                excerpt: "Jakarta - Zulkifli Hasan santer dikabarkan bakal dilantik menjadi Menteri Perdagangan menggantikan Muhammad Lutfi.",
                time: "19 jam yang lalu"
              },
              {
                image: "https://api.builder.io/api/v1/image/assets/TEMP/a426822c38266b5d524d7e965f4d3f4118e03d75?width=534",
                title: "Terhalang Tembok SMKN 69 Jakarta, Sri Jalan Kaki Usai Operasi di RS",
                excerpt: "Jakarta - LINE Today akan resmi ditutup pada 6 Juli 2022. Line Indonesia menyampaikan....",
                time: "19 jam yang lalu"
              },
              {
                image: "https://api.builder.io/api/v1/image/assets/TEMP/9ac59ccd496dc140a9334ad8826e83b468ac5799?width=532",
                title: "Harap Bersabar! Ruas Jl HR Rasuna Said Jaksel Ini Masih Rusak",
                excerpt: "Jakarta - LINE Today akan resmi ditutup pada 6 Juli 2022. Line Indonesia menyampaikan....",
                time: "17 jam yang lalu"
              },
              {
                image: "https://api.builder.io/api/v1/image/assets/TEMP/e5357cabb067297b7e5e725eb654cec7f16e419d?width=532",
                title: "Lebaran Sudah Berlalu, Kabel-kabel Mampang Jaksel Masih belum masuk SJUT",
                excerpt: "Jakarta - LINE Today akan resmi ditutup pada 6 Juli 2022. Line Indonesia menyampaikan....",
                time: "13 jam yang lalu"
              }
            ].map((article, index) => (
              <div key={index}>
                <div className="flex flex-col gap-4">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-[200px] rounded-lg object-cover"
                  />
                  <div className="py-4">
                    {article.source && (
                      <div className="flex items-center gap-1 mb-2">
                        <span className="text-textgray-light text-sm font-bold">{article.source}</span>
                        <span className="text-textgray-light text-sm">| {article.date}</span>
                      </div>
                    )}
                    <h3 className="text-darkcolor text-lg md:text-xl font-bold leading-7 mb-2">
                      {article.title}
                    </h3>
                    <p className="text-textgray text-sm leading-5 mb-2">
                      <span className="font-bold text-darkcolor">Jakarta</span>
                      <span className="text-textgray"> - {article.excerpt}</span>
                    </p>
                    <div className="text-textgray-light text-sm">
                      {article.time}
                    </div>
                  </div>
                </div>
                {index < 3 && <hr className="border-gray-300 my-6" />}
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-full max-w-[558px]">
          {/* Sidebar News */}
          <div className="space-y-4 mb-6">
            <div className="flex gap-6">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/d0e5341ed8ddef68ff7d3ff9726c044b3743aba1?width=340" 
                alt="Sidebar news"
                className="w-[170px] h-[100px] rounded-lg object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <h3 className="text-darkcolor text-lg font-semibold leading-6 mb-3">
                  Andrie Bayuajie Ditangkap, Begini Kata Yovie Widianto
                </h3>
                <p className="text-textgray text-sm leading-5 mb-1">
                  <span className="font-bold text-darkcolor">Jakarta - LINE</span>
                  <span> Today akan resmi ditutup pada 6 Juli 2022. Line Indonesia menyampaikan....</span>
                </p>
                <div className="text-textgray-light text-xs">
                  1 minggu yang lalu
                </div>
              </div>
            </div>
            
            <hr className="border-gray-300" />
            
            <div className="space-y-4">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/494c9cd5772a37d5a732685bc67c8a306951c7f3?width=340" 
                alt="Sidebar featured"
                className="w-full h-[150px] rounded-lg object-cover"
              />
              <div>
                <h3 className="text-darkcolor text-lg font-semibold leading-6 mb-3">
                  Terungkap Gitaris Kahitna Tak Pakai Resep Berkali-kali Beli Psikotropika
                </h3>
                <p className="text-textgray text-sm leading-5 mb-1">
                  <span className="font-bold text-darkcolor">Jakarta - LINE</span>
                  <span> Today akan resmi ditutup pada 6 Juli 2022. Line Indonesia menyampaikan....</span>
                </p>
                <div className="text-textgray-light text-xs">
                  1 minggu yang lalu
                </div>
              </div>
            </div>
          </div>

          {/* Ads */}
          <div className="space-y-6 mb-6">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/99cfa26750877e1674725f33ae441729925905ca?width=582" 
              alt="Advertisement"
              className="w-full h-[243px] object-cover"
            />
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/99cfa26750877e1674725f33ae441729925905ca?width=582" 
              alt="Advertisement"
              className="w-full h-[243px] object-cover"
            />
          </div>

          <hr className="border-gray-300 mb-6" />

          {/* Popular Tags */}
          <div className="mb-6">
            <h3 className="text-detikblue text-2xl font-bold mb-4">Tag Terpopuler #</h3>
            <hr className="border-detikblue border-2 mb-4 w-full" />
            <div className="text-darkcolor text-base font-bold leading-normal whitespace-pre-line">
              #reshuffle kabinet #Iko uwais #erina gudono #pemilu 2024 #allo bank
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="w-full max-w-[1392px] mx-auto mt-6 mb-6 bg-detikred rounded-3xl relative overflow-hidden p-6">
        <svg width="386" height="759" viewBox="0 0 386 759" className="absolute -left-96 -top-3" fill="none">
          <path d="M0 -13C-213.162 -13 -386 159.838 -386 373C-386 586.162 -213.162 759 0 759C213.162 759 386 586.162 386 373C386 159.838 213.162 -13 0 -13ZM124.158 378.945L-64.0174 515.854C-65.049 516.596 -66.2651 517.038 -67.5319 517.134C-68.7986 517.229 -70.0672 516.973 -71.198 516.394C-72.3289 515.815 -73.2783 514.936 -73.9419 513.853C-74.6056 512.77 -74.9578 511.524 -74.9598 510.254V236.608C-74.964 235.335 -74.6156 234.085 -73.9533 232.998C-73.291 231.911 -72.3406 231.029 -71.2074 230.449C-70.0743 229.869 -68.8027 229.614 -67.5336 229.713C-66.2645 229.811 -65.0475 230.259 -64.0174 231.007L124.158 367.83C125.047 368.459 125.772 369.292 126.272 370.259C126.773 371.226 127.034 372.299 127.034 373.388C127.034 374.477 126.773 375.55 126.272 376.517C125.772 377.484 125.047 378.316 124.158 378.945Z" fill="#850207" fillOpacity="0.1" />
        </svg>
        
        <div className="relative z-10">
          <h2 className="text-white text-3xl font-bold mb-6">Video Terpopuler</h2>
          
          {/* Main Video */}
          <div className="relative w-full h-[250px] mb-8 bg-cover bg-center rounded-lg" style={{backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/aec3b3d3e373d76b3b86f39d489b21383e5c785d?width=1504')"}}>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                <rect width="80" height="80" rx="40" fill="white" fillOpacity="0.5" />
                <path d="M60 40L30 57.3205L30 22.6795L60 40Z" fill="white" fillOpacity="0.8" />
              </svg>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-0 bottom-0 inline-flex py-3 px-6 items-center gap-2 rounded-[25px] bg-white">
              <span className="text-detikred text-sm font-bold">Video Lainnya</span>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M6.42847 3.85693L11.5713 8.99978L6.42847 14.1426" stroke="#BF2026" strokeWidth="1.48114" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            
            <h3 className="text-white text-2xl font-bold leading-9 mb-4 max-w-[356px] mb-16">
              Puluhan polisi menghadang para pendemo di istana kepresidenan
            </h3>
            
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/6f4e63f978c6e5375907b05c19d9609bd5ffcc6a?width=160" 
              alt="detikcom logo"
              className="w-20 h-4 mb-2"
            />
            
            <div className="text-white text-sm mb-8">
              Juni 14, 2022
            </div>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            {[
              {
                image: "https://api.builder.io/api/v1/image/assets/TEMP/4de8c80ca2ed7d464c79e0bf9c6e4d7b685a928d?width=534",
                duration: "01:03",
                title: "Tarif Tiket Masuk Candi Borobudur Rp 750 Ribu Dibatalkan",
                date: "Juni 13, 2022"
              },
              {
                image: "https://api.builder.io/api/v1/image/assets/TEMP/caee069acb100200d8506d6416a059a951d6a40b?width=534",
                duration: "00:30",
                title: "Daftar Aplikasi yang Paling Sering Digunakan Orang Indonesia",
                date: "Juni 13, 2022"
              },
              {
                image: "https://api.builder.io/api/v1/image/assets/TEMP/48407f4a80e29595d99010966d236be4e961a4d1?width=534",
                duration: "02:00",
                title: "Serangan Balik Iko Uwais Usai Dipolisikan atas Dugaan Penganiayaan",
                date: "Juni 13, 2022"
              },
              {
                image: "https://api.builder.io/api/v1/image/assets/TEMP/61aa0f60e20d18590601a4391580bd7297fb5ba8?width=534",
                duration: "01:00",
                title: "Bikin Laper: Unik Banget! Ada Bakmi Ayam Merah di Kawasan Sunter",
                date: "Juni 13, 2022"
              }
            ].map((video, index) => (
              <div key={index} className="w-full">
                <div className="relative w-full h-[165px] rounded-lg overflow-hidden mb-3">
                  <img src={video.image} alt={video.title} className="w-full h-full object-cover" />
                  <div className="absolute top-2 right-2 inline-flex py-1 px-3 items-start rounded-[40px] bg-black/50 backdrop-blur-sm">
                    <span className="text-white text-xs font-bold">{video.duration}</span>
                  </div>
                </div>
                <div className="w-full">
                  <h4 className="text-white text-sm font-semibold leading-5 mb-2 line-clamp-2">
                    {video.title}
                  </h4>
                  <div className="text-white text-sm">
                    {video.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom News Section */}
      <div className="w-full max-w-[1140px] mx-auto mt-10 flex gap-6 px-4">
        <div className="flex-1 max-w-[825px]">
          {/* Bottom news articles */}
          <div className="space-y-6">
            {[
              {
                image: "https://api.builder.io/api/v1/image/assets/TEMP/f9dac7a0f011f82738a4a462c091dceb9e777035?width=922",
                source: "DetikNews",
                date: "juni 14, 2022",
                title: "Jokowi Pakai Kemeja Putih 'Indonesia Maju' di Hari Reshuffle Kabinet",
                excerpt: "Jakarta - Zulkifli Hasan santer dikabarkan bakal dilantik menjadi Menteri Perdagangan menggantikan Muhammad Lutfi.",
                time: "20 jam yang lalu"
              },
              {
                image: "https://api.builder.io/api/v1/image/assets/TEMP/61a2b03ddf1ba93682e4a96ac6f0b9ea33059e22?width=534",
                title: "Viral Foto Selebgram Cantik saat Ditangkap Polisi, Wajah Aslinya Jadi Sorotan",
                excerpt: "Jakarta - LINE Today akan resmi ditutup pada 6 Juli 2022. Line Indonesia menyampaikan....",
                time: "1 jam yang lalu"
              },
              {
                image: "https://api.builder.io/api/v1/image/assets/TEMP/f62346e2f8b5ad84ba6526d83e5e468da00b4680?width=532",
                title: "CEO Shopee Chris Feng Benarkan Kabar PHK Massal",
                excerpt: "Jakarta - LINE Today akan resmi ditutup pada 6 Juli 2022. Line Indonesia menyampaikan....",
                time: "36 menit yang lalu"
              },
              {
                image: "https://api.builder.io/api/v1/image/assets/TEMP/8480e9a4f46860ed3cb0c63502df84f714dfc368?width=532",
                title: "Mobil Mewah Keponakan Prabowo yang Bakal Dilantik Jadi Wamenkop UKM",
                excerpt: "Jakarta - LINE Today akan resmi ditutup pada 6 Juli 2022. Line Indonesia menyampaikan....",
                time: "1 jam yang lalu"
              }
            ].map((article, index) => (
              <div key={index}>
                <div className="flex gap-6">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className={index === 0 ? "w-[461px] h-[300px]" : "w-[267px] h-[157px]"} 
                    style={{borderRadius: "8px", objectFit: "cover"}}
                  />
                  <div className={index === 0 ? "w-[340px] py-6" : "flex-1 py-4"}>
                    {article.source && (
                      <div className="flex items-center gap-1 mb-2">
                        <span className="text-textgray-light text-sm font-bold">{article.source}</span>
                        <span className="text-textgray-light text-sm">| {article.date}</span>
                      </div>
                    )}
                    <h3 className={`text-darkcolor font-bold leading-tight mb-3 ${index === 0 ? 'text-2xl leading-9' : 'text-lg leading-6'}`}>
                      {article.title}
                    </h3>
                    <p className="text-textgray text-sm leading-5 mb-2">
                      <span className="font-bold text-darkcolor">Jakarta</span>
                      <span className="text-textgray"> - {article.excerpt}</span>
                    </p>
                    <div className="text-textgray-light text-sm">
                      {article.time}
                    </div>
                  </div>
                </div>
                {index < 3 && <hr className="border-gray-300 my-6" />}
              </div>
            ))}
          </div>

          <div className="inline-flex py-3 px-6 items-start gap-3 rounded-3xl bg-detikblue-light mt-8">
            <span className="text-detikblue text-sm font-bold">Lihat selengkapnya</span>
          </div>
        </div>

        {/* Right sidebar for bottom section */}
        <div className="w-[290px]">
          {/* Popular News */}
          <h3 className="text-detikblue text-2xl font-bold mb-6">Berita terpopuler</h3>
          
          <div className="space-y-4 mb-6">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="flex gap-2">
                <div className="text-darkcolor text-base font-bold leading-6 w-6">
                  #{num}
                </div>
                <div className="flex-1">
                  <h4 className="text-darkcolor text-base font-semibold leading-6 mb-1">
                    Beda Versi Ayu Thalia Vs Nicholas Sean di Sidang soal Tidur Bareng
                  </h4>
                  <div className="text-textgray-light text-sm">
                    detikNews | 1 jam yang lalu
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <hr className="border-detikblue border-2 mb-6" />
          
          <div className="inline-flex py-3 px-6 items-start gap-3 rounded-3xl bg-detikblue-lighter mb-6">
            <span className="text-detikblue text-sm font-bold">Lihat selengkapnya</span>
          </div>

          {/* Most Comments */}
          <h3 className="text-detikblue text-2xl font-bold mb-6">Komentar Terbanyak</h3>
          
          <div className="space-y-4 mb-6">
            {[
              { title: "Anggota DPR Geram Ada Usaha Kuliner Nasi Padang Babi di Jakarta", comments: "185 komentar" },
              { title: "Jokowi Naik Mobil Listrik Hyundai, Roy Suryo Sindir Begini", comments: "125 komentar" },
              { title: "Roy Suryo: Sama Sekali Tidak Ada Niat Hina Simbol Negara", comments: "106 komentar" }
            ].map((item, index) => (
              <div key={index} className="flex gap-1">
                <svg width="24" height="24" viewBox="0 0 24 24" className="mt-1 flex-shrink-0" fill="none">
                  <path d="M13.0599 10.42H8.27994" stroke="#244B9C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15.5699 13.71H10.2799" stroke="#244B9C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M17.93 17.94C21.6 14.27 21.16 8.05002 16.62 4.99002C13.79 3.08002 9.97001 3.14002 7.19001 5.11002C3.35001 7.83002 2.59001 12.87 4.91001 16.51L3.83001 19.19C3.58001 19.8 4.19001 20.41 4.81001 20.17L7.49001 19.09C10.73 21.16 15.09 20.78 17.93 17.94Z" stroke="#244B9C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="18" cy="6" r="3" fill="#FF3030" stroke="white" />
                </svg>
                <div className="flex-1">
                  <h4 className="text-darkcolor text-base font-semibold leading-6 mb-2">
                    {item.title}
                  </h4>
                  <div className="text-textgray-light text-sm">
                    {item.comments}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <hr className="border-detikblue border-2 mb-6" />
          
          {/* Ads */}
          <div className="space-y-6">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/fa141d2c86f6d054dbf765b8b770cbb7153aaa28?width=582" 
              alt="Advertisement"
              className="w-full h-[243px] object-cover"
            />
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/cbd949149637cd6a260301ff2954f74cd4aa228f?width=582" 
              alt="Advertisement"
              className="w-full h-[243px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Sponsor Section */}
      <div className="w-full max-w-[1140px] mx-auto mt-10 px-6">
        <div className="flex gap-6 mb-10">
          <div className="flex gap-6">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/eeb0fb0a08734f9fd2963b00de0b46d7c3eece27?width=922" 
              alt="Sponsor article"
              className="w-[461px] h-[300px] rounded-lg object-cover"
            />
            <div className="w-[340px] py-6">
              <div className="flex items-center gap-1 mb-2">
                <span className="text-textgray-light text-sm font-bold">DetikOto</span>
                <span className="text-textgray-light text-sm">| juni 14, 2022</span>
              </div>
              <h3 className="text-black text-2xl font-bold leading-9 mb-3">
                Mau Nongkrong Santuy di Coffee Bean? Pakai Allo Bank Gratis Kopi
              </h3>
              <div className="text-textgray-light text-sm">
                15 jam yang lalu
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex gap-6">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/5a36f44b5c667895abfaa48c99ade6a16cf383a3?width=532" 
            alt="Traffic news"
            className="w-[266px] h-[157px] rounded-lg object-cover"
          />
          <div className="flex-1 py-7">
            <h3 className="text-darkcolor text-lg font-semibold leading-6 mb-3">
              Baru hari pertama Operasi Patuh Jaya, 2 Ribu orang kena Tilang
            </h3>
            <div className="text-textgray-light text-sm leading-6">
              detikNews
            </div>
          </div>
        </div>
        
        <div className="inline-flex py-3 px-6 items-start gap-3 rounded-3xl bg-detikblue-light mt-8">
          <span className="text-detikblue text-sm font-bold">Lihat selengkapnya</span>
        </div>
      </div>

      {/* Photo Gallery Section */}
      <div className="w-full max-w-[1140px] mx-auto mt-10 px-4">
        <h2 className="text-darkcolor text-2xl font-bold mb-6 text-center">Foto Terpopuler</h2>
        
        <div className="flex w-full relative">
          {[
            {
              image: "https://api.builder.io/api/v1/image/assets/TEMP/01521fe9af85b5130bd8517ce99c52530af66e22?width=382",
              title: "Italia Tak Berdaya, Dihajar Jerman 2-5",
              count: "12 Foto",
              isFirst: true
            },
            {
              image: "https://api.builder.io/api/v1/image/assets/TEMP/b247dac277c10b36cf8b3222c39d910ebea23ebe?width=378",
              title: "Inggris Jadi Bulan-bulanan Hungaria",
              count: "8 Foto"
            },
            {
              image: "https://api.builder.io/api/v1/image/assets/TEMP/f9624258c3311c6e89a2c8c6e4e0a3b068a52130?width=378",
              title: "8 Potret Kemeriahan PKB 2022, Pawai-IKM",
              count: "8 Foto"
            },
            {
              image: "https://api.builder.io/api/v1/image/assets/TEMP/4d11a8cc24c0b6f5463ea0eb7ad2e077d5aa6976?width=378",
              title: "8 potret Vila sewaan atta-aurel saat pindah sementara di Bali, Mewah!",
              count: "8 Foto"
            },
            {
              image: "https://api.builder.io/api/v1/image/assets/TEMP/57dcfdeeae784ec27049b5ebc92b879d948c9bb7?width=378",
              title: "Ekuador Memanas, Massa Pendemo Bakar Mobil Polisi",
              count: "10 Foto"
            },
            {
              image: "https://api.builder.io/api/v1/image/assets/TEMP/d8883ad834e980ad29315a0215eea9df3ad2cf4d?width=380",
              title: "Keren! Jembatan Kaca Sepanjang 240 Meter di Tengahnya Ada Kafe Berlian",
              count: "10 Foto",
              isLast: true
            }
          ].map((photo, index) => (
            <div key={index} className="relative">
              <div className={`w-[190px] h-[266px] bg-gray-300 relative overflow-hidden ${photo.isFirst ? 'rounded-l-lg' : photo.isLast ? 'rounded-r-lg' : ''}`}>
                <img src={photo.image} alt={photo.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
                <div className="absolute left-3 bottom-8 max-w-[163px]">
                  <h4 className="text-white text-sm font-bold leading-normal mb-1">
                    {photo.title}
                  </h4>
                  <div className="text-white text-xs">
                    {photo.count}
                  </div>
                </div>
                
                {photo.isFirst && (
                  <div className="absolute left-1.5 top-[120px] w-[26px] h-[26px] rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center">
                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                      <path d="M10.0894 12.1783L5.91078 7.99974L10.0894 3.82117" stroke="white" strokeWidth="1.213" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
                
                {photo.isLast && (
                  <div className="absolute right-1.5 top-[120px] w-[26px] h-[26px] rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center">
                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                      <path d="M5.91077 12.1783L10.0893 7.99974L5.91077 3.82117" stroke="white" strokeWidth="1.213" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
              {index < 5 && (
                <div className="w-0 h-[266px] border-l-[4px] border-white absolute -right-0.5 top-0" />
              )}
            </div>
          ))}
        </div>
        
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/f00d65d50816b809fd0b7856029cec0235137241?width=238" 
          alt="detikcom"
          className="w-[119px] h-6 mx-auto mt-6 mb-10"
        />
        
        <div className="flex w-[185px] h-[41px] py-3 px-10 justify-center items-center gap-1 rounded-3xl bg-detikblue-lighter mx-auto">
          <span className="text-detikblue text-center text-sm font-bold">Indeks berita</span>
          <svg width="11" height="10" viewBox="0 0 13 10" fill="none">
            <path d="M1 4.33114C0.630601 4.33114 0.331144 4.6306 0.331144 5C0.331144 5.3694 0.630601 5.66886 1 5.66886V4.33114ZM12.473 5.47295C12.7342 5.21175 12.7342 4.78825 12.473 4.52705L8.21638 0.270473C7.95517 0.00926876 7.53168 0.00926876 7.27047 0.270473C7.00927 0.531678 7.00927 0.955174 7.27047 1.21638L11.0541 5L7.27047 8.78362C7.00927 9.04483 7.00927 9.46832 7.27047 9.72953C7.53168 9.99073 7.95517 9.99073 8.21638 9.72953L12.473 5.47295ZM1 5.66886H12V4.33114H1V5.66886Z" fill="#244B9C" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Index;

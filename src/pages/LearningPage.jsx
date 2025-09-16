export default function LearningPage() {
  return (
    <div className="min-h-screen bg-[#F6F8FA] font-['Inter'] text-sm">
      {/* Header - Same as analytics page */}
      <div className="fixed top-0 left-0 right-0 h-[89px] bg-white border-b border-[#D0D0D0] z-20">
        <div className="flex items-center justify-between h-full px-6">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/e4a286c701fac47d2a67ae249051ba192e41e3c0?width=444" 
              alt="Logo" 
              className="w-[222px] h-12 object-contain"
            />
          </div>

          {/* Right Side - Notifications and Profile */}
          <div className="flex items-center space-x-4">
            {/* Notification Bell */}
            <div className="relative">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/90078d83a9da0e490b62ca7a87c227e0089fff32?width=70" 
                alt="Notifications" 
                className="w-[35px] h-[35px]"
              />
              <div className="absolute -top-1 -right-1 w-[10px] h-[10px] bg-[#FF6C32] rounded-full"></div>
            </div>

            {/* Profile */}
            <div className="flex items-center space-x-3">
              <div className="w-[35px] h-[35px] rounded-full bg-gray-300"></div>
              <span className="text-[#535556] text-xl font-medium">Eliza Chris</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="pt-[89px] flex">
        {/* Left Sidebar - Course Navigation */}
        <div className="w-[320px] h-[935px] bg-white border border-[#B5B7B9] flex-shrink-0">
          {/* Course Header */}
          <div className="h-[101px] border-b border-[#646971] p-6 flex items-center space-x-4">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/2f29267f3ccc371cebc474105c2509a793b68824?width=110" 
              alt="Course" 
              className="w-[55px] h-[55px] rounded-[30px] border border-[#766F6F]"
            />
            <div>
              <h2 className="text-2xl font-bold text-black">React Fundamentals</h2>
              <p className="text-sm text-[#9CA3AF] font-medium">Complete Course</p>
            </div>
          </div>

          {/* Course Content */}
          <div className="p-4 space-y-2">
            {/* Module 1 - Expanded */}
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-white border-[0.5px] border-[#909090] rounded-lg">
                <span className="text-[#3B4453] font-['Space_Grotesk'] text-base">Module 1: Introduction</span>
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path d="M7.29365 12.7062C7.68428 13.0968 8.31865 13.0968 8.70928 12.7062L14.7093 6.70615C15.0999 6.31553 15.0999 5.68115 14.7093 5.29053C14.3187 4.8999 13.6843 4.8999 13.2937 5.29053L7.9999 10.5843L2.70615 5.29365C2.31553 4.90303 1.68115 4.90303 1.29053 5.29365C0.899902 5.68428 0.899902 6.31865 1.29053 6.70928L7.29053 12.7093L7.29365 12.7062Z" fill="black"/>
                </svg>
              </div>

              {/* Lessons */}
              <div className="ml-4 space-y-2">
                {/* Active Lesson */}
                <div className="p-3 bg-gradient-to-r from-[#A0FFF3] to-[#009EB9] rounded-lg shadow-[0_0_20px_rgba(110,253,186,0.3)]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <svg className="w-3 h-4" viewBox="0 0 12 16" fill="none">
                        <path d="M2.28125 1.21884C1.81875 0.934468 1.2375 0.925093 0.765625 1.19072C0.29375 1.45634 0 1.95634 0 2.50009V13.5001C0 14.0438 0.29375 14.5438 0.765625 14.8095C1.2375 15.0751 1.81875 15.0626 2.28125 14.7813L11.2812 9.28134C11.7281 9.00947 12 8.52509 12 8.00009C12 7.47509 11.7281 6.99384 11.2812 6.71884L2.28125 1.21884Z" fill="#3B4453"/>
                      </svg>
                      <div>
                        <div className="text-black text-base font-medium">What is React?</div>
                        <div className="text-[#3B4453] text-xs font-['Space_Grotesk']">12 min</div>
                      </div>
                    </div>
                    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                      <path d="M11.5312 6.53125L7.53125 10.5312C7.2375 10.825 6.7625 10.825 6.47188 10.5312L4.47188 8.53125C4.17813 8.2375 4.17813 7.7625 4.47188 7.47188C4.76562 7.18125 5.24062 7.17813 5.53125 7.47188L7 8.94063L10.4688 5.46875C10.7625 5.175 11.2375 5.175 11.5281 5.46875C11.8187 5.7625 11.8219 6.2375 11.5281 6.52812L11.5312 6.53125Z" fill="#4ADE80"/>
                    </svg>
                  </div>
                </div>

                {/* Other Lessons */}
                <div className="p-3 bg-[#E4FFFB] rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <svg className="w-3 h-4" viewBox="0 0 12 16" fill="none">
                        <path d="M2.28125 1.21884C1.81875 0.934468 1.2375 0.925093 0.765625 1.19072C0.29375 1.45634 0 1.95634 0 2.50009V13.5001C0 14.0438 0.29375 14.5438 0.765625 14.8095C1.2375 15.0751 1.81875 15.0626 2.28125 14.7813L11.2812 9.28134C11.7281 9.00947 12 8.52509 12 8.00009C12 7.47509 11.7281 6.99384 11.2812 6.71884L2.28125 1.21884Z" fill="#3B4453"/>
                      </svg>
                      <div>
                        <div className="text-black text-base font-medium">History of React</div>
                        <div className="text-[#3B4453] text-xs font-['Space_Grotesk']">15 min</div>
                      </div>
                    </div>
                    <div className="w-4 h-4 bg-white border border-[#7B7B7B] rounded-full"></div>
                  </div>
                </div>

                <div className="p-3 bg-[#E4FFFB] rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <svg className="w-3 h-4" viewBox="0 0 12 16" fill="none">
                        <path d="M2 0C0.896875 0 0 0.896875 0 2V14C0 15.1031 0.896875 16 2 16H10C11.1031 16 12 15.1031 12 14V5H8C7.44688 5 7 4.55312 7 4V0H2ZM8 0V4H12L8 0ZM3.5 8H8.5C8.775 8 9 8.225 9 8.5C9 8.775 8.775 9 8.5 9H3.5C3.225 9 3 8.775 3 8.5C3 8.225 3.225 8 3.5 8ZM3.5 10H8.5C8.775 10 9 10.225 9 10.5C9 10.775 8.775 11 8.5 11H3.5C3.225 11 3 10.775 3 10.5C3 10.225 3.225 10 3.5 10ZM3.5 12H8.5C8.775 12 9 12.225 9 12.5C9 12.775 8.775 13 8.5 13H3.5C3.225 13 3 12.775 3 12.5C3 12.225 3.225 12 3.5 12Z" fill="#3B4453"/>
                      </svg>
                      <div>
                        <div className="text-black text-base font-medium">Setup React</div>
                        <div className="text-[#3B4453] text-xs font-['Space_Grotesk']">8 min</div>
                      </div>
                    </div>
                    <div className="w-4 h-4 bg-white border border-[#7B7B7B] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 2 - Collapsed */}
            <div className="flex items-center justify-between p-3 bg-white border-[0.5px] border-[#909090] rounded-lg">
              <span className="text-[#3B4453] text-base">Module 2: Machine Learning</span>
              <svg className="w-[10px] h-4" viewBox="0 0 10 16" fill="none">
                <path d="M9.70615 7.29365C10.0968 7.68428 10.0968 8.31865 9.70615 8.70928L3.70615 14.7093C3.31553 15.0999 2.68115 15.0999 2.29053 14.7093C1.8999 14.3187 1.8999 13.6843 2.29053 13.2937L7.58428 7.9999L2.29365 2.70615C1.90303 2.31553 1.90303 1.68115 2.29365 1.29053C2.68428 0.899902 3.31865 0.899902 3.70928 1.29053L9.70928 7.29053L9.70615 7.29365Z" fill="black"/>
              </svg>
            </div>

            {/* Module 3 - Collapsed */}
            <div className="flex items-center justify-between p-3 bg-white border-[0.5px] border-[#909090] rounded-lg">
              <span className="text-[#3B4453] text-base">Module 3: Neural Networks</span>
              <svg className="w-[10px] h-4" viewBox="0 0 10 16" fill="none">
                <path d="M9.70615 7.29365C10.0968 7.68428 10.0968 8.31865 9.70615 8.70928L3.70615 14.7093C3.31553 15.0999 2.68115 15.0999 2.29053 14.7093C1.8999 14.3187 1.8999 13.6843 2.29053 13.2937L7.58428 7.9999L2.29365 2.70615C1.90303 2.31553 1.90303 1.68115 2.29365 1.29053C2.68428 0.899902 3.31865 0.899902 3.70928 1.29053L9.70928 7.29053L9.70615 7.29365Z" fill="black"/>
              </svg>
            </div>
          </div>

          {/* Progress Section */}
          <div className="absolute bottom-0 w-[320px] border-t border-[#A5A5A5] bg-white p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-black text-sm font-semibold">Progress</span>
              <span className="text-black text-sm font-semibold">25%</span>
            </div>
            <div className="w-full bg-[#374151] h-2 rounded-full">
              <div 
                className="h-2 rounded-full bg-gradient-to-r from-[#A0FFF3] to-[#009EB9]" 
                style={{ width: '25%' }}
              ></div>
            </div>
          </div>
        </div>

        {/* Collapse Button */}
        <div className="absolute left-[293px] top-[72px] z-30">
          <div className="w-10 h-10 bg-white rounded-full border border-[#D0D0D0] flex items-center justify-center">
            <svg className="w-[29px] h-[29px] transform rotate-90" viewBox="0 0 29 29" fill="none">
              <path d="M10.3918 14.5L17.6418 7.25L19.3335 8.94167L13.7752 14.5L19.3335 20.0583L17.6418 21.75L10.3918 14.5Z" fill="#595959"/>
            </svg>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 pl-8">
          {/* Video Player */}
          <div className="mb-8">
            <div 
              className="w-[993px] h-[468px] rounded-xl bg-cover bg-center shadow-[0_0_20px_rgba(59,130,246,0.3)] relative"
              style={{
                backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/4149874273b2935a8787f693959fae840db48f9d?width=1986')"
              }}
            >
              {/* Video Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[rgba(59,130,246,0.1)] to-[rgba(147,51,234,0.1)] rounded-xl">
                <div className="absolute top-4 left-5 text-white text-xl font-medium opacity-70">
                  Module 1: Introduction  What is React?
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-8 right-6 w-6 h-6 bg-[#C084FC] rounded-full opacity-50"></div>
                <div className="absolute bottom-8 left-8 w-4 h-4 bg-[#22D3EE] rounded-full opacity-50"></div>
              </div>

              {/* Video Controls */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-r from-black to-transparent flex items-center px-4 rounded-b-xl">
                <button className="text-white mr-4">
                  <svg className="w-[18px] h-6" viewBox="0 0 18 24" fill="none">
                    <path d="M3.42188 1.82814C2.72813 1.40158 1.85625 1.38752 1.14844 1.78596C0.440625 2.18439 0 2.93439 0 3.75002V20.25C0 21.0656 0.440625 21.8156 1.14844 22.2141C1.85625 22.6125 2.72813 22.5938 3.42188 22.1719L16.9219 13.9219C17.5922 13.5141 18 12.7875 18 12C18 11.2125 17.5922 10.4906 16.9219 10.0781L3.42188 1.82814Z" fill="white"/>
                  </svg>
                </button>
                
                {/* Progress Bar */}
                <div className="flex-1 bg-[#4B5563] h-1 rounded-full mr-4">
                  <div className="bg-[#60A5FA] h-1 rounded-full" style={{ width: '35%' }}></div>
                </div>
                
                <span className="text-white text-sm mr-4 font-['Space_Grotesk']">4:32 / 12:00</span>
                
                {/* Volume and Fullscreen */}
                <button className="text-white mr-3">
                  <svg className="w-5 h-4" viewBox="0 0 21 16" fill="none">
                    <path d="M17.05 1.01555C19.0781 2.66555 20.375 5.18117 20.375 7.99992C20.375 10.8187 19.0781 13.3374 17.05 14.9843C16.7281 15.2468 16.2562 15.1968 15.9937 14.8749C15.7312 14.5531 15.7812 14.0812 16.1031 13.8187C17.7969 12.4437 18.875 10.3499 18.875 7.99992C18.875 5.64992 17.7969 3.55617 16.1031 2.17805C15.7812 1.91555 15.7344 1.44367 15.9937 1.1218C16.2531 0.799924 16.7281 0.753049 17.05 1.01242V1.01555ZM15.1594 3.34367C16.5094 4.44367 17.375 6.1218 17.375 7.99992C17.375 9.87805 16.5094 11.5562 15.1594 12.6562C14.8375 12.9187 14.3656 12.8687 14.1031 12.5468C13.8406 12.2249 13.8906 11.753 14.2125 11.4906C15.2281 10.6656 15.875 9.4093 15.875 7.99992C15.875 6.59055 15.2281 5.3343 14.2125 4.50617C13.8906 4.24367 13.8438 3.7718 14.1031 3.44992C14.3625 3.12805 14.8375 3.08117 15.1594 3.34055V3.34367ZM13.2688 5.6718C13.9406 6.2218 14.375 7.0593 14.375 7.99992C14.375 8.94055 13.9406 9.77805 13.2688 10.328C12.9469 10.5905 12.475 10.5405 12.2125 10.2187C11.95 9.8968 12 9.42492 12.3219 9.16243C12.6594 8.88743 12.875 8.46867 12.875 7.99992C12.875 7.53117 12.6594 7.11242 12.3219 6.8343C12 6.5718 11.9531 6.09992 12.2125 5.77805C12.4719 5.45617 12.9469 5.4093 13.2688 5.66867V5.6718ZM9.78438 1.08742C10.1438 1.24992 10.375 1.60617 10.375 1.99992V13.9999C10.375 14.3937 10.1438 14.7499 9.78438 14.9124C9.425 15.0749 9.00313 15.0093 8.70938 14.7468L4.49375 10.9999H2.375C1.27188 10.9999 0.375 10.103 0.375 8.99992V6.99992C0.375 5.8968 1.27188 4.99992 2.375 4.99992H4.49375L8.70938 1.25305C9.00313 0.990549 9.425 0.928049 9.78438 1.08742Z" fill="white"/>
                  </svg>
                </button>
                
                <button className="text-white">
                  <svg className="w-[14px] h-4" viewBox="0 0 15 16" fill="none">
                    <path d="M1.375 1C0.821875 1 0.375 1.44687 0.375 2V5C0.375 5.55312 0.821875 6 1.375 6C1.92813 6 2.375 5.55312 2.375 5V3H4.375C4.92812 3 5.375 2.55313 5.375 2C5.375 1.44687 4.92812 1 4.375 1H1.375ZM2.375 11C2.375 10.4469 1.92813 10 1.375 10C0.821875 10 0.375 10.4469 0.375 11V14C0.375 14.5531 0.821875 15 1.375 15H4.375C4.92812 15 5.375 14.5531 5.375 14C5.375 13.4469 4.92812 13 4.375 13H2.375V11ZM10.375 1C9.82187 1 9.375 1.44687 9.375 2C9.375 2.55313 9.82187 3 10.375 3H12.375V5C12.375 5.55312 12.8219 6 13.375 6C13.9281 6 14.375 5.55312 14.375 5V2C14.375 1.44687 13.9281 1 13.375 1H10.375ZM14.375 11C14.375 10.4469 13.9281 10 13.375 10C12.8219 10 12.375 10.4469 12.375 11V13H10.375C9.82187 13 9.375 13.4469 9.375 14C9.375 14.5531 9.82187 15 10.375 15H13.375C13.9281 15 14.375 14.5531 14.375 14V11Z" fill="white"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="max-w-[896px]">
            {/* What is AI? Title */}
            <h1 className="text-[30px] font-['Space_Grotesk'] leading-9 mb-4 text-transparent">What is AI?</h1>

            {/* Main Content Card */}
            <div className="bg-white rounded-2xl border-l-4 border-black p-6 shadow-[0_4px_6px_rgba(0,0,0,0.1),0_10px_15px_rgba(0,0,0,0.1)] mb-8">
              <p className="text-xl text-black text-justify leading-normal">
                Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think and learn like humans. This foundational lesson explores the core concepts, definitions, and basic principles that form the building blocks of AI technology.
              </p>
            </div>

            {/* Key Concepts Section */}
            <div className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-black">Key Concepts</h2>
              
              {/* Machine Intelligence */}
              <div className="bg-white rounded-lg border-l-4 border-[#60A5FA] p-5 shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                <h4 className="text-base font-['Space_Grotesk'] text-black mb-2">Machine Intelligence</h4>
                <p className="text-base font-['Space_Grotesk'] text-black">The ability of machines to perform tasks that typically require human intelligence.</p>
              </div>

              {/* Learning Algorithms */}
              <div className="bg-white rounded-lg border-l-4 border-[#C084FC] p-5 shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                <h4 className="text-base font-['Space_Grotesk'] text-black mb-2">Learning Algorithms</h4>
                <p className="text-base font-['Space_Grotesk'] text-black">Mathematical models that enable computers to learn from data without explicit programming.</p>
              </div>

              {/* Pattern Recognition */}
              <div className="bg-[#1F2937] rounded-lg border-l-4 border-[#22D3EE] p-5">
                <h4 className="text-base font-['Space_Grotesk'] text-white mb-2">Pattern Recognition</h4>
                <p className="text-base font-['Space_Grotesk'] text-[#D1D5DB]">The ability to identify regularities and patterns in data to make predictions.</p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between">
              <button className="flex items-center space-x-2 bg-[#374151] text-white px-6 py-3 rounded-lg">
                <span className="font-['Space_Grotesk'] text-base">Previous</span>
              </button>
              
              <button className="flex items-center space-x-2 bg-[#2563EB] text-white px-6 py-3 rounded-lg shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                <span className="font-['Space_Grotesk'] text-base">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

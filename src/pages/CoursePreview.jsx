export default function CoursePreview() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="w-full h-[89px] bg-white border border-gray-300">
        <div className="max-w-[1280px] mx-auto px-4 h-full flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/e4a286c701fac47d2a67ae249051ba192e41e3c0?width=444" 
              alt="Logo" 
              className="h-[47px] w-[222px]"
            />
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-6">
            <a href="#" className="text-gray-600 text-base font-normal hover:text-gray-900">Courses</a>
            <a href="#" className="text-gray-600 text-base font-normal hover:text-gray-900">AI Tools</a>
            <a href="#" className="text-gray-600 text-base font-normal hover:text-gray-900">Community</a>
          </nav>

          {/* User Section */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/90078d83a9da0e490b62ca7a87c227e0089fff32?width=70" 
                alt="Notifications"
                className="w-[35px] h-[35px]"
              />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-orange-500 rounded-full"></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-[35px] h-[35px] rounded-full bg-gray-300 bg-cover bg-center" 
                style={{backgroundImage: "url(https://api.builder.io/api/v1/image/assets/TEMP/user-avatar.jpg)"}}></div>
              <span className="text-gray-600 text-xl font-medium">Eliza Chris</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1280px] mx-auto px-4 py-16">
        <div className="flex gap-8 items-start">
          {/* Left Content */}
          <div className="flex-1 max-w-[821px]">
            {/* Course Header */}
            <section className="mb-8">
              {/* Badges */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-yellow-primary text-sm font-medium">Bestseller</span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-primary text-white text-sm font-medium">
                  Beginner-Friendly
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-primary text-white text-sm font-medium">
                  AI-Generated Content
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
                Generative AI & Machine Learning Fundametals
              </h1>

              {/* Description */}
              <p className="text-xl text-gray-500 leading-relaxed mb-6">
                Master UX Pilot, GPT-4, Midjourney, and 50+ AI tools to boost productivity and creativity
              </p>

              {/* Meta Info */}
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/489c0bbf993f7c468db3540d2ff08b89697c6fde?width=64" 
                    alt="Dr. Sarah Chen"
                    className="w-8 h-8 rounded-full"
                  />
                  <span>Created by <span className="text-orange-primary">Dr. Sarah Chen</span></span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-3 h-3.5 text-gray-500" viewBox="0 0 13 15" fill="currentColor">
                    <path d="M3.35938 1.625V2.5H2.04688C1.32227 2.5 0.734375 3.08789 0.734375 3.8125V5.125H12.9844V3.8125C12.9844 3.08789 12.3965 2.5 11.6719 2.5H10.3594V1.625C10.3594 1.14102 9.96836 0.75 9.48438 0.75C9.00039 0.75 8.60938 1.14102 8.60938 1.625V2.5H5.10938V1.625C5.10938 1.14102 4.71836 0.75 4.23438 0.75C3.75039 0.75 3.35938 1.14102 3.35938 1.625ZM12.9844 6H0.734375V13.4375C0.734375 14.1621 1.32227 14.75 2.04688 14.75H11.6719C12.3965 14.75 12.9844 14.1621 12.9844 13.4375V6Z"/>
                  </svg>
                  <span>Last updated 12/2024</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 text-gray-500" viewBox="0 0 15 15" fill="currentColor">
                    <path d="M10.3125 7.75C10.3125 8.35703 10.2797 8.94219 10.2223 9.5H5.15273C5.09258 8.94219 5.0625 8.35703 5.0625 7.75C5.0625 7.14297 5.09531 6.55781 5.15273 6H10.2223C10.2824 6.55781 10.3125 7.14297 10.3125 7.75ZM11.1 6H14.466C14.6109 6.56055 14.6875 7.1457 14.6875 7.75C14.6875 8.3543 14.6109 8.93945 14.466 9.5H11.1C11.1574 8.93672 11.1875 8.35156 11.1875 7.75C11.1875 7.14844 11.1574 6.56328 11.1 6ZM14.1789 5.125H10.9879C10.7145 3.37773 10.173 1.91484 9.47578 0.979687C11.6168 1.5457 13.3586 3.09883 14.1762 5.125H14.1789ZM10.102 5.125H5.27305C5.43984 4.12969 5.69688 3.24922 6.01133 2.53555C6.29844 1.89023 6.61836 1.42266 6.92734 1.12734C7.23359 0.8375 7.48789 0.75 7.6875 0.75C7.88711 0.75 8.14141 0.8375 8.44766 1.12734C8.75664 1.42266 9.07656 1.89023 9.36367 2.53555C9.68086 3.24648 9.93516 4.12695 10.102 5.125ZM4.38711 5.125H1.19609C2.01641 3.09883 3.75547 1.5457 5.89922 0.979687C5.20195 1.91484 4.66055 3.37773 4.38711 5.125ZM0.908984 6H4.275C4.21758 6.56328 4.1875 7.14844 4.1875 7.75C4.1875 8.35156 4.21758 8.93672 4.275 9.5H0.908984C0.764063 8.93945 0.6875 8.3543 0.6875 7.75C0.6875 7.1457 0.764063 6.56055 0.908984 6ZM6.01133 12.9617C5.69414 12.2508 5.43984 11.3703 5.27305 10.375H10.102C9.93516 11.3703 9.67812 12.2508 9.36367 12.9617C9.07656 13.607 8.75664 14.0746 8.44766 14.3699C8.14141 14.6625 7.88711 14.75 7.6875 14.75C7.48789 14.75 7.23359 14.6625 6.92734 14.3727C6.61836 14.0773 6.29844 13.6098 6.01133 12.9645V12.9617ZM4.38711 10.375C4.66055 12.1223 5.20195 13.5852 5.89922 14.5203C3.75547 13.9543 2.01641 12.4012 1.19609 10.375H4.38711ZM14.1789 10.375C13.3586 12.4012 11.6195 13.9543 9.47852 14.5203C10.1758 13.5852 10.7145 12.1223 10.9906 10.375H14.1789Z"/>
                  </svg>
                  <span>English</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-3.5 text-gray-500" viewBox="0 0 16 15" fill="currentColor">
                    <path d="M0.25 3.375C0.25 2.40977 1.03477 1.625 2 1.625H14.25C15.2152 1.625 16 2.40977 16 3.375V12.125C16 13.0902 15.2152 13.875 14.25 13.875H2C1.03477 13.875 0.25 13.0902 0.25 12.125V3.375ZM5.71875 6.4375C6.10703 6.4375 6.45703 6.6043 6.69766 6.875C6.93828 7.1457 7.35391 7.16758 7.62461 6.92695C7.89531 6.68633 7.91719 6.2707 7.67656 6C7.19805 5.46406 6.49805 5.125 5.72148 5.125C4.27227 5.125 3.09648 6.30078 3.09648 7.75C3.09648 9.19922 4.27227 10.375 5.72148 10.375C6.49805 10.375 7.19805 10.0359 7.67656 9.5C7.91719 9.2293 7.89531 8.81641 7.62461 8.57305C7.35391 8.32969 6.94102 8.3543 6.69766 8.625C6.45703 8.8957 6.10703 9.0625 5.71875 9.0625C4.99414 9.0625 4.40625 8.47461 4.40625 7.75C4.40625 7.02539 4.99414 6.4375 5.71875 6.4375ZM9.65625 7.75C9.65625 7.02539 10.2441 6.4375 10.9688 6.4375C11.357 6.4375 11.707 6.6043 11.9477 6.875C12.1883 7.1457 12.6039 7.16758 12.8746 6.92695C13.1453 6.68633 13.1672 6.2707 12.9266 6C12.448 5.46406 11.748 5.125 10.9715 5.125C9.52227 5.125 8.34648 6.30078 8.34648 7.75C8.34648 9.19922 9.52227 10.375 10.9715 10.375C11.748 10.375 12.448 10.0359 12.9266 9.5C13.1672 9.2293 13.1453 8.81641 12.8746 8.57305C12.6039 8.32969 12.191 8.3543 11.9477 8.625C11.707 8.8957 11.357 9.0625 10.9688 9.0625C10.2441 9.0625 9.65625 8.47461 9.65625 7.75Z"/>
                  </svg>
                  <span>Subtitles</span>
                </div>
              </div>

              {/* Bookmark Icon */}
              <div className="absolute right-4 top-4">
                <div className="relative">
                  <div className="w-[49px] h-[47px] bg-white rounded-full shadow-lg"></div>
                  <svg className="absolute top-2 left-1 w-[67px] h-[60px] text-teal-500" viewBox="0 0 67 61" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M25.0301 5.05005C28.4564 5.05005 30.9533 5.05142 32.8611 5.23657C34.765 5.42138 35.9348 5.77931 36.7791 6.38892C37.5777 6.96545 38.0027 7.70463 38.2332 8.94263C38.4768 10.2509 38.4813 11.9859 38.4813 14.4836V25.6829C38.4813 27.2895 38.4759 28.3365 38.327 29.0627C38.2566 29.4055 38.1666 29.6038 38.0799 29.7249C38.0037 29.831 37.9006 29.9205 37.7137 29.9954C37.3085 30.1575 36.7179 30.1763 35.9139 29.9934C35.1233 29.8135 34.2354 29.4637 33.3104 29.0256C32.3896 28.5896 31.4711 28.0848 30.6131 27.6096C29.7748 27.1453 28.9622 26.6905 28.3133 26.3977C26.9923 25.8016 26.0709 25.3636 25.0301 25.3635C23.9893 25.3635 23.0678 25.8016 21.7469 26.3977C21.0979 26.6905 20.2845 27.1453 19.4461 27.6096C18.588 28.0849 17.6697 28.5896 16.7488 29.0256C15.8239 29.4636 14.9368 29.8135 14.1463 29.9934C13.443 30.1534 12.903 30.1586 12.5076 30.0491L12.3465 29.9954C12.1594 29.9205 12.0565 29.8311 11.9803 29.7249C11.8935 29.6038 11.8036 29.4056 11.7332 29.0627C11.5842 28.3365 11.5789 27.2896 11.5789 25.6829V14.4836C11.5789 11.9859 11.5834 10.2509 11.827 8.94263C12.0575 7.70481 12.4818 6.96541 13.2801 6.38892C14.1244 5.77931 15.2943 5.42138 17.1981 5.23657C19.106 5.05137 21.6034 5.05005 25.0301 5.05005Z"/>
                  </svg>
                </div>
              </div>
            </section>

            {/* Stats Section */}
            <section className="bg-white rounded-xl p-6 shadow-lg mb-8" style={{boxShadow: "0 0 30px 0 rgba(102, 126, 234, 0.30)"}}>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[...Array(4)].map((_, i) => (
                      <svg key={i} className="w-[18px] h-4 text-yellow-primary" viewBox="0 0 19 16" fill="currentColor">
                        <path d="M10.2625 0.5625C10.0969 0.21875 9.74687 0 9.3625 0C8.97813 0 8.63125 0.21875 8.4625 0.5625L6.45312 4.69688L1.96563 5.35938C1.59063 5.41563 1.27813 5.67812 1.1625 6.0375C1.04688 6.39687 1.14062 6.79375 1.40937 7.05937L4.66563 10.2812L3.89687 14.8344C3.83437 15.2094 3.99062 15.5906 4.3 15.8125C4.60938 16.0344 5.01875 16.0625 5.35625 15.8844L9.36563 13.7437L13.375 15.8844C13.7125 16.0625 14.1219 16.0375 14.4312 15.8125C14.7406 15.5875 14.8969 15.2094 14.8344 14.8344L14.0625 10.2812L17.3188 7.05937C17.5875 6.79375 17.6844 6.39687 17.5656 6.0375C17.4469 5.67812 17.1375 5.41563 16.7625 5.35938L12.2719 4.69688L10.2625 0.5625Z"/>
                      </svg>
                    ))}
                    <svg className="w-5 h-4 text-yellow-primary" viewBox="0 0 21 16" fill="currentColor">
                      <path d="M10.3594 11.7625L10.3625 11.7594L11.1875 12.2L13.85 13.6219L13.3344 10.5719L13.1844 9.675L13.8313 9.03438L16.0219 6.86875L13.0188 6.425L12.1031 6.29063L11.7 5.45937L10.3625 2.71563L10.3594 2.725V11.7625ZM15.8313 14.8344C15.8938 15.2094 15.7375 15.5906 15.4281 15.8125C15.1188 16.0344 14.7094 16.0625 14.3719 15.8844L10.3625 13.7437L6.35313 15.8844C6.01563 16.0625 5.60626 16.0344 5.29688 15.8125C4.98751 15.5906 4.83126 15.2094 4.89376 14.8344L5.66563 10.2812L2.40938 7.05937C2.14063 6.79375 2.04376 6.39687 2.16251 6.0375C2.28126 5.67812 2.59063 5.41563 2.96563 5.35938L7.45313 4.69688L9.46563 0.5625C9.63438 0.21875 9.98126 0 10.3656 0C10.75 0 11.0969 0.21875 11.2656 0.5625L13.275 4.69688L17.7625 5.35938C18.1375 5.41563 18.45 5.67812 18.5656 6.0375C18.6813 6.39687 18.5875 6.79375 18.3188 7.05937L15.0625 10.2812L15.8313 14.8344Z"/>
                    </svg>
                  </div>
                  <div className="text-black text-base font-bold mb-1">4.8</div>
                  <div className="text-gray-400 text-base">12,847 reviews</div>
                </div>
                <div className="text-center">
                  <div className="text-purple-primary text-2xl font-bold mb-1">89,234</div>
                  <div className="text-gray-400 text-base">Students enrolled</div>
                </div>
                <div className="text-center">
                  <div className="text-blue-primary text-2xl font-bold mb-1">15.5h</div>
                  <div className="text-gray-400 text-base">Total content</div>
                </div>
              </div>
            </section>

            {/* What you'll learn */}
            <section className="bg-white rounded-xl p-6 shadow-lg mb-8" style={{boxShadow: "0 0 30px 0 rgba(102, 126, 234, 0.30)"}}>
              <h2 className="text-2xl font-bold text-black mb-6">What you'll learn</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <svg className="w-3.5 h-4 text-green-success mt-1 flex-shrink-0" viewBox="0 0 14 16" fill="currentColor">
                    <path d="M13.7063 3.2937C14.0969 3.68433 14.0969 4.3187 13.7063 4.70933L5.70625 12.7093C5.31563 13.1 4.68125 13.1 4.29063 12.7093L0.290627 8.70933C-0.0999985 8.3187 -0.0999985 7.68433 0.290627 7.2937C0.681252 6.90308 1.31563 6.90308 1.70625 7.2937L5 10.5843L12.2938 3.2937C12.6844 2.90308 13.3188 2.90308 13.7094 3.2937H13.7063Z"/>
                  </svg>
                  <span className="text-gray-500 text-base">Master UX Pilot for content creation and automation</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-3.5 h-4 text-green-success mt-1 flex-shrink-0" viewBox="0 0 14 16" fill="currentColor">
                    <path d="M13.7063 3.2937C14.0969 3.68433 14.0969 4.3187 13.7063 4.70933L5.70625 12.7093C5.31563 13.1 4.68125 13.1 4.29063 12.7093L0.290627 8.70933C-0.0999985 8.3187 -0.0999985 7.68433 0.290627 7.2937C0.681252 6.90308 1.31563 6.90308 1.70625 7.2937L5 10.5843L12.2938 3.2937C12.6844 2.90308 13.3188 2.90308 13.7094 3.2937H13.7063Z"/>
                  </svg>
                  <span className="text-gray-500 text-base">Create stunning visuals with Midjourney and DALL-E</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-3.5 h-4 text-green-success mt-1 flex-shrink-0" viewBox="0 0 14 16" fill="currentColor">
                    <path d="M13.7063 3.2937C14.0969 3.68433 14.0969 4.3187 13.7063 4.70933L5.70625 12.7093C5.31563 13.1 4.68125 13.1 4.29063 12.7093L0.290627 8.70933C-0.0999985 8.3187 -0.0999985 7.68433 0.290627 7.2937C0.681252 6.90308 1.31563 6.90308 1.70625 7.2937L5 10.5843L12.2938 3.2937C12.6844 2.90308 13.3188 2.90308 13.7094 3.2937H13.7063Z"/>
                  </svg>
                  <span className="text-gray-500 text-base">Build AI-powered workflows and automations</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-3.5 h-4 text-green-success mt-1 flex-shrink-0" viewBox="0 0 14 16" fill="currentColor">
                    <path d="M13.7063 3.2937C14.0969 3.68433 14.0969 4.3187 13.7063 4.70933L5.70625 12.7093C5.31563 13.1 4.68125 13.1 4.29063 12.7093L0.290627 8.70933C-0.0999985 8.3187 -0.0999985 7.68433 0.290627 7.2937C0.681252 6.90308 1.31563 6.90308 1.70625 7.2937L5 10.5843L12.2938 3.2937C12.6844 2.90308 13.3188 2.90308 13.7094 3.2937H13.7063Z"/>
                  </svg>
                  <span className="text-gray-500 text-base">Understand prompt engineering best practices</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-3.5 h-4 text-green-success mt-1 flex-shrink-0" viewBox="0 0 14 16" fill="currentColor">
                    <path d="M13.7063 3.2937C14.0969 3.68433 14.0969 4.3187 13.7063 4.70933L5.70625 12.7093C5.31563 13.1 4.68125 13.1 4.29063 12.7093L0.290627 8.70933C-0.0999985 8.3187 -0.0999985 7.68433 0.290627 7.2937C0.681252 6.90308 1.31563 6.90308 1.70625 7.2937L5 10.5843L12.2938 3.2937C12.6844 2.90308 13.3188 2.90308 13.7094 3.2937H13.7063Z"/>
                  </svg>
                  <span className="text-gray-500 text-base">Explore 50+ AI tools for different industries</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-3.5 h-4 text-green-success mt-1 flex-shrink-0" viewBox="0 0 14 16" fill="currentColor">
                    <path d="M13.7063 3.2937C14.0969 3.68433 14.0969 4.3187 13.7063 4.70933L5.70625 12.7093C5.31563 13.1 4.68125 13.1 4.29063 12.7093L0.290627 8.70933C-0.0999985 8.3187 -0.0999985 7.68433 0.290627 7.2937C0.681252 6.90308 1.31563 6.90308 1.70625 7.2937L5 10.5843L12.2938 3.2937C12.6844 2.90308 13.3188 2.90308 13.7094 3.2937H13.7063Z"/>
                  </svg>
                  <span className="text-gray-500 text-base">Implement AI in business and personal projects</span>
                </div>
              </div>
            </section>

            {/* Curriculum */}
            <section className="bg-white rounded-xl p-6 shadow-lg" style={{boxShadow: "0 0 30px 0 rgba(102, 126, 234, 0.30)"}}>
              <h2 className="text-2xl font-bold text-black mb-6">Curriculum</h2>
              <div className="border-t border-gray-300 pt-6">
                <div className="space-y-6 text-base leading-6">
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Module 1: Foundations of UX Design</h3>
                    <p className="text-black mb-3">Goal: Understand the core principles, history, and value of UX design.</p>
                    <div className="mb-3">
                      <p className="text-black font-medium">Topics:</p>
                      <ul className="text-black ml-4 space-y-1">
                        <li>• What is UX? History and evolution</li>
                        <li>• Difference between UX and UI</li>
                        <li>• UX vs CX vs Service Design</li>
                        <li>• Design Thinking & Human-Centered Design</li>
                        <li>• UX Roles & Career Paths</li>
                      </ul>
                    </div>
                    <div className="mb-4">
                      <p className="text-black font-medium">Activities:</p>
                      <ul className="text-black ml-4 space-y-1">
                        <li>• Industry case study breakdown</li>
                        <li>• Quiz: UX vs UI vs Product Design</li>
                        <li>• Assignment: Identify good vs bad UX examples</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">🎨 Module 2: UX Research & Empathy</h3>
                    <p className="text-black mb-3">Goal: Build the skill of understanding users through qualitative and quantitative research.</p>
                    <div className="mb-3">
                      <p className="text-black font-medium">Topics:</p>
                      <ul className="text-black ml-4 space-y-1">
                        <li>• User Research Methods (interviews, surveys, analytics)</li>
                        <li>• Empathy Mapping</li>
                        <li>• Creating Personas</li>
                        <li>• User Journey Mapping</li>
                        <li>• Problem Statements and How Might We</li>
                      </ul>
                    </div>
                    <div className="mb-3">
                      <p className="text-black font-medium">Tools:</p>
                      <ul className="text-black ml-4 space-y-1">
                        <li>• Google Forms / Typeform</li>
                        <li>• Useberry</li>
                        <li>• AI Persona generators (UXPin, Userforge AI)</li>
                      </ul>
                    </div>
                    <div className="mb-4">
                      <p className="text-black font-medium">Assignment:</p>
                      <p className="text-black ml-4">Create personas from real/fictional user interviews</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">🧪 Module 3: Information Architecture & Wireframing</h3>
                    <p className="text-black mb-3">Goal: Learn how to structure content and create low-fidelity designs.</p>
                    <div className="mb-3">
                      <p className="text-black font-medium">Topics:</p>
                      <ul className="text-black ml-4 space-y-1">
                        <li>• Card Sorting & Sitemap Design</li>
                        <li>• Wireframes: Low vs High Fidelity</li>
                        <li>• Navigation Patterns & Interaction Models</li>
                        <li>• Sketching Techniques</li>
                      </ul>
                    </div>
                    <div className="mb-3">
                      <p className="text-black font-medium">Tools:</p>
                      <ul className="text-black ml-4 space-y-1">
                        <li>• Figma</li>
                        <li>• Miro</li>
                        <li>• Whimsical (AI for quick flows)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-black font-medium">Activity:</p>
                      <p className="text-black ml-4">Build a wireframe using Figma & AI plugin</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Sidebar */}
          <div className="w-[395px] flex-shrink-0">
            <div className="space-y-6">
              {/* Video Preview */}
              <div className="relative">
                <div className="w-full h-48 bg-gray-800 rounded-xl overflow-hidden shadow-lg" style={{boxShadow: "0 0 30px 0 rgba(102, 126, 234, 0.30)"}}>
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/1cd454e875d2a3b28471c1a84c8fd8b60a8b0931?width=789" 
                    alt="Course Preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <button className="w-16 h-16 bg-teal-primary rounded-full flex items-center justify-center hover:bg-teal-secondary transition-colors">
                      <svg className="w-4 h-5 text-white ml-1" viewBox="0 0 16 21" fill="currentColor">
                        <path d="M3.00781 2.02349C2.42969 1.66802 1.70312 1.65631 1.11328 1.98834C0.523438 2.32037 0.15625 2.94537 0.15625 3.62506V17.3751C0.15625 18.0547 0.523438 18.6797 1.11328 19.0118C1.70312 19.3438 2.42969 19.3282 3.00781 18.9766L14.2578 12.1016C14.8164 11.7618 15.1562 11.1563 15.1562 10.5001C15.1562 9.84381 14.8164 9.24224 14.2578 8.89849L3.00781 2.02349Z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Pricing Card */}
              <div className="bg-white rounded-xl p-6 shadow-lg" style={{boxShadow: "0 0 30px 0 rgba(102, 126, 234, 0.30)"}}>
                {/* Plan Toggle */}
                <div className="bg-white rounded-xl p-1 shadow-lg mb-6" style={{boxShadow: "0 0 30px 0 rgba(102, 126, 234, 0.30)"}}>
                  <div className="grid grid-cols-2 gap-1">
                    <button className="py-2 px-4 bg-teal-secondary bg-opacity-67 text-white rounded-lg font-bold text-base">Personal</button>
                    <button className="py-2 px-4 text-gray-500 rounded-lg font-bold text-base">Team</button>
                  </div>
                </div>

                {/* Price */}
                <div className="text-center mb-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-gray-900">₹4999</span>
                    <span className="text-lg text-gray-400 line-through">₹7000</span>
                  </div>
                  <span className="inline-block bg-red-primary text-white text-sm font-medium px-3 py-1 rounded-full">
                    75% OFF - Limited Time
                  </span>
                </div>

                {/* Countdown */}
                <div className="bg-white rounded-xl p-4 shadow-lg mb-6" style={{boxShadow: "0 0 30px 0 rgba(102, 126, 234, 0.30)"}}>
                  <p className="text-center text-gray-400 text-sm mb-2">Sale ends in:</p>
                  <div className="flex items-center justify-center gap-1 text-red-primary font-bold text-base">
                    <span>23h</span>
                    <span>:</span>
                    <span>45m</span>
                    <span>:</span>
                    <span>10s</span>
                  </div>
                </div>

                {/* Buy Buttons */}
                <div className="space-y-4 mb-6">
                  <button className="w-full py-3 bg-gradient-to-r from-teal-primary to-blue-primary text-white font-bold text-base rounded-lg hover:from-teal-secondary hover:to-blue-600 transition-all">
                    Buy Now
                  </button>
                  <button className="w-full py-3 border border-black text-teal-primary font-bold text-base rounded-lg hover:bg-gray-50 transition-colors">
                    Add to Cart
                  </button>
                </div>

                {/* Benefits */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <svg className="w-4 h-3.5 text-red-primary" viewBox="0 0 18 15" fill="currentColor">
                      <path d="M0.328125 7.34258C0.328125 5.15234 2.10547 3.375 4.2957 3.375C5.34844 3.375 6.35742 3.79336 7.10117 4.53711L9.07812 6.51133L11.0523 4.53711C11.7988 3.79336 12.8078 3.375 13.8605 3.375C16.0508 3.375 17.8281 5.15234 17.8281 7.34258V8.15469C17.8281 10.3477 16.0508 12.125 13.8605 12.125C12.8078 12.125 11.7988 11.7066 11.0551 10.9629L9.07812 8.98867L7.10391 10.9629C6.35742 11.7066 5.34844 12.125 4.2957 12.125C2.10547 12.125 0.328125 10.3477 0.328125 8.15742V7.34258ZM7.83945 7.75L5.86523 5.77578C5.44961 5.36016 4.88359 5.125 4.2957 5.125C3.0707 5.125 2.07812 6.11758 2.07812 7.34258V8.15469C2.07812 9.37969 3.0707 10.3723 4.2957 10.3723C4.88359 10.3723 5.44961 10.1398 5.86523 9.72148L7.83945 7.75ZM10.3141 7.75L12.2883 9.72422C12.7039 10.1398 13.2699 10.375 13.8578 10.375C15.0828 10.375 16.0754 9.38242 16.0754 8.15742V7.34258C16.0754 6.11758 15.0828 5.125 13.8578 5.125C13.2699 5.125 12.7039 5.35742 12.2883 5.77578L10.3168 7.75H10.3141Z"/>
                    </svg>
                    <span>Lifetime access</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <svg className="w-3 h-3.5 text-red-primary" viewBox="0 0 11 15" fill="currentColor">
                      <path d="M0.765625 2.5C0.765625 1.53477 1.55039 0.75 2.51562 0.75H8.64062C9.60586 0.75 10.3906 1.53477 10.3906 2.5V13C10.3906 13.9652 9.60586 14.75 8.64062 14.75H2.51562C1.55039 14.75 0.765625 13.9652 0.765625 13V2.5ZM4.26562 13C4.26562 13.2406 4.4625 13.4375 4.70312 13.4375H6.45312C6.69375 13.4375 6.89062 13.2406 6.89062 13C6.89062 12.7594 6.69375 12.5625 6.45312 12.5625H4.70312C4.4625 12.5625 4.26562 12.7594 4.26562 13ZM8.64062 2.5H2.51562V11.25H8.64062V2.5Z"/>
                    </svg>
                    <span>Access on mobile and desktop</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <svg className="w-3.5 h-3.5 text-red-primary" viewBox="0 0 15 15" fill="currentColor">
                      <path d="M6.09767 0.949506C5.93361 0.77724 5.68752 0.711615 5.45783 0.771771C5.22814 0.831928 5.05041 1.01513 4.99025 1.24482L4.55822 2.9538L2.86291 2.47529C2.63322 2.40966 2.38713 2.47529 2.22033 2.64208C2.05353 2.80888 1.98791 3.05497 2.05353 3.28466L2.53205 4.97997L0.823065 5.41474C0.593378 5.47216 0.412909 5.65263 0.350019 5.88232C0.287128 6.11201 0.355487 6.35537 0.527753 6.51943L1.79103 7.7499L0.527753 8.98037C0.355487 9.14443 0.289862 9.39052 0.350019 9.62021C0.410175 9.8499 0.593378 10.0276 0.823065 10.0878L2.53205 10.5198L2.05353 12.2151C1.98791 12.4448 2.05353 12.6909 2.22033 12.8577C2.38713 13.0245 2.63322 13.0901 2.86291 13.0245L4.55822 12.546L4.99025 14.255C5.04768 14.4847 5.22814 14.6651 5.45783 14.728C5.68752 14.7909 5.93088 14.7226 6.09767 14.553L7.32814 13.2897L8.55861 14.553C8.72541 14.7226 8.96877 14.7909 9.19846 14.728C9.42814 14.6651 9.60588 14.4847 9.66603 14.255L10.0981 12.546L11.7934 13.0245C12.0231 13.0901 12.2692 13.0245 12.436 12.8577C12.6028 12.6909 12.6684 12.4448 12.6028 12.2151L12.1242 10.5198L13.8332 10.0878C14.0629 10.0304 14.2434 9.8499 14.3063 9.62021C14.3692 9.39052 14.3008 9.14716 14.1313 8.98037L12.868 7.7499L14.1313 6.51943C14.3008 6.35263 14.3692 6.10927 14.3063 5.87958C14.2434 5.6499 14.0629 5.47216 13.8332 5.41201L12.1242 4.97997L12.6028 3.28466C12.6684 3.05497 12.6028 2.80888 12.436 2.64208C12.2692 2.47529 12.0231 2.40966 11.7934 2.47529L10.0981 2.9538L9.6633 1.24482C9.60588 1.01513 9.42541 0.834662 9.19572 0.771771C8.96603 0.708881 8.72268 0.77724 8.55861 0.949506L7.32814 2.21279L6.09767 0.949506Z"/>
                    </svg>
                    <span>Certificate of completion</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <svg className="w-3.5 h-3.5 text-green-success" viewBox="0 0 15 15" fill="currentColor">
                      <path d="M4.60742 12.9918L4.26289 13.7984C3.75156 13.5387 3.28125 13.2188 2.85469 12.8441L3.47539 12.2234C3.81719 12.5215 4.19727 12.7812 4.60742 12.9918ZM1.43828 8.1875H0.560547C0.598828 8.76719 0.708203 9.32773 0.880469 9.8582L1.69531 9.53281C1.56133 9.10352 1.47109 8.65234 1.43828 8.1875ZM1.43828 7.3125C1.47656 6.79844 1.58047 6.30078 1.7418 5.8332L0.935156 5.48867C0.730078 6.06289 0.601562 6.67539 0.560547 7.3125H1.43828ZM2.08633 5.0293C2.29961 4.62188 2.55664 4.2418 2.85469 3.89453L2.23398 3.27383C1.85937 3.70039 1.53672 4.1707 1.27969 4.68203L2.08633 5.0293ZM11.1836 12.2234C10.8035 12.5516 10.3797 12.8332 9.92305 13.0547L10.2484 13.8695C10.8145 13.5988 11.3367 13.2516 11.8043 12.8414L11.1836 12.2234ZM3.47266 3.27656C3.85273 2.94844 4.27656 2.6668 4.7332 2.44531L4.40781 1.63047C3.8418 1.90117 3.31953 2.24844 2.85469 2.65859L3.47266 3.27656ZM12.5699 10.4707C12.3566 10.8781 12.0996 11.2582 11.8016 11.6055L12.4223 12.2262C12.7969 11.7996 13.1195 11.3266 13.3766 10.818L12.5699 10.4707ZM13.218 8.1875C13.1797 8.70156 13.0758 9.19922 12.9145 9.6668L13.7211 10.0113C13.9262 9.43438 14.0547 8.82187 14.093 8.18477H13.218V8.1875ZM9.11094 13.3828C8.68164 13.5195 8.23047 13.607 7.76562 13.6398V14.5176C8.34531 14.4793 8.90586 14.3699 9.43633 14.1977L9.11094 13.3828ZM6.89062 13.6398C6.37656 13.6016 5.87891 13.4977 5.41133 13.3363L5.0668 14.143C5.64375 14.348 6.25625 14.4766 6.89336 14.5148V13.6398H6.89062ZM12.9609 5.96719C13.0977 6.39648 13.1852 6.84766 13.218 7.3125H14.0957C14.0574 6.73281 13.948 6.17227 13.7758 5.6418L12.9609 5.96719ZM2.85469 11.6055C2.52656 11.2254 2.24492 10.8016 2.02344 10.3449L1.20859 10.6703C1.4793 11.2363 1.82656 11.7586 2.23672 12.2262L2.85469 11.6055ZM7.76562 1.86016C8.27969 1.89844 8.77461 2.00234 9.24492 2.16367L9.58945 1.35703C9.01523 1.15195 8.40273 1.02344 7.76562 0.982422V1.86016ZM5.54531 2.11719C5.97461 1.98047 6.42578 1.89297 6.89062 1.86016V0.982422C6.31094 1.0207 5.75039 1.13008 5.21992 1.30234L5.54531 2.11719ZM12.4223 3.27383L11.8016 3.89453C12.1297 4.27461 12.4113 4.69844 12.6355 5.15508L13.4504 4.82969C13.1797 4.26367 12.8324 3.74141 12.4223 3.27383ZM11.1836 3.27656L11.8043 2.65586C11.3777 2.28125 10.9074 1.95859 10.3961 1.70156L10.0516 2.5082C10.4563 2.72148 10.8391 2.97852 11.1836 3.27656Z"/>
                      <path d="M7.32812 11.4688C7.75097 11.4688 8.09375 11.126 8.09375 10.7031C8.09375 10.2803 7.75097 9.9375 7.32812 9.9375C6.90528 9.9375 6.5625 10.2803 6.5625 10.7031C6.5625 11.126 6.90528 11.4688 7.32812 11.4688Z"/>
                      <path d="M7.53867 9.28125H7.10117C6.9207 9.28125 6.77305 9.13359 6.77305 8.95312C6.77305 7.01172 8.88945 7.20586 8.88945 6.00547C8.88945 5.45859 8.40273 4.90625 7.31992 4.90625C6.52422 4.90625 6.10859 5.16875 5.70117 5.69102C5.59453 5.82773 5.39766 5.85508 5.2582 5.75664L4.9 5.50508C4.74687 5.39844 4.71133 5.18242 4.82891 5.03477C5.40859 4.29102 6.09766 3.8125 7.32266 3.8125C8.75273 3.8125 9.98594 4.62734 9.98594 6.00547C9.98594 7.85391 7.86953 7.7418 7.86953 8.95312C7.8668 9.13359 7.71914 9.28125 7.53867 9.28125Z"/>
                    </svg>
                    <span>30-day money-back guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

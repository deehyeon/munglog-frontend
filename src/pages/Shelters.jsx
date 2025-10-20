import React, { useState } from 'react';

export default function Shelters({ 
  selectedRegion, 
  setIsLocationModalOpen,
  likedItems,
  toggleLike 
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('volunteer'); // volunteer, shelter, consulting, distance

  // 임시 보호소 데이터
  const shelters = [
    {
      id: 1,
      name: '서울 강남 동물보호센터',
      distance: '500m',
      address: '서울시 강남구 역삼1동',
      phone: '02-1234-5678',
      hours: '평일 09:00-18:00',
      rating: 4.8,
      reviews: 24,
      icon: '🏠'
    },
    {
      id: 2,
      name: '강남 한마음 보호소',
      distance: '800m',
      address: '서울시 강남구 역삼2동',
      phone: '02-5678-9012',
      hours: '토일 10:00-16:00',
      rating: 4.6,
      reviews: 18,
      icon: '🏢'
    },
    {
      id: 3,
      name: '세란트 애견보호센터',
      distance: '1.2km',
      address: '서울시 강남구 삼성동',
      phone: '02-3456-7890',
      hours: '평일 10:00-17:00',
      rating: 4.7,
      reviews: 32,
      icon: '🏛️'
    }
  ];

  const filters = [
    { id: 'volunteer', label: '🤝 봉사가능', color: 'yellow' },
    { id: 'shelter', label: '🏠 보호소', color: 'red' },
    { id: 'consulting', label: '👨‍⚕️ 컨설팅', color: 'blue' },
    { id: 'distance', label: '📍 거리순', color: 'pink' }
  ];

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-12 overflow-hidden">
        {/* 발자국 아이콘들 */}
        <div className="absolute top-10 left-20 text-2xl opacity-40">🐾</div>
        <div className="absolute top-32 right-32 text-2xl opacity-40">🐾</div>
        <div className="absolute bottom-20 left-1/4 text-2xl opacity-40">🐾</div>
        <div className="absolute bottom-32 right-20 text-2xl opacity-40">🐾</div>

        <div className="relative z-10 text-center space-y-6">
          {/* 메인 메시지 */}
          <div className="inline-block bg-yellow-400 text-gray-800 px-8 py-4 rounded-full font-bold text-lg shadow-lg">
            당신하터 갈 보호소를 찾아볼까요? 🐕
          </div>

          {/* 지도 이미지 영역 */}
          <div className="flex flex-col items-center space-y-3">
            <div className="w-20 h-20 bg-blue-200 rounded-lg flex items-center justify-center text-4xl shadow-md">
              🗺️
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-700 font-semibold">보호소 지킴이도</span>
              <span className="text-2xl">🐾</span>
            </div>
            <p className="text-gray-600 text-sm">
              신뢰할 지역의 보호소 위치가 표시됩니다
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
        {/* 검색 바 */}
        <div className="flex gap-3">
          {/* 지역 선택 */}
          <button
            onClick={() => setIsLocationModalOpen(true)}
            className="flex items-center gap-2 px-4 py-3 bg-white border-2 border-gray-300 rounded-xl hover:border-yellow-400 transition-colors font-medium"
          >
            📍 {selectedRegion}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* 검색 입력 */}
          <div className="flex-1 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="보호소 이름으로 검색"
              className="w-full px-4 py-3 pl-12 border-2 border-gray-300 rounded-xl focus:border-yellow-400 focus:outline-none"
            />
            <svg 
              className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* 필터 버튼들 */}
        <div className="flex gap-3 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2.5 rounded-full font-medium transition-all ${
                activeFilter === filter.id
                  ? 'bg-yellow-400 text-gray-800 shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Shelter List */}
      <div className="space-y-4">
        {shelters.map((shelter) => (
          <div
            key={shelter.id}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex gap-6">
              {/* 보호소 아이콘 */}
              <div className="w-24 h-24 bg-gray-100 rounded-xl flex items-center justify-center text-5xl flex-shrink-0">
                {shelter.icon}
              </div>

              {/* 보호소 정보 */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800">
                    {shelter.name}
                  </h3>
                  <button
                    onClick={() => toggleLike(shelter.id)}
                    className="text-2xl hover:scale-110 transition-transform"
                  >
                    {likedItems.has(shelter.id) ? '❤️' : '🤍'}
                  </button>
                </div>

                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500 font-semibold">📍 {shelter.distance}</span>
                    <span>{shelter.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>📞 {shelter.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>🕐 {shelter.hours}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500 text-xl">⭐</span>
                    <span className="font-bold text-gray-800">{shelter.rating}</span>
                    <span className="text-gray-500 text-sm">({shelter.reviews})</span>
                  </div>
                  <button className="text-yellow-500 hover:text-yellow-600 font-medium flex items-center gap-1 group">
                    자세히
                    <svg 
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
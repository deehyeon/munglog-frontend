import React, { useState } from 'react';

export default function Adoption({ 
  selectedRegion, 
  setIsLocationModalOpen,
  likedItems,
  toggleLike 
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [ageFilter, setAgeFilter] = useState('all');
  const [genderFilter, setGenderFilter] = useState('all');
  const [healthFilter, setHealthFilter] = useState('all');

  // 임시 분양 강아지 데이터
  const dogs = [
    {
      id: 1,
      name: '뽀삐',
      breed: '말티즈',
      region: '강남구',
      age: '2년',
      gender: '여아',
      weight: '3kg',
      adopted: false,
      emoji: '🐕'
    },
    {
      id: 2,
      name: '초코',
      breed: '푸들',
      region: '서초구',
      age: '1년',
      gender: '남아',
      weight: '4kg',
      adopted: false,
      emoji: '🐩'
    },
    {
      id: 3,
      name: '버터',
      breed: '골든 리트리버',
      region: '송파구',
      age: '3년',
      gender: '남아',
      weight: '25kg',
      adopted: false,
      emoji: '🦮'
    },
    {
      id: 4,
      name: '하늘',
      breed: '시츄',
      region: '강동구',
      age: '4년',
      gender: '여아',
      weight: '5kg',
      adopted: true,
      emoji: '🐕'
    },
    {
      id: 5,
      name: '봄이',
      breed: '말티즈',
      region: '강남구',
      age: '2년',
      gender: '여아',
      weight: '3kg',
      adopted: false,
      emoji: '🐕'
    },
    {
      id: 6,
      name: '구름',
      breed: '비글',
      region: '서초구',
      age: '1년',
      gender: '남아',
      weight: '8kg',
      adopted: false,
      emoji: '🐶'
    },
    {
      id: 7,
      name: '별이',
      breed: '푸들',
      region: '송파구',
      age: '2년',
      gender: '여아',
      weight: '4kg',
      adopted: false,
      emoji: '🐩'
    },
    {
      id: 8,
      name: '해피',
      breed: '말티즈',
      region: '강남구',
      age: '3년',
      gender: '남아',
      weight: '3kg',
      adopted: false,
      emoji: '🐕'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-white rounded-2xl shadow-md p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          🏠 새로운 가족을 찾아요
        </h1>
        <p className="text-gray-600">
          따뜻한 가정에서 사랑받을 반려견들이 기다리고 있어요
        </p>
      </div>

      {/* Filter Section */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          {/* 지역 선택 */}
          <button
            onClick={() => setIsLocationModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-yellow-400 text-gray-800 rounded-full font-medium hover:bg-yellow-500 transition-colors"
          >
            📍 {selectedRegion}
          </button>

          {/* 나이 필터 */}
          <select
            value={ageFilter}
            onChange={(e) => setAgeFilter(e.target.value)}
            className="px-4 py-2 border-2 border-gray-300 rounded-full font-medium hover:border-yellow-400 transition-colors cursor-pointer focus:outline-none focus:border-yellow-400"
          >
            <option value="all">나이 전체</option>
            <option value="1">1년 미만</option>
            <option value="1-3">1-3년</option>
            <option value="3+">3년 이상</option>
          </select>

          {/* 성별 필터 */}
          <select
            value={genderFilter}
            onChange={(e) => setGenderFilter(e.target.value)}
            className="px-4 py-2 border-2 border-gray-300 rounded-full font-medium hover:border-yellow-400 transition-colors cursor-pointer focus:outline-none focus:border-yellow-400"
          >
            <option value="all">성별 전체</option>
            <option value="male">남아</option>
            <option value="female">여아</option>
          </select>

          {/* 건강 필터 */}
          <select
            value={healthFilter}
            onChange={(e) => setHealthFilter(e.target.value)}
            className="px-4 py-2 border-2 border-gray-300 rounded-full font-medium hover:border-yellow-400 transition-colors cursor-pointer focus:outline-none focus:border-yellow-400"
          >
            <option value="all">건강 전체</option>
            <option value="excellent">매우 건강</option>
            <option value="good">건강</option>
            <option value="fair">양호</option>
          </select>

          {/* 검색바 */}
          <div className="flex-1 min-w-[200px] relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="품종, 이름으로 검색"
              className="w-full px-4 py-2 pl-10 border-2 border-gray-300 rounded-full focus:outline-none focus:border-yellow-400"
            />
            <svg 
              className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* 분양글 작성 버튼 */}
          <button className="flex items-center gap-2 px-6 py-2 bg-yellow-400 text-gray-800 rounded-full font-bold hover:bg-yellow-500 transition-colors shadow-md ml-auto whitespace-nowrap">
            ✍️ 분양글 작성
          </button>
        </div>
      </div>

      {/* Dogs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {dogs.map((dog) => (
          <div
            key={dog.id}
            className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden relative"
          >
            {/* 찜하기 버튼 */}
            <button
              onClick={() => toggleLike(dog.id)}
              className="absolute top-3 right-3 z-10 bg-white rounded-full p-2 shadow-md hover:scale-110 transition-transform"
            >
              <span className="text-xl">
                {likedItems.has(dog.id) ? '❤️' : '🤍'}
              </span>
            </button>

            {/* 분양완료 배지 */}
            {dog.adopted && (
              <div className="absolute top-3 left-3 z-10 bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-bold">
                분양완료
              </div>
            )}

            {/* 강아지 이미지 */}
            <div className="h-48 flex items-center justify-center text-8xl bg-yellow-200">
              {dog.emoji}
            </div>

            {/* 강아지 정보 */}
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-800">{dog.name}</h3>
                <span className="text-sm font-medium text-yellow-700">{dog.region}</span>
              </div>

              <p className="text-gray-700 mb-4">{dog.breed}</p>

              {/* 상세 정보 */}
              <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                <div>
                  <p className="text-xs text-gray-600">나이</p>
                  <p className="font-bold text-gray-800">{dog.age}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600">성별</p>
                  <p className="font-bold text-gray-800">{dog.gender}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600">체중</p>
                  <p className="font-bold text-gray-800">{dog.weight}</p>
                </div>
              </div>

              {/* 분양 신청 버튼 */}
              {dog.adopted ? (
                <button 
                  disabled
                  className="w-full py-3 bg-gray-400 text-white rounded-full font-bold cursor-not-allowed"
                >
                  분양 완료됨
                </button>
              ) : (
                <button className="w-full py-3 bg-yellow-400 text-gray-800 rounded-full font-bold hover:bg-yellow-500 transition-colors shadow-md">
                  분양 신청하기
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {dogs.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl shadow-md">
          <div className="text-6xl mb-4">🐕</div>
          <p className="text-gray-600 text-lg font-medium">
            현재 분양 가능한 강아지가 없습니다
          </p>
          <p className="text-gray-500 text-sm mt-2">
            조금만 기다려주세요!
          </p>
        </div>
      )}
    </div>
  );
}
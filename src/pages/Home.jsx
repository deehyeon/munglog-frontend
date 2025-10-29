import React, { useState } from 'react';
import AdoptionDetailModal from '../components/AdoptionDetailModal';

export default function Home({ setCurrentPage, selectedRegion }) {
  const [selectedDog, setSelectedDog] = useState(null);

  // 모의 데이터
  const featuredDogs = [
    { id: 1, name: '뽀삐', breed: '말티즈', age: '2년', image: '/logo/돈이 캐릭터 2.svg' },
    { id: 2, name: '초코', breed: '푸들', age: '0년', image: '/logo/돈이 캐릭터 2.svg' },
    { id: 3, name: '버터', breed: '골든 리트리버', age: '2년', image: '/logo/돈이 캐릭터 2.svg' },
    { id: 4, name: '하늘', breed: '시츄', age: '2년', image: '/logo/돈이 캐릭터 2.svg' }
  ];

  const shelters = [
    { id: 1, name: '강남 보호소', location: '서울 강남구', dogs: 24 },
    { id: 2, name: '서초 보호소', location: '서울 서초구', dogs: 18 },
    { id: 3, name: '송파 보호소', location: '서울 송파구', dogs: 31 }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-yellow-400 to-orange-400 rounded-3xl overflow-hidden shadow-xl">
        <div className="relative z-10 px-8 py-16 md:py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              새로운 가족을 기다리는
              <br />
              소중한 생명들
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              유기견들에게 따뜻한 가정을 선물해주세요.
              {selectedRegion}에서 새 가족을 기다리고 있습니다.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => setCurrentPage('adoption')}
                className="px-8 py-4 bg-gray-800 text-white rounded-full font-bold text-lg hover:bg-gray-700 transition-colors shadow-lg"
              >
                분양하기
              </button>
              <button
                onClick={() => setCurrentPage('shelters')}
                className="px-8 py-4 bg-white text-gray-800 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                보호소 찾기
              </button>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3 hidden md:flex items-center justify-center">
          <img
            src="/logo/돈이 캐릭터 2.svg"
            alt="Dog character"
            className="w-64 h-64 object-contain opacity-90"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      </section>

      {/* Featured Dogs Section */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-800">이번 주 추천 친구들</h2>
          <button
            onClick={() => setCurrentPage('adoption')}
            className="text-yellow-500 hover:text-yellow-600 font-semibold flex items-center gap-2"
          >
            더보기
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredDogs.map((dog) => (
            <div
              key={dog.id}
              onClick={() => setSelectedDog(dog)}
              className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                <img
                  src={dog.image}
                  alt={dog.name}
                  className="w-40 h-40 object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-1">{dog.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{dog.breed}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>나이: {dog.age}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-white rounded-3xl shadow-sm border border-gray-200 p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">멍로그가 걸어온 길</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-yellow-500 mb-2">1,247</div>
            <p className="text-gray-600">성공한 입양</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-yellow-500 mb-2">156</div>
            <p className="text-gray-600">협력 보호소</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-yellow-500 mb-2">892</div>
            <p className="text-gray-600">현재 입양 대기중</p>
          </div>
        </div>
      </section>

      {/* Nearby Shelters Section */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-800">{selectedRegion} 근처 보호소</h2>
          <button
            onClick={() => setCurrentPage('shelters')}
            className="text-yellow-500 hover:text-yellow-600 font-semibold flex items-center gap-2"
          >
            더보기
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {shelters.map((shelter) => (
            <div
              key={shelter.id}
              onClick={() => setCurrentPage('shelters')}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-4">
                <span className="text-3xl">🏠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{shelter.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{shelter.location}</p>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-yellow-500 font-semibold">{shelter.dogs}마리</span>
                <span className="text-gray-500">입양 대기중</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">함께 만드는 행복한 세상</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          버려진 생명들에게 새로운 시작을 선물해주세요.
          여러분의 작은 관심이 큰 변화를 만듭니다.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setCurrentPage('missing')}
            className="px-8 py-4 bg-yellow-400 text-gray-800 rounded-full font-bold text-lg hover:bg-yellow-500 transition-colors"
          >
            실종 신고
          </button>
          <button
            onClick={() => setCurrentPage('shelters')}
            className="px-8 py-4 bg-white bg-opacity-20 backdrop-blur-sm text-white rounded-full font-bold text-lg hover:bg-opacity-30 transition-colors border border-white border-opacity-30"
          >
            봉사 신청
          </button>
        </div>
      </section>

      {/* Modal */}
      {selectedDog && (
        <AdoptionDetailModal
          dog={selectedDog}
          onClose={() => setSelectedDog(null)}
        />
      )}
    </div>
  );
}

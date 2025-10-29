import React from 'react';

export default function AdoptionDetail({ setCurrentPage, selectedDogId }) {
  // 실제로는 selectedDogId로 데이터를 가져와야 하지만 지금은 하드코딩
  const dog = {
    id: 1,
    name: '뽀삐',
    breed: '말티즈',
    region: '강남구',
    age: '2년',
    gender: '여아',
    weight: '3kg',
    description: '안녕하세요! 저는 밝고 활발한 성격의 뽀삐입니다. 사람을 정말 좋아하고 다른 강아지들과도 잘 어울려요. 산책을 좋아하고 간식을 먹는 것을 가장 좋아합니다. 새로운 가족을 만나는 그 날을 손꼽아 기다리고 있어요!',
    characteristics: ['활발함', '사람 좋아함', '산책 좋아함', '사교적'],
    health: '건강 상태 양호',
    vaccinated: '접종 완료',
    neutered: '중성화 완료',
    images: [
      '/logo/돈이 캐릭터 2.svg',
      '/logo/돈이 캐릭터 2.svg',
      '/logo/돈이 캐릭터 2.svg'
    ]
  };

  return (
    <div className="max-w-6xl mx-auto py-8">
      {/* Back Button */}
      <button
        onClick={() => setCurrentPage('adoption')}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6 transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span className="font-medium">목록으로 돌아가기</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Images */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="relative bg-white rounded-3xl border-2 border-gray-800 overflow-hidden shadow-lg">
            <div className="aspect-square flex items-center justify-center p-8">
              <img
                src={dog.images[0]}
                alt={dog.name}
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="60" font-size="60">🐶</text></svg>';
                }}
              />
            </div>
            <button className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg hover:scale-110 transition-transform">
              <span className="text-2xl">❤️</span>
            </button>
          </div>

          {/* Thumbnail Images */}
          <div className="grid grid-cols-3 gap-3">
            {dog.images.slice(1).map((image, index) => (
              <div key={index} className="bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 cursor-pointer hover:border-yellow-400 transition-colors">
                <div className="aspect-square flex items-center justify-center p-4">
                  <img
                    src={image}
                    alt={`${dog.name} ${index + 2}`}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="60" font-size="60">🐶</text></svg>';
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Information */}
        <div className="space-y-6">
          {/* Title Section */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{dog.name}</h1>
            <p className="text-xl text-gray-600 mb-4">{dog.breed}</p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{dog.region}</span>
            </div>
          </div>

          {/* Basic Info */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <h2 className="text-lg font-bold text-gray-800 mb-4">기본 정보</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm text-gray-600 mb-1">나이</p>
                <p className="text-lg font-bold text-gray-800">{dog.age}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm text-gray-600 mb-1">성별</p>
                <p className="text-lg font-bold text-gray-800">{dog.gender}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm text-gray-600 mb-1">체중</p>
                <p className="text-lg font-bold text-gray-800">{dog.weight}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm text-gray-600 mb-1">건강 상태</p>
                <p className="text-lg font-bold text-green-600">{dog.health}</p>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-gray-700">{dog.vaccinated}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-gray-700">{dog.neutered}</span>
              </div>
            </div>
          </div>

          {/* Characteristics */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <h2 className="text-lg font-bold text-gray-800 mb-4">성격 특징</h2>
            <div className="flex flex-wrap gap-2">
              {dog.characteristics.map((char, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium"
                >
                  #{char}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <h2 className="text-lg font-bold text-gray-800 mb-4">소개</h2>
            <p className="text-gray-700 leading-relaxed">{dog.description}</p>
          </div>

          {/* Action Buttons */}
          <div className="sticky bottom-6 bg-white rounded-2xl p-6 shadow-lg border border-gray-200 space-y-3">
            <button className="w-full py-4 bg-yellow-400 text-gray-800 rounded-xl text-lg font-bold hover:bg-yellow-500 transition-colors shadow-md">
              분양 신청하기
            </button>
            <div className="grid grid-cols-2 gap-3">
              <button className="py-3 bg-gray-100 text-gray-700 rounded-xl text-sm font-bold hover:bg-gray-200 transition-colors">
                문의하기
              </button>
              <button className="py-3 bg-gray-100 text-gray-700 rounded-xl text-sm font-bold hover:bg-gray-200 transition-colors">
                공유하기
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Dogs Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">비슷한 친구들</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="h-40 bg-gray-100 flex items-center justify-center">
                <img
                  src="/logo/돈이 캐릭터 2.svg"
                  alt="Similar dog"
                  className="w-32 h-32 object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-800 mb-1">강아지 {item}</h3>
                <p className="text-sm text-gray-600">말티즈 • 2년</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import DoniCharacter2 from '../components/logo/돈이 캐릭터 2.svg';

export default function AdoptionDetail({ dog, setCurrentPage }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  if (!dog) {
    setCurrentPage('adoption');
    return null;
  }

  const images = [
    DoniCharacter2,
    DoniCharacter2,
    DoniCharacter2
  ];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <button
          onClick={() => setCurrentPage('adoption')}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="font-medium">뒤로 가기</span>
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-200">
              <div className="aspect-square flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-12">
                <img
                  src={images[currentImageIndex]}
                  alt={dog.name}
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all"
                  >
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all"
                  >
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              {/* Like Button */}
              <button
                onClick={() => setIsLiked(!isLiked)}
                className="absolute top-6 right-6 bg-white rounded-full p-3 shadow-lg hover:scale-110 transition-transform"
              >
                <span className="text-2xl">{isLiked ? '❤️' : '🤍'}</span>
              </button>
            </div>

            {/* Thumbnail Images */}
            {images.length > 1 && (
              <div className="flex gap-3">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-1 aspect-square rounded-2xl overflow-hidden border-2 transition-all ${
                      currentImageIndex === index
                        ? 'border-yellow-400 shadow-md'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="w-full h-full bg-gray-50 flex items-center justify-center p-4">
                      <img src={img} alt={`${dog.name} ${index + 1}`} className="w-full h-full object-contain" />
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Dog Information */}
          <div className="space-y-6">
            {/* Title and Basic Info */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{dog.name}</h1>
                  <p className="text-lg text-gray-600">{dog.breed}</p>
                </div>
                <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-bold">
                  {dog.region}
                </span>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-1">나이</p>
                  <p className="text-lg font-bold text-gray-900">{dog.age}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-1">성별</p>
                  <p className="text-lg font-bold text-gray-900">{dog.gender}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-1">체중</p>
                  <p className="text-lg font-bold text-gray-900">{dog.weight}</p>
                </div>
              </div>
            </div>

            {/* Detailed Information */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">상세 정보</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-lg">🐶</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 mb-1">견종</p>
                      <p className="text-gray-600">{dog.breed}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-lg">🎂</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 mb-1">나이</p>
                      <p className="text-gray-600">{dog.age}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-lg">⚖️</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 mb-1">체중</p>
                      <p className="text-gray-600">{dog.weight}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-lg">📍</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 mb-1">지역</p>
                      <p className="text-gray-600">{dog.region}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">설명</h3>
                <p className="text-gray-600 leading-relaxed">
                  {dog.description || '건강하고 활발한 성격의 강아지입니다. 사람을 좋아하고 다른 동물들과도 잘 어울립니다. 사랑을 많이 받고 싶어하는 아이로, 새로운 가족을 기다리고 있습니다.'}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="sticky bottom-6 bg-white rounded-3xl p-6 shadow-xl border border-gray-200">
              <div className="space-y-3">
                <button className="w-full py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-2xl text-lg transition-colors shadow-md">
                  💕 분양 신청하기
                </button>
                <button className="w-full py-4 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold rounded-2xl text-lg transition-colors">
                  💬 분양자와 채팅하기
                </button>
              </div>
              <p className="text-center text-sm text-gray-500 mt-4">
                좋은 가족을 만나기 위해 신중하게 결정해주세요
              </p>
            </div>
          </div>
        </div>

        {/* Additional Information Sections */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-200">
            <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
              <span className="text-2xl">✅</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">건강 검진 완료</h3>
            <p className="text-sm text-gray-600">정기적인 건강 검진을 받았으며 모든 예방접종이 완료되었습니다.</p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-200">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
              <span className="text-2xl">🏠</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">실내 훈련 완료</h3>
            <p className="text-sm text-gray-600">기본적인 실내 배변 훈련이 완료되어 바로 적응 가능합니다.</p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-200">
            <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">친화적인 성격</h3>
            <p className="text-sm text-gray-600">사람과 다른 반려동물과도 잘 어울리는 온순한 성격입니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

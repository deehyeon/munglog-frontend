import React from 'react';

export default function AdoptionDetailModal({ isOpen, onClose, dog }) {
  if (!isOpen || !dog) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          {/* Header */}
          <h2 className="text-2xl font-bold text-center mb-8">새로운 가족을 찾아요!</h2>

          {/* Dog Image */}
          <div className="relative mb-6">
            <div className="border-2 border-gray-800 rounded-3xl p-8 bg-white">
              <button
                onClick={() => {}}
                className="absolute top-4 right-4 z-10 text-3xl"
              >
                ❤️
              </button>
              <div className="flex items-center justify-center">
                <img 
                  src={dog.image} 
                  alt={dog.name}
                  className="w-96 h-96 object-contain"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="60" font-size="60">🐶</text></svg>';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            {/* Name and Breed */}
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 bg-gray-200 px-4 py-2 rounded-lg">
                  이름
                </label>
                <input
                  type="text"
                  value={dog.name}
                  readOnly
                  className="w-full px-4 py-2 bg-gray-100 rounded-lg text-gray-800"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2 bg-gray-200 px-4 py-2 rounded-lg">
                  견종
                </label>
                <input
                  type="text"
                  value={dog.breed}
                  readOnly
                  className="w-full px-4 py-2 bg-gray-100 rounded-lg text-gray-800"
                />
              </div>
            </div>

            {/* Age and Gender */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 bg-gray-200 px-4 py-2 rounded-lg">
                  나이
                </label>
                <input
                  type="text"
                  value={dog.age}
                  readOnly
                  className="w-full px-4 py-2 bg-gray-100 rounded-lg text-gray-800"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 bg-gray-200 px-4 py-2 rounded-lg text-center">
                  성별
                </label>
                <input
                  type="text"
                  value={dog.gender}
                  readOnly
                  className="w-full px-4 py-2 bg-gray-100 rounded-lg text-gray-800 text-center"
                />
              </div>
            </div>

            {/* Weight and Region */}
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 bg-gray-200 px-4 py-2 rounded-lg">
                  체중
                </label>
                <input
                  type="text"
                  value={dog.weight}
                  readOnly
                  className="w-full px-4 py-2 bg-gray-100 rounded-lg text-gray-800"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2 bg-gray-200 px-4 py-2 rounded-lg">
                  지역
                </label>
                <input
                  type="text"
                  value={dog.region}
                  readOnly
                  className="w-full px-4 py-2 bg-gray-100 rounded-lg text-gray-800"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 bg-gray-200 px-4 py-2 rounded-lg">
                상세 설명
              </label>
              <textarea
                value={dog.description || '건강하고 활발한 성격의 강아지입니다. 사람을 좋아하고 다른 동물들과도 잘 어울립니다.'}
                readOnly
                className="w-full px-4 py-3 bg-gray-100 rounded-lg text-gray-800 resize-none h-32"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <button
              onClick={onClose}
              className="py-3 bg-gray-300 text-gray-700 rounded-full text-base font-bold hover:bg-gray-400 transition-colors"
            >
              닫기
            </button>
            <button
              className="py-3 bg-yellow-400 text-gray-800 rounded-full text-base font-bold hover:bg-yellow-500 transition-colors"
            >
              분양 신청하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

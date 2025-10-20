import React, { useState } from 'react';

export default function Missing({ 
  selectedRegion, 
  setIsLocationModalOpen,
  likedItems,
  toggleLike 
}) {
  const [activeTab, setActiveTab] = useState('missing'); // missing or found
  const [sortOrder, setSortOrder] = useState('latest'); // latest, oldest, popular
  const [showResolved, setShowResolved] = useState(false);

  // 임시 게시물 데이터
  const posts = [
    {
      id: 1,
      type: 'missing',
      title: '강남역 근처에서 밥리즈 잃어버렸어요',
      location: '강남구 역삼동',
      date: '2024.10.14',
      likes: 12,
      comments: 8,
      status: '실종',
      resolved: false,
      image: '🐕'
    },
    {
      id: 2,
      type: 'missing',
      title: '진돗개 찾습니다',
      location: '송파구 잠실동',
      date: '2024.10.12',
      likes: 8,
      comments: 5,
      status: '실종',
      resolved: false,
      image: '🐕'
    },
    {
      id: 3,
      type: 'found',
      title: '강남역에서 보호중인 말티즈',
      location: '강남구 역삼동',
      date: '2024.10.15',
      likes: 15,
      comments: 12,
      status: '보호중',
      resolved: false,
      image: '🐕'
    }
  ];

  const filteredPosts = posts.filter(post => {
    if (activeTab === 'missing' && post.type !== 'missing') return false;
    if (activeTab === 'found' && post.type !== 'found') return false;
    if (!showResolved && post.resolved) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-white rounded-2xl shadow-md p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          실종 동물을 찾습니다!
        </h1>
        <p className="text-gray-600">
          동물이 실종되었다면 '<span className="font-semibold text-red-500">실종 게시판</span>'에, 
          발견하여 보호중이라면 '<span className="font-semibold text-blue-500">보호게시판</span>'에 
          글을 작성해주세요
        </p>
      </div>

      {/* Tab Section */}
      <div className="flex gap-3">
        <button
          onClick={() => setActiveTab('missing')}
          className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
            activeTab === 'missing'
              ? 'bg-red-500 text-white shadow-lg'
              : 'bg-white text-gray-600 hover:bg-gray-100'
          }`}
        >
          🔴 실종 게시판
        </button>
        <button
          onClick={() => setActiveTab('found')}
          className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
            activeTab === 'found'
              ? 'bg-blue-500 text-white shadow-lg'
              : 'bg-white text-gray-600 hover:bg-gray-100'
          }`}
        >
          🏠 보호 게시판
        </button>
      </div>

      {/* Filter and Write Button Section */}
      <div className="bg-white rounded-2xl shadow-md p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            {/* 지역 선택 */}
            <button
              onClick={() => setIsLocationModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-yellow-400 text-gray-800 rounded-full font-medium hover:bg-yellow-500 transition-colors"
            >
              📍 {selectedRegion}
            </button>

            {/* 정렬 선택 */}
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="px-4 py-2 bg-gray-800 text-white rounded-full font-medium hover:bg-gray-700 transition-colors cursor-pointer"
            >
              <option value="latest">최신순</option>
              <option value="oldest">오래된순</option>
              <option value="popular">인기순</option>
            </select>
          </div>

          {/* 글쓰기 버튼 */}
          <button className="flex items-center gap-2 px-6 py-2 bg-yellow-400 text-gray-800 rounded-full font-bold hover:bg-yellow-500 transition-colors shadow-md">
            ✍️ 글쓰기
          </button>
        </div>

        {/* 체크박스 옵션 */}
        <label className="flex items-center gap-2 text-gray-600 cursor-pointer hover:text-gray-800">
          <input
            type="checkbox"
            checked={showResolved}
            onChange={(e) => setShowResolved(e.target.checked)}
            className="w-4 h-4 rounded border-gray-300 text-yellow-400 focus:ring-yellow-400"
          />
          <span>주인을 찾은 강아지도 보기</span>
        </label>
      </div>

      {/* Posts List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden"
          >
            <div className="flex">
              {/* 이미지 영역 */}
              <div className="w-40 h-40 bg-yellow-300 flex items-center justify-center text-6xl flex-shrink-0">
                {post.image}
              </div>

              {/* 내용 영역 */}
              <div className="flex-1 p-5">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-800 flex-1 pr-2">
                    {post.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    post.type === 'missing' 
                      ? 'bg-yellow-400 text-gray-800' 
                      : 'bg-blue-400 text-white'
                  }`}>
                    {post.status}
                  </span>
                </div>

                <div className="space-y-2 text-sm text-gray-700 mb-4">
                  <div className="flex items-center gap-2">
                    📍 {post.location}
                  </div>
                  <div className="flex items-center gap-2">
                    🕐 {post.date}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-gray-600">
                    <button
                      onClick={() => toggleLike(post.id)}
                      className="flex items-center gap-1 hover:text-red-500 transition-colors"
                    >
                      <span className={likedItems.has(post.id) ? 'text-red-500' : ''}>
                        {likedItems.has(post.id) ? '❤️' : '🤍'}
                      </span>
                      <span className="text-sm">{post.likes}</span>
                    </button>
                    <div className="flex items-center gap-1">
                      💬 <span className="text-sm">{post.comments}</span>
                    </div>
                  </div>

                  <button className="text-yellow-600 hover:text-yellow-700 font-medium text-sm flex items-center gap-1 group">
                    자세히 보기
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

      {/* Empty State */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl shadow-md">
          <div className="text-6xl mb-4">🐕</div>
          <p className="text-gray-600 text-lg font-medium">
            아직 게시물이 없습니다
          </p>
          <p className="text-gray-500 text-sm mt-2">
            첫 번째 게시물을 작성해보세요!
          </p>
        </div>
      )}
    </div>
  );
}
import React, { useState } from 'react';

export default function Chat({ setCurrentPage }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedChat, setSelectedChat] = useState(null);

  // 채팅 목록 데이터
  const chatList = [
    {
      id: 1,
      name: '당근',
      lastMessage: '네 잘부탁드려요~~ 그 쪽했습니다.',
      time: '오전 07:03',
      unread: 0,
      verified: true,
      hasImage: true
    },
    {
      id: 2,
      name: '푸른하늘투르네',
      lastMessage: '네 감사합니다~!!',
      time: '3월 전',
      unread: 0,
      hasImage: true
    },
    {
      id: 3,
      name: '당근페이',
      lastMessage: '계좌로 보냈어요. 📱 토스나는 3734...',
      time: '3일 전',
      unread: 0,
      isPay: true,
      hasImage: true
    },
    {
      id: 4,
      name: '미미머',
      lastMessage: '네 감사합니다다~!!',
      time: '평처들 · 1주 전',
      unread: 0,
      hasImage: true
    },
    {
      id: 5,
      name: '무항철구',
      lastMessage: '스타몰을 보냈어요.',
      time: '광처들 · 1주 전',
      unread: 2,
      hasImage: true
    },
    {
      id: 6,
      name: 'yukdkd',
      lastMessage: '아~ 네',
      time: '매대들 · 1일 전',
      unread: 0,
      hasImage: true
    },
    {
      id: 7,
      name: '달콩고수',
      lastMessage: '안전이요.',
      time: '희대들 · 1일 전',
      unread: 0,
      hasImage: true
    },
    {
      id: 8,
      name: '노녹',
      lastMessage: '감사합니다~!!!! 쪽 쓰겠습니다!!',
      time: '유한들 · 1일 전',
      unread: 0,
      hasImage: true
    },
    {
      id: 9,
      name: '현양성영',
      lastMessage: '도움 거듭합각니다',
      time: '매대들 · 2일 전',
      unread: 0,
      hasImage: true
    },
    {
      id: 10,
      name: '수빈이',
      lastMessage: '넵',
      time: '스물금 · 2일 전',
      unread: 0,
      hasImage: true
    }
  ];

  const filteredChats = chatList.filter(chat =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-[calc(100vh-200px)] bg-white border border-gray-200 rounded-lg overflow-hidden -mx-6">
      {/* 왼쪽 채팅 리스트 */}
      <div className="w-[380px] border-r border-gray-200 flex flex-col">
        {/* 상단 헤더 */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-xl">👤</span>
              </div>
              <h2 className="text-lg font-bold">뽕뽕뽕</h2>
              <button className="text-gray-400">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* 검색창 */}
          <div className="relative">
            <input
              type="text"
              placeholder="안위된 메시지만 보기"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* 채팅 목록 */}
        <div className="flex-1 overflow-y-auto">
          {filteredChats.map((chat) => (
            <button
              key={chat.id}
              onClick={() => setSelectedChat(chat.id)}
              className={`w-full p-4 flex items-start gap-3 hover:bg-gray-50 transition-colors border-b border-gray-100 ${
                selectedChat === chat.id ? 'bg-orange-50' : ''
              }`}
            >
              {/* 프로필 이미지 */}
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400"></div>
                </div>
              </div>

              {/* 채팅 정보 */}
              <div className="flex-1 min-w-0 text-left">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1">
                    <span className="font-semibold text-sm text-gray-900">{chat.name}</span>
                    {chat.verified && (
                      <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                    {chat.isPay && (
                      <span className="text-xs bg-orange-100 text-orange-600 px-1.5 py-0.5 rounded">pay</span>
                    )}
                  </div>
                  <span className="text-xs text-gray-500 flex-shrink-0">{chat.time}</span>
                </div>
                <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
              </div>

              {/* 썸네일 이미지 */}
              {chat.hasImage && (
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200"></div>
                </div>
              )}

              {/* 읽지 않은 메시지 수 */}
              {chat.unread > 0 && (
                <div className="absolute top-4 right-4 w-5 h-5 bg-orange-500 text-white text-xs rounded-full flex items-center justify-center font-semibold">
                  {chat.unread}
                </div>
              )}
            </button>
          ))}
        </div>

        {/* 하단 정보 */}
        <div className="p-3 border-t border-gray-200 text-center">
          <button className="text-xs text-gray-500 hover:underline">
            자주묻는 질문 →
          </button>
        </div>
      </div>

      {/* 오른쪽 채팅 상세 */}
      <div className="flex-1 flex flex-col items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
            <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <p className="text-gray-500 text-base">채팅할 상대를 선택해주세요.</p>
        </div>
      </div>
    </div>
  );
}

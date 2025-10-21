import React, { useState } from 'react';

export default function ShelterSignup({ setCurrentPage }) {
  const [formData, setFormData] = useState({
    // 로그인 정보
    email: '',
    password: '',
    passwordConfirm: '',
    
    // 보호소 기본 정보
    shelterName: '',
    address: '',
    managerName: '',
    phone: '',
    
    // 홈페이지 링크 (최대 3개)
    websiteLinks: [''],
    
    // 운영 정보
    openingHours: '',
    description: '',
    
    // 봉사 정보
    volunteerDays: [],
    volunteerTime: '',
    
    // 파일
    facilityPhotos: [],
    dogPhotos: []
  });

  const [agreements, setAgreements] = useState({
    all: false,
    age: false,
    terms: false,
    privacy: false,
    marketing: false,
    robot: false
  });

  const [verification, setVerification] = useState({
    emailVerified: false,
    phoneVerified: false
  });

  // 파일 미리보기 URL
  const [facilityPreviews, setFacilityPreviews] = useState([]);
  const [dogPreviews, setDogPreviews] = useState([]);

  const weekDays = ['월', '화', '수', '목', '금', '토', '일'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDayToggle = (day) => {
    setFormData(prev => ({
      ...prev,
      volunteerDays: prev.volunteerDays.includes(day)
        ? prev.volunteerDays.filter(d => d !== day)
        : [...prev.volunteerDays, day]
    }));
  };

  // 웹사이트 링크 추가
  const addWebsiteLink = () => {
    if (formData.websiteLinks.length < 3) {
      setFormData(prev => ({
        ...prev,
        websiteLinks: [...prev.websiteLinks, '']
      }));
    }
  };

  // 웹사이트 링크 제거
  const removeWebsiteLink = (index) => {
    setFormData(prev => ({
      ...prev,
      websiteLinks: prev.websiteLinks.filter((_, i) => i !== index)
    }));
  };

  // 웹사이트 링크 변경
  const handleWebsiteLinkChange = (index, value) => {
    setFormData(prev => ({
      ...prev,
      websiteLinks: prev.websiteLinks.map((link, i) => i === index ? value : link)
    }));
  };

  // 파일 업로드 처리 (시설 사진)
  const handleFacilityPhotoChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + formData.facilityPhotos.length > 5) {
      alert('시설 사진은 최대 5장까지 업로드 가능합니다.');
      return;
    }

    setFormData(prev => ({
      ...prev,
      facilityPhotos: [...prev.facilityPhotos, ...files]
    }));

    // 미리보기 생성
    const newPreviews = files.map(file => ({
      name: file.name,
      size: `${Math.round(file.size / 1024)}KB`,
      url: URL.createObjectURL(file)
    }));
    setFacilityPreviews(prev => [...prev, ...newPreviews]);
  };

  // 파일 업로드 처리 (강아지 사진)
  const handleDogPhotoChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + formData.dogPhotos.length > 10) {
      alert('강아지 사진은 최대 10장까지 업로드 가능합니다.');
      return;
    }

    setFormData(prev => ({
      ...prev,
      dogPhotos: [...prev.dogPhotos, ...files]
    }));

    // 미리보기 생성
    const newPreviews = files.map(file => ({
      name: file.name,
      size: `${Math.round(file.size / 1024)}KB`,
      url: URL.createObjectURL(file)
    }));
    setDogPreviews(prev => [...prev, ...newPreviews]);
  };

  // 시설 사진 삭제
  const removeFacilityPhoto = (index) => {
    setFormData(prev => ({
      ...prev,
      facilityPhotos: prev.facilityPhotos.filter((_, i) => i !== index)
    }));
    setFacilityPreviews(prev => prev.filter((_, i) => i !== index));
  };

  // 강아지 사진 삭제
  const removeDogPhoto = (index) => {
    setFormData(prev => ({
      ...prev,
      dogPhotos: prev.dogPhotos.filter((_, i) => i !== index)
    }));
    setDogPreviews(prev => prev.filter((_, i) => i !== index));
  };

  const handleAgreementChange = (name) => {
    if (name === 'all') {
      const newValue = !agreements.all;
      setAgreements({
        all: newValue,
        age: newValue,
        terms: newValue,
        privacy: newValue,
        marketing: newValue,
        robot: newValue
      });
    } else {
      const newAgreements = {
        ...agreements,
        [name]: !agreements[name]
      };
      newAgreements.all = newAgreements.age && newAgreements.terms && newAgreements.privacy && newAgreements.marketing && newAgreements.robot;
      setAgreements(newAgreements);
    }
  };

  const handleEmailVerification = () => {
    if (!formData.email) {
      alert('이메일을 입력해주세요.');
      return;
    }
    // TODO: 실제 이메일 인증 로직
    alert('인증 이메일이 발송되었습니다.');
    setVerification(prev => ({ ...prev, emailVerified: true }));
  };

  const handlePhoneVerification = () => {
    if (!formData.phone) {
      alert('전화번호를 입력해주세요.');
      return;
    }
    // TODO: 실제 전화번호 인증 로직
    alert('인증번호가 발송되었습니다.');
    setVerification(prev => ({ ...prev, phoneVerified: true }));
  };

  const handleSocialSignup = (provider) => {
    console.log(`${provider} 보호소 회원가입`);
    // TODO: SNS 회원가입 로직
    setCurrentPage('home');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 이메일 인증 확인
    if (!verification.emailVerified) {
      alert('이메일 인증을 완료해주세요.');
      return;
    }

    // 전화번호 인증 확인
    if (!verification.phoneVerified) {
      alert('전화번호 인증을 완료해주세요.');
      return;
    }

    // 필수 약관 체크 확인
    if (!agreements.age || !agreements.terms || !agreements.privacy || !agreements.robot) {
      alert('필수 약관에 동의해주세요.');
      return;
    }

    // 비밀번호 확인
    if (formData.password !== formData.passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    // 필수 필드 확인
    if (!formData.shelterName || !formData.address || !formData.managerName || !formData.phone || !formData.email) {
      alert('필수 정보를 모두 입력해주세요.');
      return;
    }

    console.log('보호소 회원가입 데이터:', formData, agreements);
    alert('보호소 센터 회원가입이 완료되었습니다!');
    setCurrentPage('login');
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12">
      <div className="w-full max-w-3xl">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* 제목 */}
          <div className="text-center mb-8">
            <div className="text-5xl mb-3">🏠</div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">보호소 센터 회원가입</h1>
            <p className="text-gray-600">보호소 정보를 등록하고 봉사자를 모집하세요</p>
          </div>

          {/* SNS 회원가입 */}
          <div className="mb-6">
            <p className="text-center text-gray-600 mb-4">SNS계정으로 간편하게 회원가입</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => handleSocialSignup('Facebook')}
                className="w-14 h-14 rounded-full bg-[#1877F2] text-white flex items-center justify-center text-xl font-bold hover:scale-110 transition-transform shadow-md"
              >
                f
              </button>
              <button
                onClick={() => handleSocialSignup('Kakao')}
                className="w-14 h-14 rounded-full bg-[#FEE500] text-gray-800 flex items-center justify-center text-xl font-bold hover:scale-110 transition-transform shadow-md"
              >
                K
              </button>
              <button
                onClick={() => handleSocialSignup('Naver')}
                className="w-14 h-14 rounded-full bg-[#03C75A] text-white flex items-center justify-center text-xl font-bold hover:scale-110 transition-transform shadow-md"
              >
                N
              </button>
            </div>
          </div>

          {/* 구분선 */}
          <div className="my-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">또는 이메일로 가입</span>
              </div>
            </div>
          </div>

          {/* 회원가입 폼 */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 계정 정보 */}
            <div className="border-4 border-yellow-400 rounded-xl p-6 space-y-4">
              <h3 className="text-lg font-bold text-gray-800 mb-4">🔐 계정 정보</h3>

              {/* 이메일 (아이디) */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  이메일 (아이디로 사용) <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="shelter@example.com"
                    className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400"
                    required
                    disabled={verification.emailVerified}
                  />
                  <button
                    type="button"
                    onClick={handleEmailVerification}
                    disabled={verification.emailVerified}
                    className={`px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-colors ${
                      verification.emailVerified
                        ? 'bg-green-500 text-white cursor-not-allowed'
                        : 'bg-yellow-400 text-gray-800 hover:bg-yellow-500'
                    }`}
                  >
                    {verification.emailVerified ? '✓ 인증완료' : '이메일 인증'}
                  </button>
                </div>
                {verification.emailVerified && (
                  <p className="text-sm text-green-600 mt-1">✓ 이메일 인증이 완료되었습니다.</p>
                )}
              </div>

              {/* 비밀번호 */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  비밀번호 <span className="text-red-500">*</span>
                </label>
                <p className="text-xs text-gray-500 mb-2">영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</p>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="비밀번호"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400"
                  required
                />
              </div>

              {/* 비밀번호 확인 */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  비밀번호 확인 <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  name="passwordConfirm"
                  value={formData.passwordConfirm}
                  onChange={handleInputChange}
                  placeholder="비밀번호 확인"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400"
                  required
                />
              </div>
            </div>

            {/* 보호소 기본 정보 */}
            <div className="border-4 border-yellow-400 rounded-xl p-6 space-y-4">
              <h3 className="text-lg font-bold text-gray-800 mb-4">📋 보호소 기본 정보</h3>

              {/* 보호소 이름 */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  보호소 이름 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="shelterName"
                  value={formData.shelterName}
                  onChange={handleInputChange}
                  placeholder="예) 서울 강남 동물보호센터"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400"
                  required
                />
              </div>

              {/* 주소 */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  주소 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="보호소 주소를 입력하세요"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400"
                  required
                />
              </div>

              {/* 담당자 이름 */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  담당자 이름 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="managerName"
                  value={formData.managerName}
                  onChange={handleInputChange}
                  placeholder="담당자 성함을 입력하세요"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400"
                  required
                />
              </div>

              {/* 연락처 */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  연락처 <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="010-1234-5678"
                    className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400"
                    required
                    disabled={verification.phoneVerified}
                  />
                  <button
                    type="button"
                    onClick={handlePhoneVerification}
                    disabled={verification.phoneVerified}
                    className={`px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-colors ${
                      verification.phoneVerified
                        ? 'bg-green-500 text-white cursor-not-allowed'
                        : 'bg-yellow-400 text-gray-800 hover:bg-yellow-500'
                    }`}
                  >
                    {verification.phoneVerified ? '✓ 인증완료' : '전화번호 인증'}
                  </button>
                </div>
                {verification.phoneVerified && (
                  <p className="text-sm text-green-600 mt-1">✓ 전화번호 인증이 완료되었습니다.</p>
                )}
              </div>
            </div>

            {/* 보호소 상세 정보 */}
            <div className="border-4 border-yellow-400 rounded-xl p-6 space-y-4">
              <h3 className="text-lg font-bold text-gray-800 mb-4">🏥 보호소 상세 정보</h3>

              {/* 시설 사진 */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  시설 사진
                </label>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFacilityPhotoChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-yellow-400 file:text-gray-800 file:font-semibold hover:file:bg-yellow-500"
                />
                <p className="text-xs text-gray-500 mt-1">시설 내부/외부 사진을 업로드하세요 (최대 5장)</p>
                
                {/* 시설 사진 미리보기 */}
                {facilityPreviews.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {facilityPreviews.map((preview, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                        <img src={preview.url} alt={preview.name} className="w-12 h-12 rounded object-cover" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-800">{preview.name}</p>
                          <p className="text-xs text-gray-500">{preview.size}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFacilityPhoto(index)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* 강아지 사진 */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  강아지 사진
                </label>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleDogPhotoChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-yellow-400 file:text-gray-800 file:font-semibold hover:file:bg-yellow-500"
                />
                <p className="text-xs text-gray-500 mt-1">보호 중인 강아지 사진을 업로드하세요 (최대 10장)</p>
                
                {/* 강아지 사진 미리보기 */}
                {dogPreviews.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {dogPreviews.map((preview, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                        <img src={preview.url} alt={preview.name} className="w-12 h-12 rounded object-cover" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-800">{preview.name}</p>
                          <p className="text-xs text-gray-500">{preview.size}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeDogPhoto(index)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* 홈페이지 / SNS 링크 (최대 3개) */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  홈페이지 / SNS 링크 (최대 3개)
                </label>
                <div className="space-y-2">
                  {formData.websiteLinks.map((link, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="url"
                        value={link}
                        onChange={(e) => handleWebsiteLinkChange(index, e.target.value)}
                        placeholder="https://instagram.com/yourpage 또는 카페 링크"
                        className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400"
                      />
                      {formData.websiteLinks.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeWebsiteLink(index)}
                          className="px-4 py-3 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          삭제
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                {formData.websiteLinks.length < 3 && (
                  <button
                    type="button"
                    onClick={addWebsiteLink}
                    className="mt-2 text-sm text-yellow-600 hover:text-yellow-700 font-semibold"
                  >
                    + 링크 추가 ({formData.websiteLinks.length}/3)
                  </button>
                )}
                <p className="text-xs text-gray-500 mt-1">인스타그램, 카페, 홈페이지 등</p>
              </div>

              {/* 보호소 운영 시간 */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  보호소 운영 시간
                </label>
                <input
                  type="text"
                  name="openingHours"
                  value={formData.openingHours}
                  onChange={handleInputChange}
                  placeholder="예) 평일 09:00-18:00, 주말 10:00-16:00"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400"
                />
              </div>

              {/* 보호소 상세 설명 */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  보호소 상세 설명
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="보호소의 특징, 시설 정보, 운영 방침 등을 자유롭게 작성해주세요"
                  rows="5"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 resize-none"
                />
              </div>
            </div>

            {/* 봉사 정보 */}
            <div className="border-4 border-yellow-400 rounded-xl p-6 space-y-4">
              <h3 className="text-lg font-bold text-gray-800 mb-4">🤝 봉사 정보</h3>

              {/* 봉사 가능 요일 */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-3">
                  봉사 가능 요일
                </label>
                <div className="flex flex-wrap gap-2">
                  {weekDays.map((day) => (
                    <button
                      key={day}
                      type="button"
                      onClick={() => handleDayToggle(day)}
                      className={`px-4 py-2 rounded-full font-semibold transition-all ${
                        formData.volunteerDays.includes(day)
                          ? 'bg-yellow-400 text-gray-800 shadow-md'
                          : 'bg-white border-2 border-gray-300 text-gray-600 hover:border-yellow-400'
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>

              {/* 봉사 가능 시간 */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  봉사 가능 시간
                </label>
                <input
                  type="text"
                  name="volunteerTime"
                  value={formData.volunteerTime}
                  onChange={handleInputChange}
                  placeholder="예) 오전 9시 - 오후 6시"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400"
                />
              </div>
            </div>

            {/* 약관동의 */}
            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">약관동의</h3>
              
              {/* 전체동의 */}
              <label className="flex items-center gap-3 p-3 mb-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreements.all}
                  onChange={() => handleAgreementChange('all')}
                  className="w-5 h-5 rounded border-gray-300 text-yellow-400 focus:ring-yellow-400"
                />
                <span className="font-semibold text-gray-800">전체동의</span>
                <span className="text-sm text-gray-500">선택항목에 대한 동의 포함</span>
              </label>

              <div className="space-y-2">
                <label className="flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-50 rounded-lg">
                  <input
                    type="checkbox"
                    checked={agreements.age}
                    onChange={() => handleAgreementChange('age')}
                    className="w-5 h-5 rounded border-gray-300 text-yellow-400 focus:ring-yellow-400"
                  />
                  <span className="text-gray-700">만 14세 이상입니다</span>
                  <span className="text-sm text-blue-600">(필수)</span>
                </label>

                <label className="flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-50 rounded-lg">
                  <input
                    type="checkbox"
                    checked={agreements.terms}
                    onChange={() => handleAgreementChange('terms')}
                    className="w-5 h-5 rounded border-gray-300 text-yellow-400 focus:ring-yellow-400"
                  />
                  <span className="flex-1 text-gray-700">이용약관</span>
                  <span className="text-sm text-blue-600">(필수)</span>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </label>

                <label className="flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-50 rounded-lg">
                  <input
                    type="checkbox"
                    checked={agreements.privacy}
                    onChange={() => handleAgreementChange('privacy')}
                    className="w-5 h-5 rounded border-gray-300 text-yellow-400 focus:ring-yellow-400"
                  />
                  <span className="flex-1 text-gray-700">개인정보 마케팅 활용 동의</span>
                  <span className="text-sm text-gray-500">(선택)</span>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </label>

                <label className="flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-50 rounded-lg">
                  <input
                    type="checkbox"
                    checked={agreements.marketing}
                    onChange={() => handleAgreementChange('marketing')}
                    className="w-5 h-5 rounded border-gray-300 text-yellow-400 focus:ring-yellow-400"
                  />
                  <span className="flex-1 text-gray-700">이벤트, 쿠폰, 특가 알림 메일 및 SMS 등 수신</span>
                  <span className="text-sm text-gray-500">(선택)</span>
                </label>

                <label className="flex items-center gap-3 p-4 cursor-pointer bg-yellow-50 border-2 border-yellow-400 rounded-lg">
                  <input
                    type="checkbox"
                    checked={agreements.robot}
                    onChange={() => handleAgreementChange('robot')}
                    className="w-5 h-5 rounded border-gray-300 text-yellow-400 focus:ring-yellow-400"
                  />
                  <span className="font-semibold text-gray-800">로봇이 아닙니다.</span>
                </label>
              </div>
            </div>

            {/* 회원가입 버튼 */}
            <button
              type="submit"
              className="w-full py-4 bg-yellow-400 text-gray-800 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-colors shadow-md"
            >
              보호소 센터 회원가입하기
            </button>
          </form>

          {/* 로그인 링크 */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              이미 아이디가 있으신가요?{' '}
              <button
                onClick={() => setCurrentPage('login')}
                className="text-yellow-500 font-semibold hover:text-yellow-600 transition-colors"
              >
                로그인
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
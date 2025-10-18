# 멍로그 (MongLog)

유기견 보호소 서비스 웹 애플리케이션

## 주요 기능

- 🏠 **보호소 찾기**: 지역별 유기견 보호소 검색 및 필터링
- 🐕 **분실/보호 게시판**: 실종 및 보호 동물 정보 공유
- 💝 **분양하기**: 유기견 입양 정보 제공
- 🎨 **3D 인터랙티브 UI**: Three.js를 활용한 동적인 홈 화면

## 기술 스택

- React 18
- Three.js (r128)
- Tailwind CSS
- Lucide React Icons

## 설치 및 실행

### 1. 저장소 클론
```bash
git clone https://github.com/deehyeon/munglog-frontend.git
cd munglog-frontend
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 개발 서버 실행
```bash
npm start
```

브라우저에서 [http://localhost:3000](http://localhost:3000)으로 자동으로 열립니다.

## 빌드

프로덕션 빌드를 생성하려면:
```bash
npm run build
```

빌드된 파일은 `build` 폴더에 생성됩니다.

## 프로젝트 구조

```
munglog-frontend/
├── public/
│   └── index.html
├── src/
│   ├── App.js          # 메인 컴포넌트
│   ├── index.js        # 진입점
│   └── index.css       # 전역 스타일
├── package.json
└── README.md
```

## 개발자

deehyeon

## 라이선스

MIT
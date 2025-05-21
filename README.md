# 📘 TAGNGRAM PROJECT - IDEA FACTORY

## 🚀 실행 방법

### 1. 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

* 기본 실행 주소: [http://localhost:5173](http://localhost:5173)

---

## 📁 프로젝트 구조

```
tangram_project/
├── public/
│   └── images/                 # Tangram 및 생성 이미지 리소스 (API 연동 후 구조 변경)
├── src/
│   ├── assets/                 
│   ├── components/             # 재사용 가능한 UI 컴포넌트
│   │   └── SelectedObjectDetail.tsx
│   ├── data/                   
│   │   └── sampleObjects.ts    # 예시 오브젝트 데이터
│   ├── pages/
│   │   └── IdeaFactory.tsx     # 메인 페이지 컴포넌트
│   ├── types/
│   │   └── TangramObject.ts    # 오브젝트 타입 정의
│   ├── App.tsx                 # 루트 컴포넌트
│   └── main.tsx                # 진입점
├── tailwind.config.js          # TailwindCSS 설정
└── package.json
```

---

## 🧱 구성 요소 설명

### 📄 `TangramObject.ts`

```ts
export interface TangramObject {
  id: string;
  name: string;
  color: string;
  tangramImage: string;
  generatedImage: string;
}
```

* 하나의 오브젝트를 구성하는 속성 타입 정의

---

### 💠 `sampleObjects.ts`

* Tangram 오브젝트 예시들을 배열로 정의한 샘플 데이터

---

### 🧩 `IdeaFactory.tsx` (페이지)

* 메인 UI 페이지
* Tangram 블록들의 썸네일 그리드 표시
* 오브젝트 클릭 시 상세 정보 뷰 오픈

---

### 🧾 `SelectedObjectDetail.tsx`

* 클릭된 오브젝트의 `name`, `color`, `generatedImage` 표시
* 팝업 형태로 출력됨

---

## 💡 TODO

* 📷 Tangram 블록 카메라 인식 (YOLO 연동)
* 🧠 GPT API로 오브젝트 생성 이미지 만들기
* 🎤 음성으로 오브젝트 속성 등록 (STT 연동)
* 💾 오브젝트 정보 로컬/서버 저장

## server : node express
### 사용한 api
- get: /test/param
  - [필수] a
- post: /test/send/data
  - [필수] a, b
- post: /test/send/formdata
  - formdata
  - [필수] a, b

### 사용한 라이브러리
- cors : cors 처리
- formidable : formdata 처리

## react : react + vite
### 폴더구조
#### src/assets : favicon 및 이미지 등

#### src/components
- common_btn: 공통 버튼 컴포넌트
- loading: 로딩 컴포넌트
- toast: toast 컴포넌트

#### src/model
- result_model: api콜 result model
- toast_model: toast slice 사용 model

#### src/route
- route별로 처리 용도 현재 메인 index만 사용

#### service
- api.ts: axios 공통
- api/test: test api

#### slices
- redux toolkit 상태관리

#### util
- 공통 유틸들

### 사용한 라이브러리
- axios: api콜 처리용
- react-redux: 상태관리
- redux-typescript: redux typescript wrapping
- @reduxjs/toolkit: 상태관리

### 기타 config
- tsconfig,json
```
{
  ...
    "baseUrl": "./",
    "paths": {
      "src/*": [
        "./src/*"
      ]
    }
  },
  "include": [
    "src"
  ]
}
```

- vite.config,ts
```
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build' // 빌드 폴더 경로
  },
  resolve: {
    alias: {
      src: '/src' // 경로 간소화
    }
  },
  server: {
    port: 3000
  },
  // esbuild: {
  //   drop: ['console'] // console제거부분
  // }
})

```
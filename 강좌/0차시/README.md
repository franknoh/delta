# 0차시

여러분 안녕하세요.
`에디터 만들기` 수업은 이 repo의 README를
읽으면서 학습하시면 되요.

오늘은 에디터가 뭔지 알아보고
작업환경, 목차등을 알아볼꺼에요.

### 에디터
`A source-code editor is a text editor program designed specifically for editing source code of computer programs. It may be a standalone application or it may be built into an integrated development environment (IDE) or web browser. Source-code editors are a fundamental programming tool, as the fundamental job of programmers is to write and edit source code.`
-출처 [wiki](https://en.wikipedia.org/wiki/Source-code_editor)

간단히 말하면 편집할때 쓰는 도구에요.

* [vsc](https://code.visualstudio.com/)
* [atom](https://atom.io/)
* [sublime text](https://www.sublimetext.com/)

등이 있어요.

에디터는 파일(문서)를 읽기, 편집 등을 가능하게 해줘요.

```javascript
var x = 0;
console.log(x);
```
이런식으로 하이라이팅도 해줘요.

### 작업환경

#### 개발

저는 `Github`에 파일을 올릴꺼에요.
이 repo를 fork해서 gh-desktop, vsc 사용을 권장해요.

#### 배포

저는 `gh-pages`로 배포를 할건데
`firebase hosting`을 사용을 하는 방법도 알려줄꺼에요.

### 목차

- 0차시
  - 에디터란
  - 작업환경
    - 개발
    - 배포
  - 목차
- 1차시
  - 에디터 알아보기
  - 에디터 분석하기
    - highlight
    - read&write
    - search
    - multi-line
    - (고급) collaboration
- 2차시
  - highlighting
    - tokenization 알아보기
    - 간단한 tokenizer 만들기
  - 하이라이터 알아보기
    - prism.js
    - highlight.js
    - codemirror
- 3차시
  - codemirror사용하기
  - addons
  - (고급)collaboration
- 4차시
  - monaco소개
  - monaco사용하기
- 5차시
  - monaco 커스텀 themes
  - (고급)collaboration
- 6차시
  - 로그인 만들기
  - 디자인 개선(`nolbo`당담)
- 7차시
  - 완성하기
  - 공유하기
  - 평가하기
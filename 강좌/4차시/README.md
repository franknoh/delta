### monaco소개

[monaco 홈페이지](https://microsoft.github.io/monaco-editor/), [monaco repo](https://github.com/Microsoft/monaco-editor)

microsoft가 만든 에디터 입니다.
vsc의 웹 버전, 매우 좋습니다.

### monaco사용하기

[예제 링크](https://franknoh.github.io/delta/web/lectures/4/example.html)
어때요?

이것보다 높은 퀄리티는 찾기 힘들꺼에요.
암튼 설명 시작.

저런 에디터를 구현할려면 간단한 cdn 으로는 안끝나죠...
그래서 우리는 [require.js](https://requirejs.org/)를 사용할꺼에요.
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js"></script>
```

이번에도 에디터 공간 생성

```html
<div id="editor"></div>
```

이제 js

먼저 monaco 로드

```javascript
require.config({
    paths: {
        'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.16.2/min/vs'
    }
});
require(['vs/editor/editor.main'], function() {
    // monaco 로드시 실행!
});
```
이제 에디터 생성

```javascript
editor = monaco.editor.create(document.getElementById('editor'), {
    value: '//asdf\nconsole.log(\'helloworld\')',
    language: 'javascript',
    theme: 'vs-dark',
    automaticLayout: true
});
```

OK!

근데...
왜 안보일까요...

**css**때문입니다..

```css
html, body, #editor {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    overflow: hidden;
}
#editor {
    top: 50px;
}
```
추가

끝!

심화는 나중에 해요;;
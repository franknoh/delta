ㅘ!  
드디어 실습!

필요한 파일은 이 폴더에 있어요
### codemirror사용하기

[codemirror](https://codemirror.net/index.html)
는 javascript를 사용하여 간단한 에디터를 만들수 있게 해줍니다.

[예제 링크](https://franknoh.github.io/delta/web/lectures/3/example.html)

먼저 cdn을 사용하여 codemirror를 로드합니다.
``` html
    <link href='https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.16.0/codemirror.css' rel='stylesheet'>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.16.0/codemirror.js'></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.16.0/mode/javascript/javascript.js'></script>
```

이제 콘솔에 `CodeMirror()`이라고 칩니다.  
그러면 뭔가 많이 나옵니다.  
일단 지금은 에디터를 만드는게 목표니까,  
잘 나오는지만 확인하고 다음으로 넘어갈께요.

이번에는 `에디터`가 들어갈 공간이 필요하죠.
```html
<div id="editor"></div>
```
공간 O.K.

이제는 에디터 구현을 위해 js
```javascript
    var editorContainer = document.getElementById('editor')
    CodeMirror(editorContainer, {
        lineNumbers: true,
        mode: 'javascript',
        value: '//asdf\nconsole.log(\'helloworld!\')'
    })
```
**잠깐!**  :thinking:

##### html
```html
<script type="text/javascript" src="main.js"></script>
<link href='https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.16.0/codemirror.css' rel='stylesheet'>
<script src='https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.16.0/codemirror.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.16.0/mode/javascript/javascript.js'></script>

<div id="editor"></div>
```
##### main.js
```javascript
    var editorContainer = document.getElementById('editor')
    CodeMirror(editorContainer, {
        lineNumbers: true,
        mode: 'javascript',
        value: '//asdf\nconsole.log(\'helloworld!\')'
    })
```
이런 분들을 위해 준비했습니다.

* 뭔가 한거같은데 안됨

위 코드의 문제
1. `CodeMirror`가 준비되기전 실행 => 오류
2. 만약 페이지 크기가 커지면 `html element`가 로드되기 전 일수도 있음

이럴때는 이렇게 해주시면 됩니다.
```html
<!DOCTYPE html>
<html lang="kr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link id="favicon" rel="shortcut icon" type="image/x-icon" href="../../img/delta.png">
    <link href='https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.16.0/codemirror.css' rel='stylesheet'>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.16.0/codemirror.js'></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.16.0/mode/javascript/javascript.js'></script>
    <script type="text/javascript" src="main.js"></script>
    <title>Delta | 3강 예제</title>
</head>
<body onload="load()">
    <article>
        <p>코드미러 사용 예제</p><br>
        <div id="editor"></div>
    </article>
</body>
</html>
```
### addons

codemirror가 좋은게 addon이 많아요.
[여기](https://codemirror.net/doc/manual.html#addons)에 정리되있어요.
이것도 js로 로드해서 사용하면 되요.

### (고급)collaboration

음...

이거는 좀 복잡한데...

제가 만든거는 두가지 방법이 있어요
1. firebase realtime db 사용
2. peer js를 사용

##### firebase realtime db 사용

이건 제가 처음으로 구현한거에요.
장점은 만들기 쉽다는것 이있고,
단점으로는 firebase realtime db 서버 사용을  
많이 하기 때문에 사용한도 초과 할 수 있어요.

##### peer js를 사용

이거는 지금 공부중인거,
[peerJs](https://peerjs.com/)는 data, 음성, 영상을 서버없이 사용할수 있게 해주는거에요.
장점은 realtime 서버가 필요 없다는것, 음성, 영상도 사용 가능한것이고,
단점으로는 기본 연결을 위해 firestore를 써야한다는것 입니다.

기본적인 원리는
1. 사용자가 변경사항을 만듬
1. 함수가 실행
1. 변경값을 가져옴
1. 다른 사람들한테 전송
1. 정보를 받으면 값을 수정

입니다.

이거는 나중에 다시 할께요!
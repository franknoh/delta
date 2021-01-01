### highlighting

여러분 안녕하세요.
오늘은`highlighting`에 대해 자세히 알아볼거에요.

#### tokenization 알아보기

마음에 드는 설명을 못찾아서 그냥 설명할께요.
```plaintext
예를들어 js에서 source를 String, Number등으로 나누는것
```
```javascript
function a (e) {
    console.log('hello world'.replace(/world/, 'everyone'));
}
```
는
```
'function' 'a' '(' 'e' ')' '{'
    'console' '.' 'log' '(' ''' 'hello world' ''' '.' 'replace' '(' '/' 'world' '/' ',' ''' 'everyone' ''' ')' ')' ';'
'}'
```

#### 간단한 tokenizer 만들기

음  
이거는 생략

### 하이라이터 알아보기

다음은 유명하고 많이 쓰는 것들을 모아봤어요.

#### prism.js
여러가지 addon이 있습니다.
prism live를 사용하면 에디터 구현 가능합니다.
https://prismjs.com/
#### highlight.js
kakaotalkbot-docs 에서 사용하고 있는것 입니다.
https://highlightjs.org/
#### codemirror
간단한 에디터를 구현 가능합니다.
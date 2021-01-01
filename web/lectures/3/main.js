function load() {
    var editorContainer = document.getElementById('editor')
    CodeMirror(editorContainer, {
        lineNumbers: true,
        mode: 'javascript',
        value: '//asdf\nconsole.log(\'helloworld!\')'
    })
}
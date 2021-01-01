function load() {
    require.config({
        paths: {
            'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.16.2/min/vs'
        }
    });
    require(['vs/editor/editor.main'], function () {
        editor = monaco.editor.create(document.getElementById('editor'), {
            value: '//asdf\nconsole.log(\'helloworld\')',
            language: 'javascript',
            theme: 'vs-dark',
            automaticLayout: true
        });
    });
}
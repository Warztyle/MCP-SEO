document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('#myWebflowForm');
  const myEditor = tinymce.get('myEditor');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const content = myEditor.getContent();

    const hiddenInput = document.createElement('input');
    hiddenInput.type = 'hidden';
    hiddenInput.name = 'editorContent';
    hiddenInput.value = content;

    form.appendChild(hiddenInput);
    form.submit();
  });
});

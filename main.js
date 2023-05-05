$(document).ready(function() {
    $('#form').submit(function(e) {
      e.preventDefault(); 
      var tarefa = $('#tarefa').val(); 
      if (tarefa.length === 0) {
        alert('Por favor, digite uma tarefa!'); 
      }
      $('#lista').append('<li>' + tarefa + '</li>');
      $('#tarefa').val(''); 
    });
  

    $(document).on('click', 'li', function() {
      $(this).toggleClass('checked');
    });
  });
  
  
  
// Estado dos elementos

// menu inativo:
// class="" em nav
// aria-expanded="false" em button
// aria-label="Abrir Menu" em button

// menu ativo:
// class="active" em nav
// aria-expanded="true" em button
// aria-label="Fechar Menu" em button

const $button = document.getElementById('btn-mobile');
const $nav = document.getElementById('nav');

if($button instanceof HTMLElement){
  let $btnAriaLabel = $button.ariaLabel;
  let $btnAriaExpanded = $button.ariaExpanded;

  function handleClick(){
  
    $nav?.classList.toggle('active');

    if($nav?.classList.contains('active')){
      $btnAriaLabel = 'Fechar Menu';
      $btnAriaExpanded = 'true';
    } else {
      $btnAriaLabel = 'Abrir Menu';
      $btnAriaExpanded = 'false';
    }
    $button?.setAttribute('aria-label', $btnAriaLabel);
    $button?.setAttribute('aria-expanded', $btnAriaExpanded);
  }

  window.addEventListener('click', handleClick);
}

function accordionOpen() {
  let btnAccordion = document.getElementsByClassName('accordion');
  
  for (let i = 0; i < btnAccordion.length; i++) {
    btnAccordion[i].addEventListener('click', acc => {
      acc.classList.toggle('active');
      let panel = acc.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  }
}

function idCopy() {
  let btnTooltip = document.getElementsByClassName('tooltipbutton');

  for (let i = 0; i < btnTooltip.length; i++) {
    btnTooltip[i].addEventListener('click', tts => {
      let tooltips = tts.querySelector('.tooltiptext');
      let originalText = tooltips.textContent.trim();
  
        navigator.clipboard.writeText(originalText).then(() => {
          tooltips.textContent = 'ID Copiado!';
    
          setTimeout(() => {
            tooltips.textContent = originalText;
          }, 2000);
        }).catch(err => {
            console.error('Erro ao copiar texto: ', err);
          });
      });
  }
}

accordionOpen();
idCopy();




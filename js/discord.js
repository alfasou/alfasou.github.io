function copyText() {
  var copyText = document.getElementById('discordTooltip');
  navigator.clipboard.writeText(copyText.innerHTML);

  var tooltip = document.getElementById('discordTooltip');
  tooltip.innerHTML = 'Id Copiado';
}

function outFunc() {
  var tooltip = document.getElementById('discordTooltip');
  tooltip.innerHTML = 'alfasou#4348';
}

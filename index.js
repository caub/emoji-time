var clocks = Array.from('🕛🕐🕑🕒🕓🕔🕕🕖🕗🕘🕙🕚🕧🕜🕝🕞🕟🕠🕡🕢🕣🕤🕥🕦');

function emojiTime(date) {
  var d = date || new Date();
  var m = d.getMinutes();
  var h = (m > 45 ? d.getHours() + 1 : d.getHours()) % 12;
  var isHalf = m > 15 && m <= 45;
  return clocks[isHalf ? 12 + h : h];
};

exports['default'] = emojiTime;
module.exports = emojiTime;

var clocks = Array.from('🕛🕐🕑🕒🕓🕔🕕🕖🕗🕘🕙🕚🕧🕜🕝🕞🕟🕠🕡🕢🕣🕤🕥🕦');

module.exports = function(date) {
  var d = date || new Date();
  var h = d.getHours() % 12;
  var m = d.getMinutes();
  var isHalf = m > 15 && m < 45;
  return clocks[isHalf ? 12 + h : h];
};

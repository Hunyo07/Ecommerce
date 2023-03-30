
function getInputValue() {

  var sample = document.getElementsByClassName('name1')[0].value;
  
  if (sample > 30) {

    alert('Gurang')

  } else if (sample > 24) {
    
    alert('Adult')

  } else if (sample > 17) {
    
    alert('Legal')

  } else {
    alert('Minor')

}
}
function boom(){
	let audio = document.getElementById('audio');
	audio.play();
	audio.volume = 0.1;
};



document.getElementById("slider").oninput = function() {
    myFunction()
};


function myFunction() {
   var val = document.getElementById("slider").value //gets the oninput value
   // document.getElementById('audio').volume = 0.val; //displays this value to the html page
   var audioVolume = "." + val;

   audio.volume = audioVolume;

   console.log(audioVolume);
   document.getElementById('music').classList.remove('close');

   if(val < 10){
   	document.getElementById('music').classList.add('close');
   }
}
var form = document.getElementById("form");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

function munna() {
	   	document.getElementById('con').classList.add('munna-aa');

}



// Restricts input for the given textbox to the given inputFilter function.
function setInputFilter(textbox, inputFilter) {
  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
    textbox.addEventListener(event, function() {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = "";
      }
    });
  });
}


setInputFilter(document.getElementById('numonly'), function(value) {
  return /^\d*\.?\d*$/.test(value); // Allow digits and '.' only, using a RegExp
});
setInputFilter(document.getElementById("numonlyy"), function(value) {
  return /^\d*\.?\d*$/.test(value); // Allow digits and '.' only, using a RegExp
});



let synth = new Tone.Synth().toMaster();
let player = document.getElementById ("player")

addEventListener('keypress', (event) => {
  if (event.key == 'g') {
    player.play();
    document.body.style.backgroundColor = "black";
  }


})


document.body.addEventListener('keypress', (event) => {
  if(event.key == 'w'){
    synth.triggerAttackRelease('A4', '4n')
    document.body.style.backgroundColor = "orange";
  }else if(event.key == 'e'){
    synth.triggerAttackRelease('A3', '4n')
    document.body.style.backgroundColor = "cyan";
  }else if(event.key == 'r'){
    synth.triggerAttackRelease('A2', '4n')
    document.body.style.backgroundColor = "pink";
  }else if(event.key == 't'){
    synth.triggerAttackRelease('C3', '4n')
    document.body.style.backgroundColor = "purple";
  }
  else if(event.key == 'y'){
    synth.triggerAttackRelease('C4', '4n')
    document.body.style.backgroundColor = "green";
  }
  else if(event.key == 'u'){
    synth.triggerAttackRelease('C5', '4n')
    document.body.style.backgroundColor = "blue";
  }else if(event.key == 'i'){
    synth.triggerAttackRelease('C6', '4n')
    document.body.style.backgroundColor = "red";
  }else if(event.key == 'o'){
    synth.triggerAttackRelease('C7', '4n')
    document.body.style.backgroundColor = "yellow";
  }else if(event.key == 'p'){
    synth.triggerAttackRelease("A7")
    document.body.style.backgroundColor = "orange";
  }else if(event.key == 'a'){
    synth.triggerAttackRelease('A3', '4n')
    document.body.style.backgroundColor = "cyan";
  }else if(event.key == 's'){
    synth.triggerAttackRelease('mario')
    document.body.style.backgroundColor = "pink";
  }else if(event.key == 'd'){
    synth.triggerAttackRelease('C3', '4n')
    document.body.style.backgroundColor = "purple";
  }
  else if(event.key == 'f'){
    synth.triggerAttackRelease('C4', '4n')
    document.body.style.backgroundColor = "green";
  }
  else if(event.key == 'm'){
    synth.triggerAttackRelease('C5', '4n')
    document.body.style.backgroundColor = "blue";
  }
  else if(event.key == 'h'){
    synth.triggerAttackRelease('C6', '4n')
    document.body.style.backgroundColor = "red";
  }else if(event.key == 'j'){
    synth.triggerAttackRelease('C7', '4n')
    document.body.style.backgroundColor = "yellow";
  }else if(event.key == 'k'){
    synth.triggerAttackRelease("A7")
    document.body.style.backgroundColor = "orange";
  }else if(event.key == 'l'){
    synth.triggerAttackRelease('C5', '4n')
    document.body.style.backgroundColor = "blue";
  }else if(event.key == 'm'){
    synth.triggerAttackRelease('C6', '4n')
    document.body.style.backgroundColor = "red";
  }else if(event.key == 'x'){
    synth.triggerAttackRelease('C7', '4n')
    document.body.style.backgroundColor = "yellow";
  }else if(event.key == 'c'){
    synth.triggerAttackRelease("A7")
    document.body.style.backgroundColor = "orange";
  }else if(event.key == 'v'){
    synth.triggerAttackRelease('A3', '4n')
    document.body.style.backgroundColor = "cyan";
  }else if(event.key == 'b'){
    synth.triggerAttackRelease('A2', '4n')
    document.body.style.backgroundColor = "pink";
  }else if(event.key == 'n'){
    synth.triggerAttackRelease('C3', '4n')
    document.body.style.backgroundCoor = "purple";
  }else if (event.key == 'g'){
    ('player')
  }

})




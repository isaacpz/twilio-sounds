module.exports = {
  outgoing: getSoundLocation("outgoing.mp3"),
  disconnect: getSoundLocation("disconnect.mp3"),
  dtmf1: getSoundLocation("dtmf-1.mp3"),
  dtmf2: getSoundLocation("dtmf-2.mp3"),
  dtmf3: getSoundLocation("dtmf-3.mp3"),
  dtmf4: getSoundLocation("dtmf-4.mp3"),
  dtmf5: getSoundLocation("dtmf-5.mp3"),
  dtmf6: getSoundLocation("dtmf-6.mp3"),
  dtmf7: getSoundLocation("dtmf-7.mp3"),
  dtmf8: getSoundLocation("dtmf-8.mp3"),
  dtmf9: getSoundLocation("dtmf-9.mp3"),
  dtmf0: getSoundLocation("dtmf-0.mp3"),
  dtmfh: getSoundLocation("dtmf-hash.mp3"),
  dtmfs: getSoundLocation("dtmf-star.mp3")
}

function getSoundLocation(fileName) {
  return __dirname + "/assets/" + fileName;
}

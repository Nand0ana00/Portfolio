export function speak(text, onEnd) {
  const speech = new SpeechSynthesisUtterance(text)

  speech.rate = 1
  speech.pitch = 1
  speech.volume = 1

  speech.onend = () => {
    if (onEnd) onEnd()
  }

  speechSynthesis.cancel()
  speechSynthesis.speak(speech)
}
let speechQueue = []
let isSpeaking = false

export const speakQueue = (text, onDone) => {
  speechQueue.push({ text, onDone })
  processQueue()
}

const processQueue = () => {
  if (isSpeaking) return
  if (speechQueue.length === 0) return

  const { text, onDone } = speechQueue.shift()

  isSpeaking = true
  const utterance = new SpeechSynthesisUtterance(text)

  utterance.rate = 1
  utterance.pitch = 1
  utterance.volume = 1

  utterance.onend = () => {
    isSpeaking = false
    if (onDone) onDone()
    processQueue()
  }

  speechSynthesis.cancel()
  speechSynthesis.speak(utterance)
}
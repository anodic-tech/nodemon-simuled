import { useEffect, useState } from "react"
import { WebMidi } from "webmidi"

const MIDI_SERVER = "IAC Driver 1 Bus 1"

export default () => {

  const [rgbMap, setRgbMap] = useState((Array(12) as Rgb[]).fill({ r: 0, g: 0, b: 0 }, 0, 12))

  useEffect(() => {
    console.log('start midi server')
    WebMidi
      .enable()
      .then(onEnabled)
      .catch(err => alert(err))
    function onEnabled() {

      // Inputs
      WebMidi.inputs.forEach(input => console.log(input.manufacturer, input.name))

      const myInput = WebMidi.getInputByName(MIDI_SERVER)
      myInput?.addListener("noteon", e => {
        console.log(e.note.identifier)
        setRgbMap([...rgbMap])
      })

    }
  })

  return rgbMap
}
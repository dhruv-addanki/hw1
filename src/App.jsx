import { useState } from 'react'
import './App.css'
import Header from './Header'
import Selector from './Selector'
import Display from './Display'
import Convert from './Convert'

function App() {
  // ===== MODEL =====
  // All app state lives in App to satisfy the MVC requirement.
  // Selector state (input controls).
  const [selectorScale, setSelectorScale] = useState('C')
  const [selectorTemp, setSelectorTemp] = useState('')
  // Display state (output controls).
  const [displayScale, setDisplayScale] = useState('C')
  const [displayTemp, setDisplayTemp] = useState('')

  // ===== CONTROLLER =====
  // Input and output scale handlers update model state.
  const handleSelectorScaleChange = (event) => {
    setSelectorScale(event.target.value)
  }

  const handleSelectorTempChange = (event) => {
    setSelectorTemp(event.target.value)
  }

  const handleDisplayScaleChange = (event) => {
    setDisplayScale(event.target.value)
  }

  // Keep output formatting simple and readable (max 2 decimals).
  const formatTemperature = (value) => {
    return Number.parseFloat(value.toFixed(2)).toString()
  }

  // Convert only when button is pressed; validate user input first.
  const handleConvert = () => {
    const trimmedInput = selectorTemp.trim()

    if (trimmedInput === '') {
      setDisplayTemp('Error!')
      return
    }

    const parsedInput = parseFloat(trimmedInput)
    const strictNumber = Number(trimmedInput)

    // parseFloat is required, and strict numeric validation rejects partial strings.
    if (!Number.isFinite(parsedInput) || !Number.isFinite(strictNumber)) {
      setDisplayTemp('Error!')
      return
    }

    let convertedValue = parsedInput

    // Apply temperature formula only when scales differ.
    if (selectorScale === 'C' && displayScale === 'F') {
      convertedValue = parsedInput * (9 / 5) + 32
    } else if (selectorScale === 'F' && displayScale === 'C') {
      convertedValue = (parsedInput - 32) * (5 / 9)
    }

    setDisplayTemp(formatTemperature(convertedValue))
  }

  // ===== VIEW =====
  // Presentational components receive state values + callbacks through props.
  return (
    <div className="app-shell">
      <Header title="Temperature Converter" />

      <main className="panel-grid">
        <Selector
          scale={selectorScale}
          temperature={selectorTemp}
          onScaleChange={handleSelectorScaleChange}
          onTemperatureChange={handleSelectorTempChange}
        />

        <Display
          scale={displayScale}
          temperature={displayTemp}
          onScaleChange={handleDisplayScaleChange}
        />
      </main>

      <Convert onConvert={handleConvert} />
    </div>
  )
}

export default App

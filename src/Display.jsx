import './Display.css'

function Display({ scale, temperature, onScaleChange }) {
  // VIEW: output section that shows converted temperature.
  // Output input stays controlled and readOnly.
  return (
    <section className="display card" aria-label="Display section">
      <h2>Display</h2>
      {/* User can pick output scale without triggering auto-convert. */}
      <label htmlFor="display-scale">Output Scale</label>
      <select id="display-scale" value={scale} onChange={onScaleChange}>
        <option value="C">Celsius</option>
        <option value="F">Fahrenheit</option>
      </select>

      {/* Required readOnly text field for conversion result. */}
      <label htmlFor="display-temp">Converted Temperature</label>
      <input id="display-temp" type="text" value={temperature} readOnly />
    </section>
  )
}

export default Display

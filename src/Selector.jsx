import './Selector.css'

function Selector({ scale, temperature, onScaleChange, onTemperatureChange }) {
  // VIEW: controlled input section for user-entered temperature.
  // State and logic come from App (props only).
  return (
    <section className="selector card" aria-label="Selector section">
      <h2>Selector</h2>
      {/* Dropdown uses internal values C/F with user-friendly labels. */}
      <label htmlFor="selector-scale">Input Scale</label>
      <select id="selector-scale" value={scale} onChange={onScaleChange}>
        <option value="C">Celsius</option>
        <option value="F">Fahrenheit</option>
      </select>

      {/* Text field is editable and controlled by App state. */}
      <label htmlFor="selector-temp">Input Temperature</label>
      <input
        id="selector-temp"
        type="text"
        value={temperature}
        onChange={onTemperatureChange}
        placeholder="Enter temperature"
      />
    </section>
  )
}

export default Selector

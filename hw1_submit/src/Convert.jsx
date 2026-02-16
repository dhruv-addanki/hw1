import './Convert.css'

function Convert({ onConvert }) {
  // VIEW: convert button only; App handles conversion logic.
  return (
    /* Wrapper keeps button placement separate from panel layout. */
    <div className="convert-wrap">
      {/* Button click asks controller (App) to perform conversion. */}
      <button type="button" onClick={onConvert}>
        Convert
      </button>
    </div>
  )
}

export default Convert

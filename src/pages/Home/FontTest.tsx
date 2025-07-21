export function FontTest() {
  return (
    <>
      <div className="font-mulish space-y-2 p-4">
        <p className="font-light">Light (300)</p>
        <p className="font-normal">Normal (400)</p>
        <p className="font-medium">Medium (500)</p>
        <p className="font-semibold">Semibold (600) ← Figma semibold</p>
        <p className="font-bold">Bold (700)</p>
        <p className="font-extrabold">Extrabold (800) ← Figma extrabold</p>
        <p className="font-black">Black (900)</p>
      </div>

      <div className="font-mulish space-y-2 p-4">
        <div style={{ fontFamily: 'Mulish, sans-serif' }}>
          <p>Inline style test</p>
        </div>
        <div className="font-mulish">
          <p>Tailwind class test</p>
        </div>
        <p className="font-light">Light (300)</p>
        <p className="font-normal">Normal (400)</p>
        <p className="font-medium">Medium (500)</p>
        <p className="font-semibold">Semibold (600)</p>
        <p className="font-bold">Bold (700)</p>

        {/* Debug info */}
        <div className="mt-4 p-2 bg-gray-100">
          <p>Computed font-family: <span id="debug-font"></span></p>
          <script>{`
          document.getElementById('debug-font').textContent = 
            getComputedStyle(document.querySelector('.font-mulish')).fontFamily;
        `}</script>
        </div>
      </div>

    </>

  )
}
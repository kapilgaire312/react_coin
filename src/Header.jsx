import { useState } from "react";

function Header({ coinSearch, openWatchlist, titleClick }) {
  const [searchChar, SetSearchChar] = useState('')
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'end', columnGap: '40%', paddingRight: '2%', alignItems: 'center' }}>
        <h2 style={{ backgroundColor: '#e0ffff', cursor: 'pointer' }}><a onClick={titleClick}>Coin Market</a></h2>
        <p><button onClick={() => (openWatchlist(true))} style={{ border: 'none', borderRadius: '10px', fontSize: '15px', cursor: 'pointer' }}>Watchlist</button></p>

      </div>
      <div style={{ display: 'flex', justifyContent: 'end' }}>
        <input value={searchChar} onChange={(e) => { SetSearchChar(e.target.value) }} onKeyDown={(e) => { if (e.key === 'Enter') { coinSearch(searchChar) } }}></input>
        <button onClick={() => { coinSearch(searchChar); SetSearchChar('') }} >Search</button>
      </div>


    </div>
  )

}


export default Header;
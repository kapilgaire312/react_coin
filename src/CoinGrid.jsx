import CoinRow from "./CoinRow"


function CoinGrid({ coinArray, toogleWatchlist }) {
  let isValuationPositive;
  if (coinArray.length === 0) {
    return
  }

  return (

    <div style={{ display: 'grid', gridTemplateColumns: ' 100px auto 150px auto 100px 100px  ', textAlign: 'center', rowGap: '10px' }}>


      <div style={{ display: 'contents', fontWeight: 'bold', fontSize: '18px' }}>
        <p>S.N</p>
        <p style={{ marginLeft: '-15%' }}>Coin</p>

        <p>Symbol</p>
        <p>Price</p>
        <p> 24h %</p>
        <p>Watchlist</p>

      </div>



      {coinArray.map((item, index) => {
        const isValuationPositive = item.price_change_percentage_24h >= 0;

        return (
          <div key={item.id} style={{ display: 'contents' }}>
            <p>{index + 1}.</p>
            <CoinRow image={item.image} name={item.name} />
            <p>{item.symbol.toUpperCase()}</p>
            <p>${item.current_price.toLocaleString('en-US')}</p>
            <p className={isValuationPositive ? 'positiveValuation' : 'negativeValuation'}>
              {isValuationPositive ? '⬆' : '⬇'} {Math.round(item.price_change_percentage_24h * 1000) / 1000}%
            </p>
            <p style={{ cursor: 'pointer' }}>
              {item.isWatchlisted ? (
                <a onClick={() => toogleWatchlist(item.id)}>★</a>
              ) : (
                <a onClick={() => toogleWatchlist(item.id)}>☆</a>
              )}
            </p>
          </div>
        );
      })}






    </div>



  )
}

export default CoinGrid
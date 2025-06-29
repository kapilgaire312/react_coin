import CoinGrid from "./CoinGrid"

function Watchlists({ coinArray, toogleTheWatchlist }) {
  let listedCoins = []
  coinArray.map((item) => {
    if (item.isWatchlisted) {
      listedCoins.push(item)
    }

  })


  return (
    <>
      {listedCoins.length === 0 ? <h4>You haven't watchlisted coins yet!</h4> : null}
      <CoinGrid coinArray={listedCoins} toogleWatchlist={toogleTheWatchlist} ></CoinGrid>
    </>


  )


}

export default Watchlists
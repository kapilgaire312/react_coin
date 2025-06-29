import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import Header from './Header'
import CoinGrid from './CoinGrid'
import Watchlists from './Watchlists'

function App() {
  const [coins, setCoins] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [tableHeader, setTableHeader] = useState('All Coins:')
  const [message, setMessage] = useState('Loading your all Coins...')
  const [showWatchlist, setShowWatchlist] = useState(false)

  useEffect(() => {

    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
      .then(res => res.json())
      .then(res => {

        let eachCoin = []
        res.map((item, index) => { eachCoin[index] = { ...item, isWatchlisted: false } });
        setCoins(eachCoin);
        setMessage('')

      })
      .catch(err => { console.log('Error Occured ' + err) })


  }, [])
  function changeWatchlist(itemId) {
    let eachCoin = [];
    let searchEachCoin = []
    coins.map((item, index) => {

      if (item.id === itemId) {
        eachCoin[index] = { ...item, isWatchlisted: !item.isWatchlisted }
        searchResults.map((searchItem, index) => {
          if (searchItem.id === itemId)
            searchEachCoin[index] = { ...searchItem, isWatchlisted: !searchItem.isWatchlisted }
          else
            searchEachCoin[index] = { ...searchItem }
        })

      }
      else {
        eachCoin[index] = { ...item }
      }
    });
    setCoins(eachCoin);
    setSearchResults(searchEachCoin)


  }

  function searchCoins(searchedCoin) {
    let eachCoin = []
    coins.map((item) => {
      if (item.name.toLowerCase().includes(searchedCoin.toLowerCase()) || item.symbol.toLowerCase().includes(searchedCoin.toLowerCase())) {
        eachCoin.push(item)

      }

    })
    setSearchResults(eachCoin);
    if (eachCoin.length === 0) {
      setMessage('Oops! Coin not found')
    }
    else {
      setMessage('')

    }
    setTableHeader(`Showing Results for: ${searchedCoin}`)

  }
  function viewWatchlists(val) {
    setShowWatchlist(val);
    setTableHeader('Your Watchlists:')

  }

  function homepage() {
    setSearchResults([])
    setTableHeader('All Coins:')
    setShowWatchlist(false)
  }



  // <CoinGrid coinArray={tableHeader === 'All Coins:' ? coins : searchResults} toogleWatchlist={changeWatchlist} />
  //  {message ? <h4>{message}</h4> : null}


  return (
    <>
      <Header coinSearch={searchCoins} openWatchlist={viewWatchlists} titleClick={homepage} />
      <h3>{tableHeader}</h3>
      {showWatchlist ?
        <Watchlists coinArray={coins} toogleTheWatchlist={changeWatchlist} />
        :
        <CoinGrid coinArray={tableHeader === 'All Coins:' ? coins : searchResults} toogleWatchlist={changeWatchlist} />


      }
      {message ? <h4>{message}</h4> : null}




    </>
  )
}

export default App

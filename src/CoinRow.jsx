function CoinRow({ image, name }) {
  return (
    <div className="coinRowDiv">
      <div style={{ width: '30%' }}></div>
      <div>
        <img alt={name + "-image"} src={image} ></img>


      </div>
      <p >{name}</p>
    </div>
  )
}

export default CoinRow
function CoinRow({ image, name }) {
  return (
    <div className="coinRowDiv">
      <div>
        <img alt={name + "-image"} src={image} ></img>


      </div>
      <p >{name}</p>
    </div>
  )
}

export default CoinRow
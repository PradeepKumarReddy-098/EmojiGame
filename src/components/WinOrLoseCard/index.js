import './index.css'

const WinOrLoseCard = props => {
  const {score, wonOrLoseText, playAgainBtn} = props
  const sideImg =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const clickPlay = () => {
    playAgainBtn()
  }
  return (
    <div className="win-lose-container">
      <div className="status-container">
        <h1>{wonOrLoseText}</h1>
        {score === 12 && <p>Best Score</p>}
        {score !== 12 && <p>Score</p>}
        <p className="score-status">{score}/12</p>
        <button type="button" className="play-button" onClick={clickPlay}>
          Play Again
        </button>
      </div>
      <img src={sideImg} alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard

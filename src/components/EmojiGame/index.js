import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    clickImageList: [],
    isGameInProgress: true,
    topScore: 0,
  }

  playAgainBtn = () => {
    this.setState({
      clickImageList: [],
      isGameInProgress: true,
    })
  }

  completGame = topLength => {
    const {topScore} = this.state
    const newTopScore = topScore < topLength ? topLength : topScore
    this.setState({
      isGameInProgress: false,
      topScore: newTopScore,
    })
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onClickedEmoji = id => {
    const {emojisList} = this.props
    const {clickImageList} = this.state
    const checkIdInList = clickImageList.includes(id)
    if (checkIdInList) {
      this.completGame(clickImageList.length)
    } else {
      if (clickImageList.length === emojisList.length - 1) {
        this.completGame(emojisList.length)
      }
      this.setState(prevState => ({
        clickImageList: [...prevState.clickImageList, id],
      }))
      this.shuffledEmojisList()
    }
  }

  checkScore = () => {
    const {clickImageList} = this.state
    const score = clickImageList.length
    return score
  }

  render() {
    const {topScore, isGameInProgress} = this.state
    const {emojisList} = this.props
    const score = this.checkScore()
    const wonOrLoseText = score === 12 ? 'You Won' : 'You Lose'
    return (
      <div className="background-container">
        <NavBar
          score={score}
          topScore={topScore}
          isGameInProgress={isGameInProgress}
        />
        {isGameInProgress && (
          <div className="emoji-container">
            <ul className="unorder-list">
              {emojisList.map(eachEmoji => (
                <EmojiCard
                  key={eachEmoji.id}
                  eachEmoji={eachEmoji}
                  onClickedEmoji={this.onClickedEmoji}
                />
              ))}
            </ul>
          </div>
        )}
        {isGameInProgress === false && (
          <div className="emoji-container">
            <WinOrLoseCard
              score={score}
              wonOrLoseText={wonOrLoseText}
              playAgainBtn={this.playAgainBtn}
            />
          </div>
        )}
      </div>
    )
  }
}

export default EmojiGame

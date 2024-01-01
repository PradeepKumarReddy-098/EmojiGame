import './index.css'

const EmojiCard = props => {
  const {eachEmoji, onClickedEmoji} = props
  const emojiClicked = () => {
    onClickedEmoji(eachEmoji.id)
  }
  return (
    <li className="img-container">
      <button type="button" className="emoji-button" onClick={emojiClicked}>
        <img src={eachEmoji.emojiUrl} alt={eachEmoji.emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard

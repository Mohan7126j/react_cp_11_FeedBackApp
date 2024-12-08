import {Component} from 'react'
import './index.css'

// Emoji URL component
const Emoji = props => {
  const {resource, onClickFeedback} = props
  const clickHandle = () => {
    onClickFeedback()
  }
  return (
    <li>
      <img src={resource.imageUrl} alt={resource.name} onClick={clickHandle} />
      <p>{resource.name}</p>
    </li>
  )
}

const Feedb = props => {
  const {emojis, onClickFeedback} = props

  return (
    <div className="feedback-container">
      <h1>How satisfied are you with our customer support performance</h1>
      <ul className="emoji-container">
        {emojis.map(items => (
          <Emoji
            key={items.id}
            resource={items}
            onClickFeedback={onClickFeedback}
          />
        ))}
      </ul>
    </div>
  )
}

const Thank = props => {
  const {loveEmojiUrl} = props
  return (
    <div className="feedback-container">
      <img src={loveEmojiUrl} alt="love emoji" />
      <h1>Thank You</h1>
      <p>
        We will use your feedback to improve our customer support performance.
      </p>
    </div>
  )
}

class Feedback extends Component {
  state = {
    isFeedbackGiven: false,
  }

  onClickFeedback = () => {
    this.setState({
      isFeedbackGiven: true,
    })
  }

  render() {
    const {isFeedbackGiven} = this.state
    const {resources} = this.props
    const {emojis} = resources
    const {loveEmojiUrl} = resources
    return (
      <div className="bg-container">
        {isFeedbackGiven ? (
          <Thank loveEmojiUrl={loveEmojiUrl} />
        ) : (
          <Feedb emojis={emojis} onClickFeedback={this.onClickFeedback} />
        )}
      </div>
    )
  }
}

export default Feedback

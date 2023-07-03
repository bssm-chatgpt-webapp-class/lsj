import './style.css'

const ChatItem = ({ imageLink, text }) => {
  return(
    <div className="main-container">
      <div className="question">
        <div><img className="profile-image" src={ imageLink } alt="뚱이"/></div>
        <pre>{text}</pre>
      </div>
    </div>
  )
}

export default ChatItem;
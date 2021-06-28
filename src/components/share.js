import React from 'react'
import { 
    FacebookShareButton, 
    FacebookIcon, 
    LineShareButton, 
    LineIcon,
    TwitterShareButton,
    TwitterIcon
} from 'react-share'
  
const Share = ({title, articleUrl}) => {
    return (
        <article className="message">
            <div className="message-header">
            <h3>Let's Share This Article!</h3>
            </div>
            <div className="message-body">
                <nav className="level is-mobile">
                    <div className="level-item has-text-centered">
                        <TwitterShareButton title={title} via="Mazic_tell_Arts" url={articleUrl} >
                            <TwitterIcon size={50} round />
                        </TwitterShareButton>
                    </div>
                    <div className="level-item has-text-centered">
                        <FacebookShareButton url={articleUrl}>
                            <FacebookIcon size={50} round />
                        </FacebookShareButton>
                    </div>
                    <div className="level-item has-text-centered">
                        <LineShareButton url={articleUrl} >
                            <LineIcon size={50} round />
                        </LineShareButton>
                    </div>
                </nav>
            </div>
        </article>
    )
}

export default Share;

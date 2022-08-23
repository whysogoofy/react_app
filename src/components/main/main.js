import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useNavigate
  } from "react-router-dom";
  import { withRouter } from '../../withRouter'
  import Comments from "../comments/comments";
  import Posts from "../posts/posts";
  // import './Main.scss';
  import './main.scss'

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          selected: 0
        }
      }

    static getDerivedStateFromProps(props, state) {
      return {
        selected: props.location.pathname === '/comments' ? 1 : 0
      }
    }

    componentDidMount() {
      // if(this.props.location.pathname === '/') {
      //   console.log('aahhh')
      //   this.props.navigate('/posts')
      // }
    }

    onClickHandle = (index) => {
      if(this.state.selected !== index) {
        this.setState({ selected: index })

        if(index===0) {
          this.props.navigate('/posts')
        } else {
          this.props.navigate('/comments')
        }
      }
    }

    render() {
      // if(this.props.location.pathname === '/') {
      //   console.log('aahhh')
      //   this.props.navigate('/posts', { replace: true })
      // }
        return(
            <div>
              <div className='nav-wrapper'>
                <div 
                className={`posts-wrapper ${this.state.selected === 0 ? 'active' : ''}`} 
                onClick={() => this.onClickHandle(0)}
                >
                  POSTS
                </div>
                <div 
                className={`comments-wrapper ${this.state.selected === 1 ? 'active' : ''}`}
                onClick={() => this.onClickHandle(1)}
                >
                  COMMENTS
                </div>
              </div>
              <div className="lists-wrapper">
                            <Routes>
                            <Route path="/" element={<Posts />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/comments" element={<Comments />} />
        </Routes>
        </div>
            </div>
        )
    }
}

export default withRouter(Main)
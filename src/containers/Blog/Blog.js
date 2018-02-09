import React, {Component} from 'react';

import Post from '../../components/Post/Post';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import './Blog.css';
//import axios from 'axios';
import axios from '../../axios';
import Posts from './Posts/Posts'

class Blog extends Component {

    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/new-post">New post</a>
                            </li>
                        </ul>
                    </nav>
                </header>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost/>
                </section>
                <Posts />
            </div>
        );
    }
}

export default Blog;

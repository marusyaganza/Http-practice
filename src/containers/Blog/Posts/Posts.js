import React, {Component} from 'react';
import axios from "../../../axios";
import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            selectedPostId: null,
            error: false
        }
    }
    componentDidMount() {
        axios.get('/posts')
            .then(
                response => {
                    const posts = response.data.slice(0, 4);
                    const updatedPosts = posts.map(
                        post => {
                            return {
                                ...post,
                                author: 'Max'
                            }
                        }
                    );
                    this.setState({posts: updatedPosts});
                }
            )
            .catch(() => {
                this.setState({error: true});
            })
    }
    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    };
    render() {
        let posts = <p className="error"> Something went wrong! </p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                    return <Post
                        title={post.title}
                        key={post.id}
                        author={post.author}
                        clicked={() => this.postSelectedHandler(post.id)}
                    />
                }
            );
        }
        return (
                <section className="Posts">
                    {posts}
                </section>
            )
    }
}
export default Posts;

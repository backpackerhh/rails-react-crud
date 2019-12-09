import React from 'react';

export default class PostDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = { post: {} };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;

    fetch(`/api/v1/posts/${id}`).
      then((response) => response.json()).
      then((post) => this.setState({ post }));
  }

  render() {
    const { post } = this.state;

    return (
      <div>
        <p>
          <strong>Title:</strong>
          <br />
          {post.title}
        </p>
        <p>
          <strong>Description:</strong>
          <br />
          {post.description}
        </p>
        <p>
          <strong>Is published:</strong>
          <br />
          {post.is_published ? 'Yes' : 'No'}
        </p>
      </div>
    );
  }
}

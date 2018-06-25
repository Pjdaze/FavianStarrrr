import React from 'react';
import IntroWrapper from './containers/IntroWrapper';
import Story from './Story';

class Intro extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      feed: {}
    };
  }

  componentDidMount() {
    fetch(
      'https://api.instagram.com/v1/users/self/media/recent/?access_token=323463912.813a6eb.b7123d8d9d904d3d921d84d6381b6d7c'
    )
      .then(response => {
        return response.json();
      })
      .then(res => {
        this.setState({
          feed: [...res.data]
        });
        console.log(res);
      });
  }

  render() {
    const { feed } = this.state;

    return (
      <IntroWrapper className="feed">
        {!feed.length ? 'loading...' : feed.map(x => <Story x={x} />)}
      </IntroWrapper>
    );
  }
}
export default Intro;

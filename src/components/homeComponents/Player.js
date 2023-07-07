import React from 'react';

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.audioRef = React.createRef();
  }

  componentDidMount() {
    const audio = this.audioRef.current;
    audio.addEventListener('play', this.handlePlay);
    audio.addEventListener('pause', this.handlePause);
    audio.addEventListener('ended', this.handleEnded);
  }

  componentWillUnmount() {
    const audio = this.audioRef.current;
    audio.removeEventListener('play', this.handlePlay);
    audio.removeEventListener('pause', this.handlePause);
    audio.removeEventListener('ended', this.handleEnded);
  }

  handlePlay = () => {
    console.log('Audio started playing');
  }

  handlePause = () => {
    console.log('Audio paused');
  }

  handleEnded = () => {
    console.log('Audio playback ended');
  }

  render() {
    const { audioPath } = this.props;

    return (
      <div>
        <audio ref={this.audioRef} controls>
          <source src={audioPath} type="audio/mp3" />
        </audio>
      </div>
    );
  }
}

class Player extends React.Component {
  render() {
    const audioPath = require('./Doings.mp3'); 

    return (
      <div>
        <h4>Play our song below</h4>
        <AudioPlayer audioPath={audioPath} />
      </div>
    );
  }
}

export default Player;

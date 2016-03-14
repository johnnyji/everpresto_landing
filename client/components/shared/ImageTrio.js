import React, {Component, PropTypes} from 'react';
import pureRender from 'pure-render-decorator';

const displayName = 'ImageTrio';

@pureRender
export default class ImageTrio extends Component {
  static displayName = displayName;

  static propTypes = {
    center: PropTypes.string.isRequired,
    left: PropTypes.string.isRequired,
    right: PropTypes.string.isRequired
  };

  render() {
    return (
      <section className={displayName}>
        <img className={`${displayName}-left`} src={this.props.left} />
        <img className={`${displayName}-center`} src={this.props.center} />
        <img className={`${displayName}-right`} src={this.props.right} />
      </section>
    );
  }
}
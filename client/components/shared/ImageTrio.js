import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
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
    const {center, className, left, right} = this.props;

    return (
      <section className={classNames({[className]: className}, displayName)}>
        <img className={`${displayName}-left`} src={left} />
        <img className={`${displayName}-center`} src={center} />
        <img className={`${displayName}-right`} src={right} />
      </section>
    );
  }
}
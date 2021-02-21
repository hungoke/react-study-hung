import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Tag extends Component {
  changeTag = () => {
    this.props.changeTag(this.props.tag)
  }

  render() {
    const { tag, currentTag } = this.props
    return (
      <label>
        <input
          type="radio"
          name="tag"
          checked={currentTag === tag.id}
          onChange={this.changeTag}
        />
        {tag.name}
      </label>
    )
  }
}

Tag.propTypes = {
  tag: PropTypes.object,
  changeTag: PropTypes.func,
  currentTag: PropTypes.number
}

export default Tag

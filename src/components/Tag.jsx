import React, { Component } from 'react'

class Tag extends Component {
  changeTag = () => {
    this.props.changeTag(this.props.tag)
  }

  render() {
    const { tag, currentTag } = this.props

    return (
      <label>
        <input id={tag.id} onChange={this.changeTag} type="radio" name="tag" checked={currentTag === tag.id} />
        {tag.name}
      </label>
    )
  }
}

export default Tag

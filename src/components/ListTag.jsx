import React, { Component } from 'react'
import Tag from './Tag'

class ListTag extends Component {
  changeTag = (tag) => {
    this.props.changeCurrentTag(tag)
  }

  render() {
    const { tags, currentTag } = this.props

    return (
      <div>
        <span>Tags</span>
        <Tag
          tag={{id: 0, name: 'All'}}
          key={0}
          changeTag={this.changeTag}
          currentTag={currentTag}
        />

        {
          tags.map((tag) => (
            <Tag
              tag={tag}
              key={tag.id}
              changeTag={this.changeTag}
              currentTag={currentTag}
            />
          ))
        }

        <button>Reset</button>
      </div>
    )
  }
}

export default ListTag

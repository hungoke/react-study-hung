import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Tag from './Tag'

class TagsList extends Component {
  changeTag = tag => {
    this.props.changeCurrentTag(tag)
  }

  render() {
    const { tags, currentTag } = this.props
    return (
      <div>
        <span>Tags</span>
        <Tag
          key={0}
          tag={{id: 0, name: 'All'}}
          changeTag={this.changeTag}
          currentTag={currentTag}
        />

        {
          tags.map((tag) => (
            <Tag
              key={tag.id}
              tag={tag}
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

TagsList.propTypes = {
  currentTag: PropTypes.number,
  tags: PropTypes.array,
  changeCurrentTag: PropTypes.func
}

export default TagsList

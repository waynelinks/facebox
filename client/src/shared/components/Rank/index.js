import React from 'react'
import { connect } from 'react-redux'

import './index.css'

const Rank = ({ entries }) => {
  return (
    <section className='rank'>
      <h3>Your current entry count is {entries}</h3>
    </section>
  )
}

const mapStateToProps = ({ image }) => ({
  entries: image.entries
})

export default connect(
  mapStateToProps,
  null
)(Rank)

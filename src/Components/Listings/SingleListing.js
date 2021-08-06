import React, { Fragment } from 'react'
import 'firebase/storage'
import ListingCard from '../UI/ListingCard'

const SingleListing = (data) => {
  const button = {
    label: 'More Details',
    link: `/listing-detail/${data.id}`
  }
  console.log(data)
  return (
    <Fragment>
      <ListingCard {...data} button={button} />
    </Fragment>
  )
}

export default SingleListing

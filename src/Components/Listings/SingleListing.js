import React, { Fragment } from 'react'
import 'firebase/storage'
import ListingCard from '../UI/ListingCard'

const SingleListing = props => {
  const {
    id,
    baths,
    beds,
    kitchen,
    general,
    city,
    country,
    dates,
    photo,
    data
  } = props

  const button = { label: 'More Details', link: '/listing-detail/' + id }

  return (
    <Fragment>
      <ListingCard
        id={id}
        baths={baths}
        beds={beds}
        kitchen={kitchen}
        general={general}
        city={city}
        country={country}
        dates={dates}
        button={button}
        key={id}
        photos={photo}
        data={data}
      />
    </Fragment>
  )
}

export default SingleListing

import React, { Fragment } from 'react'
import 'firebase/storage'
import { usePhotos } from '../../Hooks/usePhotos'
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
    photos
  } = props

  console.log(photos, id)

  const button = {label: "More Details"}
  const link = '/listing-detail/' + id

  usePhotos(photos, id)

  return (
    <Fragment>
      <ListingCard
        id={id}
        baths={baths}
        bed={beds}
        kitchen={kitchen}
        general={general}
        city={city}
        country={country}
        dates={dates}
 
        button={button}
        link={link}
      />
    </Fragment>
  )
}

export default SingleListing

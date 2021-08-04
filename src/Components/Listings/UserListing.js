import React, { Fragment } from 'react'
import ListingCard from '../UI/ListingCard'

const UserListing = ({
  id,
  baths,
  beds,
  kitchen,
  general,
  city,
  country,
  dates,
  data
}) => {
  const button = { label: 'Edit', link: './edit-my-listing' }

  return (
    <Fragment>
      <ListingCard
        id={id}
        key={id}
        baths={baths}
        bed={beds}
        kitchen={kitchen}
        general={general}
        city={city}
        country={country}
        dates={dates}
        button={button}
        data={data}
      />
    </Fragment>
  )
}
export default UserListing

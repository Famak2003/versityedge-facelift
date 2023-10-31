import React from 'react'

const Country = ({country}) => {
  return (
    <option value={country.countryCode} country={country}>
            <img
                alt="country flag"
                src={country.flag}
            />
            <p className="relative font-light">+{country.countryCode}</p>
    </option>
  )
}

export default Country;
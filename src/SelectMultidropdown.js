import React, { useEffect, useState } from 'react';
import Multiselect from 'multiselect-react-dropdown';

function SelectMultidropdown() {

  const [options, setOptions] = useState([]);
  const [country, setcountry] = useState([]);
  

  const getCountries = async () => {
    const arr = []
    let response = await fetch('https://countriesnow.space/api/v0.1/countries')
    response = await response.json()
    const { data } = response

    data.forEach((val) => {
      arr.push(val.country)
    })
    setcountry([arr[0],arr[1]])
    setOptions(arr)
  }
  
  useEffect(() => {

    getCountries();

  }, [])

  return (
    <>
      <main className="content" >
            <form method='post'>
                <div className='selectList'>
                  <Multiselect
                  isObject={false}
                  options={options}
                  displayValue="key"
                    showCheckbox
                    selectedValues = {country} 
                  />
                </div>
            </form>
      </main>
    </>
  )
}
export default SelectMultidropdown;
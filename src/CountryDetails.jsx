import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const CountryDetails = () => {
    var x = useParams();
    
    var [country,setCountry] = useState(null);

    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/name/${x.cname}`)
        .then((res)=>{return res.json()})
        .then((data)=>{
            console.log(data[0])
            setCountry({...data[0]})
        })
    },[])

  return (
    <section className="py-5">
       {country?.name?.common && (
        <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">{country.name.common} Details</h2>
          <div className="row">
            {/* Flag and Coat of Arms */}
            <div className="col-md-4 text-center mb-4">
              <img
                src={country.flags.png}
                alt={country.flags.alt || "Country flag"}
                className="img-fluid mb-3"
                style={{ maxHeight: "200px" }}
              />
              <img
                src={country.coatOfArms.png}
                alt="Coat of Arms"
                className="img-fluid"
                style={{ maxHeight: "150px" }}
              />
            </div>
  
          </div>
  
          {/* Additional Details */}
          <div className="row mt-4">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Language and Currency</h5>
                  <p>
                    <strong>Language:</strong> {Object.values(country.languages).join(", ")}
                  </p>
                  <p>
                    <strong>Currency:</strong> {country?.currencies?.BBD?.name} ({country?.currencies?.BBD?.symbol})
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       )}
    </section>
  );
};

export default CountryDetails;

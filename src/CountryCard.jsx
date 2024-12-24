import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CountryCard = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
          throw new Error("Failed to fetch country data");
        }
        const data = await response.json();
        setCountries(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  if (loading) {
    return <div className="text-center py-5">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-5 text-danger">{error}</div>;
  }

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">All Countries</h2>
        <div className="row">
          {countries.map((country) => (
            <div className="col-md-4 mb-4" key={country.cca3}>
              <div className="card h-100">
                
                <div className="card-body">
                  <h5 className="card-title">{country.name.common}</h5>
                  <p className="card-text">
                    <strong>Capital:</strong> {country.capital ? country.capital[0] : "N/A"}
                  </p>
                  <p className="card-text">
                    <strong>Region:</strong> {country.region}
                  </p>
                  <p className="card-text">
                    <strong>Population:</strong> {country.population.toLocaleString()}
                  </p>
                    <Link to={`/countryDetails/${country.name.common}`}>More...</Link>
                    &nbsp;&nbsp;&nbsp;
                    <Link to={`/inkaDetails`} state={country}>Inkakavali...</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountryCard;

import { useState } from "react";

const WeatherSearch = (props) => {
    const [ city, setCity ] = useState("");

    const handleInputChange = () => {
        setCity(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.fetchData(city);
        setCity("");
    };

    return (
        <section>
            <h2>Search</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="city">Enter a city: </label>
                <input 
                id="city"
                name="city"
                value={city}
                onChange={handleInputChange}
                type="text" />
                <button type="submit">Submit</button>
            </form>
        </section>
    );
};

export default WeatherSearch;
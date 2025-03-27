// presentational component

const WeatherDetails = (props) => {
    console.log("Weatherdetails props: ", props);

    return (
        <section>
            <h2>Weather Details</h2>
            <p>Location: {props.weather.location} </p>
            <p>Condition: {props.weather.condition}</p>
            <p>Temperature: {props.weather.temperature}</p>
        </section>
    );
};

// const Weatherdetails = ({weather}) => {
    // const [location, condition, temperature] = weather;
    //}

export default WeatherDetails;
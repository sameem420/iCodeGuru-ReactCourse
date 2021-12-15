function Greetings(props) {
  const { firstName, lastName, city, Area } = props;
  //   console.log(props);
  return (
    <div>
      <h1>Welcome to the Site {firstName + " " + lastName}</h1>
      <h2>
        {city} : {Area}
      </h2>
    </div>
  );
}

export default Greetings;

function Home(props) {
    console.log(props)
    const { heading } = props;
    return (
        <div>
            <h1>{heading}</h1>
            
        </div>
    )
}

export default Home;


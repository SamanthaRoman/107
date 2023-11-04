import "./home.css";


function Home(){
    return (
        <div className="home">
            <h2>Welcome to The Candles Shop</h2>
            <div className="home-page">
                <img src={'./images/bogo.jpeg'} alt="Owner" />
                <div className="details">
                    <h2>November Special</h2>
                    <h3>Buy One Get One FREE!!!</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, nisi! Ipsa culpa repellat natus ipsum commodi cumque harum voluptate quam, alias ipsam repudiandae veritatis facilis at laborum error voluptates. Culpa amet ex nobis est nisi ducimus velit, odit dolores laboriosam omnis et perferendis voluptas pariatur aspernatur porro neque fuga iste!</p><button className="btn btn-primary"><span class="blink_me">Shop BOGO Sale</span></button>
                </div>
            </div>
            
        </div>
    )
}


export default Home;
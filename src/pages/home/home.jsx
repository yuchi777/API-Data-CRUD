import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  return (
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatibus dignissimos eligendi possimus commodi obcaecati quas, placeat iste assumenda vel earum veniam, molestias quam voluptas similique debitis voluptatum beatae enim! Incidunt eius libero officia nam a officiis delectus quos sit! Veritatis fuga molestias, officiis nisi laudantium, voluptatibus error hic nam iusto eaque molestiae est tempore nemo, quasi itaque ratione asperiores non corrupti quae! Atque, accusamus temporibus repudiandae magni eaque reiciendis inventore dignissimos nam autem voluptatem reprehenderit? Ipsum sunt animi saepe odio eaque quos facilis a illo, expedita commodi, iusto unde amet eius libero nesciunt repellat? Quisquam eius nam molestiae accusantium?
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
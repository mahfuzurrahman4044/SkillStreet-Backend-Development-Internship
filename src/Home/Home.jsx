import { Link } from "react-router-dom";
import RetrieveNote from "../RetrieveNote/RetrieveNote";

const Home = () => {
          return (
                    <div>
                              <RetrieveNote></RetrieveNote>
                              <Link  to="/createNote" className="flex justify-center mt-5"><button className="btn btn-primary">Create Note</button></Link>
                    </div>
          );
};

export default Home;
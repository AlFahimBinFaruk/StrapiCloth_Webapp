import { MDBCol, MDBRow } from 'mdb-react-ui-kit';
import{ useState } from 'react'
import Banner from '../../common_components/Banner';
import SingleCategoryCard from './components/SingleCategoryCard';

const Home = () => {
    const [count, setcount] = useState([1, 2, 3, 4, 5, 6]);
    return (
      <div className="home">
        {/* banner */}
        <Banner />
        {/* category list */}
        <div className="category-list">
          <h4 className="text-center mb-3">Available Categories</h4>
          <MDBRow className="gy-4">
            {count.map((i, index) => {
              return (
                <MDBCol key={index} size="12" md="4" xl="3">
                  <SingleCategoryCard />
                </MDBCol>
              );
            })}
          </MDBRow>
        </div>
      </div>
    );
}

export default Home
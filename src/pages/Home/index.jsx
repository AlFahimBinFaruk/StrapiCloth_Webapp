import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import Banner from "../../common_components/Banner";
import SingleCategoryCard from "./components/SingleCategoryCard";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllCategoryList,
  reset,
} from "../../features/category/categorySlice";
import { useEffect } from "react";
import LoadingSpinner from "../../common_components/LoadingSpinner";
import ServerError from "../Error/ServerError";
const Home = () => {
  //use selector
  const { categoryList, isCategoryLoading, isCategoryError } = useSelector(
    (state) => state.category
  );
  //dispatch
  const dispatch = useDispatch();

  //get all categorylist when the page load
  useEffect(() => {
    dispatch(getAllCategoryList());
    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

  //loading
  if (isCategoryLoading) {
    return <LoadingSpinner />;
  }

  //error
  if (isCategoryError) {
    return <ServerError />;
  }
  return (
    <div className="home">
      {/* banner */}
      <Banner />
      {/* category list */}
      <div className="category-list">
        <h4 className="text-center mb-3">Available Categories</h4>
        <MDBRow className="gy-4">
          {categoryList.length > 0 &&
            categoryList.map((i, index) => {
              return (
                <MDBCol key={index} size="12" md="4" xl="3">
                  <SingleCategoryCard id={i.id} title={i.attributes.title} />
                </MDBCol>
              );
            })}
        </MDBRow>
      </div>
    </div>
  );
};

export default Home;

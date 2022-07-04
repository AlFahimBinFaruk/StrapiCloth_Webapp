import {
  MDBCol,
  MDBRange,
  MDBRow,
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink,
} from "mdb-react-ui-kit";

import { useState } from "react";
import SingleProductCard from "./components/SingleProductCard";

const Shop = () => {
  const [count, setcount] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <div className="shop">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="text-dark">Product of category T-shirts</h5>
        {/* filter price slider */}
        <div className="filter-price">
          <p className="text-dark fw-bold mb-1">Filter Price:</p>
          <MDBRange defaultValue={50} id="customRange" />
        </div>
      </div>
      {/* product list */}
      <MDBRow className="gy-4">
        {count.map((i, index) => {
          return (
            <MDBCol key={index} size="12" md="4" xl="3">
              <SingleProductCard />
            </MDBCol>
          );
        })}
      </MDBRow>
      {/* pagination */}
      <div className="d-flex justify-content-center my-5">
        <MDBPagination>
          <MDBPaginationItem disabled>
            <MDBPaginationLink href="#" tabIndex={-1} aria-disabled="true">
              Previous
            </MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBPaginationLink href="#">1</MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem active aria-current="page">
            <MDBPaginationLink href="#">
              2 <span className="visually-hidden">(current)</span>
            </MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBPaginationLink href="#">3</MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBPaginationLink href="#">Next</MDBPaginationLink>
          </MDBPaginationItem>
        </MDBPagination>
      </div>
    </div>
  );
};

export default Shop;

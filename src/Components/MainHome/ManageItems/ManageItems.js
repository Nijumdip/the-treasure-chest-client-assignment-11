import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import AddItem from "../SingleInventory/AddItem";
import AllItems from "../SingleInventory/AllItems";
import MyItems from "../SingleInventory/MyItems";

const ManageItems = () => {
  return (
    <div>
      Manage Inventories
      <Navbar bg=" my-5 container" variant="light">
        <Container>
          <Nav className="mx-auto">
            <Link to="/manage/addItems">
              <strong>
                <h5 className="text-dark">Add Items</h5>
              </strong>
            </Link>
            <Link to="/manage/allItems">
              <strong>
                <h5 className="text-dark mx-5">All Items</h5>
              </strong>
            </Link>
            <Link to="/manage/myItems">
              <strong>
                <h5 className="text-dark">My Items</h5>
              </strong>
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <div>
        <Routes>
          <Route path="addItems" element={<AddItem />} />
          <Route path="allItems" element={<AllItems />} />
          <Route path="myItems" element={<MyItems />} />
        </Routes>
      </div>
    </div>
  );
};

export default ManageItems;

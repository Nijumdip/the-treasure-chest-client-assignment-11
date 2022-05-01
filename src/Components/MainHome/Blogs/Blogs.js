import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Blogs = () => {
  return (
    <Container>
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card className=" blog p-3 my-5 border-0 shadow">
            <img
              variant="top"
              className="mx-auto m-3 rounded-3"
              width="180px"
              height="150px"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-COqGYC2gya-R1WfcaslgfpcclAhjBbwWrw&usqp=CAU"
              alt=""
            />
            <div className="text-start">
              <h6>Q. 01. Difference between javascript and nodejs .</h6>
              <p>
                Ans: <br />
                i. JavaScript Simple programming language <br />
                ii. It runs in any browser JavaScript Engine & We can only run
                JS on browsers.
                <br />
                iii. It used to create web scripts <br />
                iv. The JS can easily add HTML and even play with the DOM.
                <br />
                v. it is used in the development of the front end. <br />
                <br />
                i. Node JS is an interpreter <br />
                ii. It is running environment for JavaScript that holds many
                excesses &NodeJS helps us run JS outside the browser as well.
                <br />
                iii. It built on google's v8 engine.
                <br />
                iv. The Node.JS, on the other hand, isn't capable enough to add
                various HTML tags.
                <br />
                v. it helps in the server-side development via the JS.
                <br />
              </p>
            </div>
            <div >
              <Button variant="outline-success w-75 " size="lg">
                {" "}
                Read More
              </Button>
            </div>
          </Card>
        </Col>

        <Col>
          <Card className=" blog p-3 my-5 border-0 shadow">
            <img
              variant="top"
              className="mx-auto m-3 rounded-3"
              width="180px"
              height="150px"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6qpbsQek8SnrLyIHKbRzbM21yJaU1iEx9Cg&usqp=CAU"
              alt=""
            />
            <div className="text-start">
              <h6>
                Q.02. When should you use nodejs and when should you use mongodb
                ?
              </h6>
              <p>
                Ans: <br />
                i. JMongoDB used for Multi-Object Transactions <br />
                ii. MongoDB used for SQL . <br />
                iii. It used for Strong ACID guarantees. <br />
                iv. MongoDB used for strong BI applications and those run
                against traditional SQL database <br />
                v. Lots of memory ,storage does not auto-shrink when you remove
                records. <br />
                <br />
                i. Node JS used for non-blocking <br />
                ii. It used for event-driven servers. <br />
                iii. It's used for traditional web sites and back-end API
                services <br />
                iv. It's used for back-end API services <br />
                v. Used for providing serverless architecture and real-time
                communication support. <br />
              </p>
            </div>
            <div >
              <Button variant="outline-success w-75 " size="lg">
                {" "}
                Read More
              </Button>
            </div>
          </Card>
        </Col>

        <Col>
          <Card className=" blog p-3 my-5 border-0 shadow">
            <img
              variant="top"
              className="mx-auto m-1 rounded-3"
              width="180px"
              height="150px"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFt7PsIMcBaHYwUtdd5xwaaAFaMG4WnDnOzA&usqp=CAU"
              alt=""
            />
            <div className="text-start">
              <h6>Q.03. Differences between sql and no sql databases.</h6>
              <p>
                Ans: <br />
                i. SQL is a query programming language <br />
                ii. SQL databases are vertically scalable . <br />
                iii. SQL used to query and operate database systems. <br />
                iv. SQL databases are table-based, <br />
                v. SQL databases are better for multi-row transactions <br />
                <br />
                i. MySQL is a relational database <br />
                ii. NoSQL databases are horizontally scalable.. <br />
                iii. MySQL handle, store, modify and delete data and store data
                in an organized way <br />
                iv. NoSQL databases are document, key-value, graph, or
                wide-column stores. <br />
                v. oSQL is better for unstructured data like documents or JSON.{" "}
                <br />
                <br />
              </p>
            </div>
            <div >
              <Button variant="outline-success w-75 " size="lg">
                {" "}
                Read More
              </Button>
            </div>
          </Card>
        </Col>

        <Col>
          <Card className=" blog p-3 my-5 border-0 shadow">
            <img
              variant="top"
              className="mx-auto m-1 rounded-3"
              width="180px"
              height="130px"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWl1ToYBQ7uXEKcHIGjU9grXZIEXV20PdFwQ&usqp=CAU"
              alt=""
            />
            <div className="text-start">
              <h6>Q.04. What is the purpose of jwt and how does it work?</h6>
              <p>
                Ans:  <br />
                JWT can be used as an access token to prevent unwanted
                access to a protected resource. <br /> They're often used as Bearer
                tokens, which the API will decode and validate before sending a 
                response.. It is a mechanism to verify the owner of some JSON
                data. <br /> It's an encoded, URL-safe string that can contain an
                unlimited amount <br /> of data (unlike a cookie) and is
                cryptographically signed. <br /> When a server receives a JWT, it can
                guarantee the data it contains  <br />can be trusted because it's
                signed by the source.
              </p>
            </div>
            <div className="mt-5 ">
              <Button variant="outline-success w-75 " size="lg">
                {" "}
                Read More
              </Button>
            </div>
            </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Blogs;

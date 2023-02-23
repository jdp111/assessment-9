import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function Home({drinks, snacks}) {
//modified to show number of drinks and snacks available
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>
          <p>We have {drinks.length} drink options and {snacks.length} snack options </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;

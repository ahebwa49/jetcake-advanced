import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import Footer from "../../common/Footer";

let component;

component = shallow(<Footer />);

test("Footer component renders without crashing", () => {
  expect(toJson(component)).toMatchSnapshot();
});

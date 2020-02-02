import React from "react";
import configureStore from "redux-mock-store";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import toJson from "enzyme-to-json";

import MobileMenu from "../../common/MobileMenu";

const mockStore = configureStore([]);

let component;

component = shallow(<MobileMenu />);

test("MobileMenu component renders without crashing", () => {
  expect(toJson(component)).toMatchSnapshot();
});

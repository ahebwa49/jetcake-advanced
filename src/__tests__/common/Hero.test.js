import React from "react";
import configureStore from "redux-mock-store";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import toJson from "enzyme-to-json";

import Hero from "../../common/Hero";

const mockStore = configureStore([]);

let component;

component = shallow(<Hero />);

test("EditProfile component renders without crashing", () => {
  expect(toJson(component)).toMatchSnapshot();
});

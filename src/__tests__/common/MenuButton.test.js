import React from "react";
import configureStore from "redux-mock-store";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import toJson from "enzyme-to-json";

import MenuButton from "../../common/MenuButton";

const mockStore = configureStore([]);

let component;

component = shallow(<MenuButton />);

test("MenuButton component renders without crashing", () => {
  expect(toJson(component)).toMatchSnapshot();
});

import React from "react";
import configureStore from "redux-mock-store";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import toJson from "enzyme-to-json";

import MenuButtonClose from "../../common/MenuButtonClose";

const mockStore = configureStore([]);

let component;

component = shallow(<MenuButtonClose />);

test("MenuButtonClose component renders without crashing", () => {
  expect(toJson(component)).toMatchSnapshot();
});

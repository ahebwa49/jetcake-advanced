import React from "react";
import configureStore from "redux-mock-store";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import toJson from "enzyme-to-json";

import EditProfile from "../../common/EditProfile";

const mockStore = configureStore([]);

let component;

component = shallow(<EditProfile />);

test("EditProfile component renders without crashing", () => {
  expect(toJson(component)).toMatchSnapshot();
});

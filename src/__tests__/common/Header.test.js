import React from "react";
import configureStore from "redux-mock-store";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import toJson from "enzyme-to-json";

import { Header } from "../../common/Header";

const mockStore = configureStore([]);

let component;
let wrapper;
let store;

beforeEach(() => {
  store = mockStore({
    user: { username: "ahebwa49@gmail.com" }
  });

  component = shallow(<Header />);

  wrapper = mount(
    <Provider store={store}>
      <Header />
    </Provider>
  );
});

component = shallow(<Header />);

test("Header component renders without crashing", () => {
  expect(toJson(component)).toMatchSnapshot();
});

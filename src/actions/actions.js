const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const ERROR_MESSAGE = "ERROR_MESSAGE";

export const userRegisterFetch = formData => {
  return dispatch => {
    return fetch("http://localhost:4000/api/register", {
      method: "POST",
      body: formData,
      credentials: "include"
    })
      .then(response => {
        if (response.ok) {
          document
            .querySelector(".form-wrapper")
            .classList.remove("requesting");
          document.querySelector(".form-wrapper").classList.remove("inactive");
          return response.json();
        } else {
          return response.json().then(body => {
            document
              .querySelector(".form-wrapper")
              .classList.remove("requesting");
            document
              .querySelector(".form-wrapper")
              .classList.remove("inactive");
            throw new Error(body.error);
          });
        }
      })
      .then(async data => {
        console.log(data);
        localStorage.setItem("token", data.token);
        await dispatch(loginUser(data.user));
      })
      .catch(error => {
        document.querySelector(".errorMessage").classList.add("active");
        dispatch(addErrorMessage(error.message));
      });
  };
};

export const userLoginFetch = data => {
  return dispatch => {
    return fetch("http://localhost:4000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(data),
      credentials: "include"
    })
      .then(response => {
        if (response.ok) {
          document
            .querySelector(".form-wrapper")
            .classList.remove("requesting");
          document.querySelector(".form-wrapper").classList.remove("inactive");
          return response.json();
        } else {
          return response.json().then(body => {
            document
              .querySelector(".form-wrapper")
              .classList.remove("requesting");
            document
              .querySelector(".form-wrapper")
              .classList.remove("inactive");
            throw new Error(body.error);
          });
        }
      })
      .then(async data => {
        console.log(data);
        localStorage.setItem("token", data.token);
        await dispatch(loginUser(data.user));
      })
      .catch(error => {
        document.querySelector(".errorMessage").classList.add("active");
        dispatch(addErrorMessage(error.message));
      });
  };
};

export const userProfileFetch = () => {
  return dispatch => {
    const token = localStorage.token;
    if (token) {
      return fetch("http://localhost:4000/api/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`
        }
      })
        .then(resp => resp.json())
        .then(data => {
          console.log(data);
          dispatch(loginUser(data));
        })
        .catch(error => {
          dispatch(addErrorMessage(error.message));
        });
    }
  };
};

export const loginUser = user => {
  return {
    type: LOGIN,
    user: user
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT
  };
};

export const addErrorMessage = message => {
  return {
    type: ERROR_MESSAGE,
    message: message
  };
};

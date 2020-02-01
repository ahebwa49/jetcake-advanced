import React from "react";

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: "",
      phoneNumber: "",
      address: "",
      nickname: "",
      dateOfBirth: "",
      book: "",
      spouse: "",
      error: "",
      _id: ""
    };
  }

  componentDidMount() {
    fetch("http://localhost:4000/profile", {
      method: "GET",
      credentials: "include"
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          profile: data.profile,
          phoneNumber: data.phoneNumber,
          address: data.address,
          nickname: data.nickname,
          dateOfBirth: data.dateOfBirth,
          book: data.book,
          spouse: data.spouse,
          _id: data._id
        });
      })
      .catch(error => console.log(error));
  }

  handleProfileChange = e => {
    this.setState({
      profile: e.target.files[0]
    });
  };

  handlePhoneNumberChange = e => {
    this.setState({
      phoneNumber: e.target.value
    });
  };

  handleAddressChange = e => {
    this.setState({
      address: e.target.value
    });
  };

  handleNicknameChange = e => {
    this.setState({
      nickname: e.target.value
    });
  };

  handleDateOfBirthChange = e => {
    this.setState({
      dateOfBirth: e.target.value
    });
  };

  handleBookChange = e => {
    this.setState({
      book: e.target.value
    });
  };

  handleSpouseChange = e => {
    this.setState({
      spouse: e.target.value
    });
  };

  handleRemovePhoto = () => {
    this.setState({
      profile: ""
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { _id } = this.state;

    document.querySelector(".form-wrapper").classList.add("requesting");
    document.querySelector(".form-wrapper").classList.add("inactive");

    let formData = new FormData();

    console.log(this.state.profile);

    formData.append("avatar", this.state.profile);
    formData.append("phoneNumber", this.state.phoneNumber);
    formData.append("address", this.state.address);
    formData.append("dateOfBirth", this.state.dateOfBirth);
    formData.append("nickname", this.state.nickname);
    formData.append("book", this.state.book);
    formData.append("spouse", this.state.spouse);

    fetch(`http://localhost:4000/profile/edit/${_id}`, {
      method: "PUT",
      body: formData,
      credentials: "include"
    })
      .then(response => {
        if (response.ok) {
          document
            .querySelector(".form-wrapper")
            .classList.remove("requesting");
          document.querySelector(".form-wrapper").classList.remove("inactive");
          document.querySelector(".successMessage").classList.add("active");
        }
      })
      .catch(error => {
        console.log(error);
        document.querySelector(".errorMessage").classList.add("active");
        this.setState({
          error: error.message
        });
      });
  };

  render() {
    return (
      <div className="page-wrapper">
        <div className="container feature-top pb-0">
          <div className="form-wrapper">
            <div className="loading">loading ...</div>
            <h1>Edit your Profile</h1>
            <form className="form" onSubmit={this.handleSubmit} method="post">
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Profile Photo
                </label>
                {this.state.profile.length ? (
                  <>
                    <img
                      width="100"
                      height="100"
                      src={this.state.profile}
                      alt="profile"
                    />
                    <br />
                    <button type="button" onClick={this.handleRemovePhoto}>
                      change photo
                    </button>
                  </>
                ) : (
                  <input
                    type="file"
                    onChange={this.handleProfileChange}
                    id="profile"
                    name="profile"
                    required
                  />
                )}
              </div>
              <div className="form-group">
                <label htmlFor="phone number" className="form-label">
                  Phone number
                </label>
                <input
                  type="text"
                  id="phone number"
                  name="phone number"
                  value={this.state.phoneNumber}
                  onChange={this.handlePhoneNumberChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={this.state.address}
                  onChange={this.handleAddressChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="date of birth" className="form-label">
                  Date of birth
                </label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={this.state.dateOfBirth}
                  onChange={this.handleDateOfBirthChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="security questions" className="form-label">
                  Security questions
                </label>
                <br />
                <label htmlFor="security questions" className="form-label">
                  What is your childhood nickname?
                </label>
                <input
                  type="text"
                  id="nickname"
                  name="nickname"
                  value={this.state.nickname}
                  onChange={this.handleNicknameChange}
                  className="form-input"
                />
                <br />
                <label htmlFor="security questions" className="form-label">
                  What is your favourite book?
                </label>
                <input
                  type="text"
                  id="book"
                  name="book"
                  value={this.state.book}
                  onChange={this.handleBookChange}
                  className="form-input"
                />
                <br />
                <label htmlFor="security questions" className="form-label">
                  Where did you meet your spouse?
                </label>
                <input
                  type="text"
                  id="spouse"
                  name="spouse"
                  value={this.state.spouse}
                  onChange={this.handleSpouseChange}
                  className="form-input"
                />
              </div>
              <div className="errorMessage">{this.state.error}</div>
              <div className="successMessage">
                Your profile update was successful!
              </div>
              <button type="submit" className="form-button">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditProfile;

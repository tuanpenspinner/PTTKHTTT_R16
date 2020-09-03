import React, { Component } from "react";
import "./css.css";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import axios from "axios";
import { url } from "../constant";
export default class comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 5,
      content: "",
    };
  }
  changeRating = (newRating, name) => {
    this.setState({
      rating: newRating,
    });
  };
  onChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };
  onCmt = async () => {
    const info = JSON.parse(localStorage.getItem("info"));
    const productDetail = this.props.productDetail;
    const reLoad = this.props.reLoad;
    var dateCre = new Date();
    const myCmt = {
      content: this.state.content,
      vote: this.state.rating,
      name: info.name,
      dateCre,
      idUser: info.idUser,
      
    };
    productDetail.arrCmt.push(myCmt);
    const ret = await axios.put(`${url}/product`, productDetail);

    if (ret.data.status) alert("Cmt thành công!");
    reLoad();
  };

  render() {
    const arrCmt = this.props.arrCmt;
    const showCmt = () => {
      return arrCmt.reverse().map((cmt, i) => {
        return (
          <div className="media" key={i}>
            <Link className="pull-left" to="#">
              <img
                className="media-object"
                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                alt=""
              />
            </Link>
            <div className="media-body">
              <h4 className="media-heading">{cmt.name}</h4>
              <StarRatings
                rating={cmt.vote}
                starDimension="20px"
                numberOfStars={5}
                name="rating"
                starRatedColor="red"
              />
              <p>{cmt.content}</p>

              <ul className="list-unstyled list-inline media-detail pull-left">
                <li>
                  <i className="fa fa-calendar" />
                  {cmt.dateCre}
                </li>
              </ul>
            </div>
          </div>
        );
      });
    };
    return (
      <div>
        <div>
          <link
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
            rel="stylesheet"
          />
          <section className="content-item" id="comments">
            <div className="container">
              <div className="row">
                <div className="col-sm-8">
                  <div>
                    <StarRatings
                      rating={this.state.rating}
                      starRatedColor="blue"
                      numberOfStars={5}
                      changeRating={this.changeRating}
                      name="rating"
                    />
                    <h3 className="pull-left">New Comment</h3>
                    <button
                      onClick={this.onCmt}
                      className="btn btn-normal pull-right"
                    >
                      Submit
                    </button>
                    <fieldset>
                      <div className="row">
                        <div className="col-sm-3 col-lg-2 hidden-xs">
                          <img className="media-object" alt="" />
                        </div>
                        <div className="form-group col-xs-12 col-sm-9 col-lg-10">
                          <textarea
                            className="form-control"
                            id="message"
                            name="myCmt"
                            onChange={this.onChange}
                            placeholder="Your message"
                            required
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </fieldset>
                  </div>
                  <h3> Comments</h3>
                  {/* COMMENT 1 - START */}
                  {showCmt()}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

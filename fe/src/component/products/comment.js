import React, { Component } from "react";
import "./css.css";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
export default class comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 5,
    };
  }
  changeRating = (newRating, name) => {
    this.setState({
      rating: newRating,
    });
  };

  render() {
    const arrCmt = this.props.arrCmt;
    const showCmt = () => {
      return arrCmt.map((cmt, i) => {
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
                  27/02/2014
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
                  <form>
                    <StarRatings
                      rating={this.state.rating}
                      starRatedColor="blue"
                      numberOfStars={5}
                      changeRating={this.changeRating}
                      name="rating"
                    />
                    <h3 className="pull-left">New Comment</h3>
                    <button type="submit" className="btn btn-normal pull-right">
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
                            placeholder="Your message"
                            required
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </fieldset>
                  </form>
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

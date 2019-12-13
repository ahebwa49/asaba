import React from "react";
import moment from "moment";

class InfoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPrice: null,
      updatedAt: null,
      monthChangePrice: null,
      monthChangePercentage: null
    };
  }

  componentDidMount() {
    this.getData();
    this.refresh = setInterval(() => this.getData(), 90000);
  }

  componentWillUnmount() {
    clearInterval(this.refresh);
  }

  getData = () => {
    const { data } = this.props;
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(response => response.json())
      .then(instantData => {
        const price = instantData.bpi.USD.rate_float;
        const changePrice = price - data[0].price;
        const changePercentage =
          ((price - data[0].price) / data[0].price) * 100;

        this.setState({
          currentPrice: instantData.bpi.USD.rate_float,
          updatedAt: instantData.time.updated,
          monthChangePrice: changePrice.toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          }),
          monthChangePercentage: changePercentage.toFixed(2) + "%"
        });
      });
  };
  render() {
    const {
      currentPrice,
      updatedAt,
      monthChangePrice,
      monthChangePercentage
    } = this.state;
    return (
      <div id="data-container">
        {currentPrice && (
          <div id="left" className="box">
            <div className="heading">
              {currentPrice.toLocaleString("us-EN", {
                style: "currency",
                currency: "USD"
              })}
            </div>
            <div className="subtext">
              {"Updated " + moment(updatedAt).fromNow()}
            </div>
          </div>
        )}
        {currentPrice && (
          <div id="middle" className="box">
            <div className="heading">{monthChangePrice}</div>
            <div className="subtext">Change Since Last Month (USD)</div>
          </div>
        )}

        <div id="right" className="box">
          <div className="heading">{monthChangePercentage}</div>
          <div className="subtext">Change Since Last Month (%)</div>
        </div>
      </div>
    );
  }
}
export default InfoBox;

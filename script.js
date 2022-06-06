class ShowIp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ip: "..." };

  }

  componentDidMount() {
    //Create new XMLHttpRequest
    if (window.XMLHttpRequest) {// Mozilla, Safari, IE7+ ...
      var httpRequest = new XMLHttpRequest();
    } else if (window.ActiveXObject) {// IE 6 and older
      var httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }

    httpRequest.addEventListener("readystatechange", () => {
      if (httpRequest.readyState === 4 && httpRequest.status === 200) {
        let response = JSON.parse(httpRequest.responseText);
        this.setState({
          ip: response.ip,
          city: response.city,
          country: response.country });

      }
    }, false);

    httpRequest.open("GET", "https://ipinfo.io/json", true);
    httpRequest.send();
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "showIp" }, /*#__PURE__*/
      React.createElement("h1", null, "You IP is ", this.state.ip), /*#__PURE__*/
      React.createElement("p", null, "City: ", /*#__PURE__*/React.createElement("strong", null, this.state.city), ", Country: ", /*#__PURE__*/React.createElement("strong", null, this.state.country))));


  }}


ReactDOM.render( /*#__PURE__*/
React.createElement(ShowIp, null),
document.querySelector("#root"));
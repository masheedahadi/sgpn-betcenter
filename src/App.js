import React, { Fragment, Component } from "react"
import logo from "./betcenter-logo.png"
import vbanner from "./wynnbet-banner-vertical.jpeg"
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image, Row, Col, Container } from 'react-bootstrap'

// class LambdaDemo extends Component {
//   constructor(props) {
//     super(props)
//     this.state = { loading: false, msg: null }
//   }

//   handleClick = api => e => {
//     e.preventDefault()

//     this.setState({ loading: true })
//     fetch("/.netlify/functions/" + api)
//       .then(response => response.json())
//       .then(json => this.setState({ loading: false, msg: json.msg }))
//   }

//   render() {
//     const { loading, msg } = this.state

//     return (
//       <p>
//         <button onClick={this.handleClick("hello")}>{loading ? "Loading..." : "Call Lambda"}</button>
//         <button onClick={this.handleClick("async-dadjoke")}>{loading ? "Loading..." : "Call Async Lambda"}</button>
//         <br />
//         <span>{msg}</span>
//       </p>
//     )
//   }
// }

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="App">
          <Container fluid>
            <Image src={logo} width="400px" className="my-3" />
            <Row>
              <Col xs={12} md={3}>
                <Image src={vbanner} width="100%" />
              </Col>
              <Col xs={12} md={6}>
                <iframe src="https://tallysight.com/widget/analyst/dylan-rockford/MLB/latest?id=3dabe373-4e27-45d3-aba3-4bef5b614347" title="Dylan Rockford MLB Picks" allowtransparency="true" height="600px" width="100%" scrolling="auto" style={{ border: 0, margin: 0 }}></iframe>
              </Col>
              <Col xs={12} md={3}>
                <iframe src="https://tallysight.com/widget/tile/MLB/org:sports-gambling-podcast-network/event:mlb-futures-2022/topic:world-series-winner/variant:2?id=610fcdaf-80ba-49cf-81e9-7b38604f6a4b" title="MLB Winner" allowtransparency="true" height="500px" width="100%" scrolling="auto" style={{ border: 0, margin: 0 }}></iframe>
                <iframe src="https://tallysight.com/widget/tile/MLB/org:sports-gambling-podcast-network/event:mlb-futures-2022/topic:home-run-crown/variant:2?id=dc35fdd1-f5a7-4d76-b7be-1f96d44cc368" title="Home Run Crown" allowtransparency="true" height="500px" width="100%" scrolling="auto" style={{ border: 0, margin: 0 }}></iframe>                
                <iframe src="https://tallysight.com/widget/offers/sports-gambling-podcast-network/sportsbooks:wynnbet?id=db04f510-8db4-42d1-a9ab-b07f7cadbb2c" title="WynnBet Promos" height="150px" width="100%" scrolling="auto" style={{ border: 0, margin: 0 }}></iframe>
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    )
  }
}

export default App

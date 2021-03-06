import React, { Component } from 'react';
import './content.css';
import { Layout, Row, Col, Spin, Divider} from 'antd';
import Logo from '../../Media/Logo.png'
import { Routes, Route } from 'react-router-dom';
import Upload from '../Upload';
import axios from 'axios';
import { VictoryPie, VictoryLegend } from 'victory';
import { LoadingOutlined } from '@ant-design/icons';
import './content.css'

const { Content, Footer } = Layout;
const antIcon = <LoadingOutlined style={{ fontSize: 72 }} spin />;

export class Body extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      designs: null,
      taskData: [],
      Fetched: false
    }
  }

  async componentDidMount(){
    var sectionData = []

    var ReviewConfig = {
      method: 'get',
      url: `https://thehangloosehutbackend.herokuapp.com/fetchtasks?gid=1202401225268634`,
      headers: {}
    };

    axios(ReviewConfig).then((res) => {
      sectionData.push({x: Math.round(res.data.tasks.data.length, 0), y: Math.round(res.data.tasks.data.length, 0)})

      var UploadedConfig = {
        method: 'get',
        url: `https://thehangloosehutbackend.herokuapp.com/fetchtasks?gid=1202401225268638`,
        headers: {}
      };
      
      axios(UploadedConfig).then((res) => {
        sectionData.push({x: Math.round(res.data.tasks.data.length, 0), y: Math.round(res.data.tasks.data.length, 0)})
  
        var ApprovedConfig = {
          method: 'get',
          url: `https://thehangloosehutbackend.herokuapp.com/fetchtasks?gid=1202401225268637`,
          headers: {}
        };

        axios(ApprovedConfig).then((res) => {
          sectionData.push({x: Math.round(res.data.tasks.data.length, 0), y: Math.round(res.data.tasks.data.length, 0)})
          this.setState({
            Fetched: true
          })
        }).catch((error) => {
          console.log(error)
        })
      }).catch((error) => {
        console.log(error)
      })
    }).catch((error) => {
      console.log(error)
    })

    this.setState({
      taskData: sectionData
    })
  }
  
  render() {
    return (
      <Layout className='content-background'>
        <Row className='header' align='center'>
          <Col>
            <img alt='TheHangLooseHut' className='header-logo' src={Logo}/>
          </Col>
        </Row>
        <Row style={{minHeight: '85vh'}} gutter={16}>
          <Col lg={6}>
          {
            !this.state.Fetched ?
            <Row className='w-100 ma3' justify='center'>
              <Col lg={2}><Spin indicator={antIcon} className=''/></Col>
            </Row> :
            <div className='asana ma3'>
              <Row>
                <Col className='f4'>
                  Asana Logistics
                  <Divider />
                </Col>
              </Row>
              <Row>
                <Col>
                  <VictoryPie 
                    data={this.state.taskData}
                    animate={{
                      duration: 2000
                    }}
                    colorScale={["#171717", "#454545", "#737373",]}
                    style={{
                      data: {
                        stroke: "black", strokeWidth: 0.2
                      }
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <VictoryLegend x={125} y={50}
                    title="Legend"
                    centerTitle
                    orientation="vertical"
                    gutter={20}
                    style={{title: {fontSize: 26 }, labels: {fontSize: 20}}}
                    data={[
                      { name: "Customer Review", symbol: { fill: "#171717"}},
                      { name: "Approved From Affinity", symbol: { fill: "#454545" } },
                      { name: "Uploaded to Affinity", symbol: { fill: "#737373" } }
                    ]}
                  />
                </Col>
              </Row>
            </div>
          }
          </Col>
          <Col lg={18}>
            <Content style={{ padding: '0px 0px 0px 16px' }}>
            <Routes>
              <Route exact path='/TheHangLooseHut/' element={<Upload />} />
            </Routes>
            </Content>
          </Col>
        </Row>        
        <Footer className='footer' style={{ textAlign: 'center' }}>?? THE HANG LOOSE HUT 2022</Footer>
      </Layout>
    )
  }
}

export default Body
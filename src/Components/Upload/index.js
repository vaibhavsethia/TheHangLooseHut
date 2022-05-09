import React, { Component } from "react";
import {
  Col,
  Divider,
  Row,
  Spin,
  Input,
  Upload,
  Pagination,
  Card,
  Select,
  TreeSelect,
  Button,
  notification,
} from "antd";
import { LoadingOutlined, InboxOutlined } from "@ant-design/icons";
import axios from "axios";
import uuid from "react-uuid";
import "./upload.css";

const antIcon = <LoadingOutlined style={{ fontSize: 72 }} spin />;
const { Dragger } = Upload;
const { Option } = Select;
const { Meta } = Card;

const designPhases = new Map([
  ['On Hold', 'yellow'],
  ['Pending Licensor Review', 'yellow'],
  ['Pending Admin Review', 'yellow'],
  ['Rejected By Licensor', 'red'],
  ['Rejected By Admin', 'red'],
  ['Final Rejected By Admin', 'red'],
  ['Approved By Admin With Changes', 'green'],
  ['Approved By Licensor With Changes', 'green'],
  ['Approved By Admin', 'green'],
  ['Approved By Licensor', 'green']
])

export class Submission extends Component {
  constructor(props) {
    super(props);

    this.state = {
      designs: null,
      pageNum: 1,
      clients: null,
      category: "",
      title: "",
      location: "",
      clientID: "",
      treeData: null,
      desc: "",
      image: null,
      imageName: "",
      mainLink: "",
      files: null,
      FILEBASE64URI: null,
    };
  }

  async componentDidMount() {
    var configDesigns = {
      method: 'get',
      url: 'https://thehangloosehutbackend.herokuapp.com/designs',
      headers: {}
    };

    axios(configDesigns).then((res) => {
      this.setState({
        designs: res.data.designs.data
      })
    })
    .catch((error) => {
      console.log(error)
    });

    var configclients = {
      method: "get",
      url: "https://thehangloosehutbackend.herokuapp.com/clients",
    };

    axios(configclients)
      .then((res) => {
        this.setState({
          clients: res.data.clients.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    var configcategories = {
      method: "get",
      url: "https://thehangloosehutbackend.herokuapp.com/categories",
    };

    axios(configcategories)
      .then((res) => {
        var categories = [];
        res.data.categories.map((category) => {
          categories.push({
            title: category[0],
            value: uuid(),
            children: category[1],
            selectable: false,
          });
        });

        this.setState({
          treeData: categories,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onPost() {
    
    if (
      this.state.imageName !== "" &&
      this.state.category !== "" &&
      this.state.clientID !== "" &&
      this.state.desc !== "" &&
      this.state.image !== null
    ) {
      var configPost = {
        method: "post",
        url: "https://thehangloosehutbackend.herokuapp.com/designs/",
        data: {
          title: this.state.title.length === 0 ? this.state.imageName.substring(0, this.state.imageName.lastIndexOf(".")) : this.state.title,
          product_category_id: Number(this.state.category),
          image: this.state.image,
          image_filename: this.state.imageName.substring(0, this.state.imageName.lastIndexOf(".")),
          description: this.state.desc.substring(this.state.desc.lastIndexOf("/")+1),
          primary_client_id: this.state.clientID,
          is_expedited: true,
        },
      };

      axios(configPost)
        .then((res) => {
          var configMoveTask = {
            method: "post",
            url: `https://thehangloosehutbackend.herokuapp.com/movetask?taskid=${this.state.desc.substring(this.state.desc.lastIndexOf("/")+1)}&sectionid=${'1202204681516966'}`,
            headers: {}
          };

          axios(configMoveTask).then((res => {
            console.log(res)
            notification.success({
              message: `${this.state.title} design uploaded successfully to Affinity.`,
              placement: "bottomRight",
            });           
          })).catch((error => {
            console.log(error)
          }))
        })
        .catch((error) => {
          notification.error({
            message: `${error}`,
            placement: "bottomRight",
          });
          console.log(error);
        });
    } else {
      notification.error({
        message: `Complete the form`,
        placement: "bottomRight",
      });
    }
  }

  render() {
    const { files } = this.state;

    const props = {
      name: "file",
      multiple: false,
      fileList: [],
      onRemove: (file) => {
        this.setState((state) => {
          // If we have to provide multi file suppourt
          // const index = state.files.indexOf(file);
          // const newFileList = state.files.slice();
          // const newFileBASE64URI = state.FILEBASE64URI.slice();
          // newFileList.splice(index, 1);
          // newFileBASE64URI.splice(index, 1);
          return {
            fileList: null,
            FILEBASE64URI: null,
            image: null,
          };
        });
      },
      beforeUpload: (file) => {
        // FILEBASE64URI
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          // Make a fileInfo Object
          let fileInfo = {
            name: file.name,
            type: file.type,
            size: Math.round(file.size / 1000) + " kB",
            base64: reader.result,
            file: file,
          };

          this.setState((state) => ({
            // If we have to provide multi file suppourt
            // fileList: [...state.fileList, file],
            // FILEBASE64URI: [...state.FILEBASE64URI, fileInfo],
            files: file,
            imageName: fileInfo.name,
            FILEBASE64URI: fileInfo.base64,
            image: fileInfo.base64.slice(23),
          }));
        };
        return false;
      },
    };

    return (
      <div className="upload mt3 mb3">
        <Row
          justify="centre"
          className="dashboard-designs-header w-100 pr3 pl3"
        >
          <Col lg={3} className="f4">
            Upload Design
          </Col>
          <Col lg={21}></Col>
          {/* <Col lg={4}><Search className='dashboard-designs-search-button' placeholder="input search text" onSearch={(e) => this.setState({search: e})} enterButton/></Col> */}
        </Row>
        <Divider />
        <Row justify="center" gutter={16} className="mb3">
          <Col lg={11}>
            <Dragger {...props}>
              {this.state.FILEBASE64URI && (
                <img src={this.state.FILEBASE64URI} width={"500px"} />
              )}
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Supported files: jpg, jpeg, png, pdf.
              </p>
            </Dragger>
          </Col>
          <Col lg={11}>
            <div className="pb1 pa2 f5 b">Title</div>
            <Input
              className=""
              placeholder={this.state.imageName.length === 0 ? "Enter design title" : this.state.imageName.substring(0,this.state.imageName.lastIndexOf("."))}
              onChange={(e) => this.setState({ title: e.target.value })}
            />
            <div className="pb1 pa2 f5 b">Description</div>
            <Input
              className=""
              placeholder="Enter design description"
              onChange={(e) => this.setState({ desc: e.target.value })}
            />
            <div className="pb1 pa2 f5 b">Primary Licensor</div>
            <Select
              defaultOpen=""
              onChange={(e) => {
                this.setState({ clientID: e });
              }}
              className="w-100"
              placeholder="Select province"
            >
              {this.state.clients ? (
                this.state.clients.map((client, index) => {
                  return (
                    <Option key={index} value={client.id}>
                      {client.name}
                    </Option>
                  );
                })
              ) : (
                <Option value={0}>
                  <Row className="w-100" justify="center">
                    <Col lg={2}>
                      <Spin
                        indicator={antIcon}
                        className="dashboard-designs-spin"
                      />
                    </Col>
                  </Row>
                </Option>
              )}
            </Select>
            <div className="pb1 pa2 f5 b">Category</div>
            <TreeSelect
              style={{ width: "100%" }}
              dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
              treeData={this.state.treeData}
              placeholder="Select Category"
              onChange={(e) => {
                this.setState({ category: e });
              }}
            />
          </Col>
        </Row>
        <Row justify="center mb3 pt3">
          <Button
            className=""
            type="primary"
            onClick={() => {
              this.onPost();
            }}
          >
            Upload to Affinity
          </Button>
        </Row>
        <Row className='dashboard-designs w-100 ma3'>
          <Row justify='centre' className='dashboard-designs-header w-100 pr3 pl3'>
            <Col lg={5} className='f4'>Past Designs</Col>
            <Col lg={19}></Col>
          </Row>
          <Divider />
          {
            this.state.designs == null
            ? <Row className='w-100 mb3' justify='center'>
              <Col lg={2}><Spin indicator={antIcon} className='dashboard-designs-spin'/></Col>
            </Row>
            :<>
                <Row justify='center' gutter={16} className='w-100'>
                  {
                    this.state.designs.slice((this.state.pageNum-1)*4, this.state.pageNum*4).map((design, index) => {
                      return(
                        <Col lg={6}>
                          <Card
                            key={index}
                            hoverable
                            className='dashboard-designs-card'
                            cover={<Row justify='center' align='middle' className='dashboard-designs-card-image-wrapper'>
                              <Col className='pa2'><img alt="example" className='dashboard-designs-card-image' src={design.iterations[0].image.urls.or} /></Col>
                            </Row>}
                          >
                            <Meta title={<Row justify='center'>
                              <Col span={8}>{design.title ? design.title.length > 15 ? design.title.slice(0,14)+'...' : design.title: ''}</Col>
                              <Col span={12} offset={4} >{design.primary_client ? design.primary_client.name.length > 15 ? design.primary_client.name.slice(0,14)+'...' : design.primary_client.name : ''}</Col>
                            </Row>} description={<span className={designPhases.get(design.phase.name)}>{design.phase.name}</span>} />
                          </Card>
                        </Col>
                      )
                    })
                  }
                </Row>
                <Row className='w-100 pt3' justify='center'>
                  <Col lg={7}><Pagination pageSize={4} total={this.state.designs.length} onChange={(e) => this.setState({pageNum: e})}/></Col>
                </Row>
            </>
          }
        </Row>
      </div>
    );
  }
}

export default Submission;

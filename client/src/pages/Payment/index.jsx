import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  Modal,
  Row,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Payment = ({ setMenu }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMenu("payment");
  }, []);

  const [form] = Form.useForm();

  const handleOk = async () => {
    // console.log(form.getFieldsValue());

    form
      .validateFields()
      .then(async (formData) => {
        let data = {
          totalAmount: {
            currency: "EUR",
            amount: (formData.quantity * 10).toString(),
          },
          consumer: {
            givenNames: "Khoi", // first name
            surname: "Nguyen", // last name
          },
          shipping: {
            countryCode: formData.countryCode, // required
            name: formData.givenNames + " " + formData.surname, // required
            postcode: formData.postcode, // required
            suburb: formData.suburb, // required
            line1: formData.line1, // required
          },
          items: [
            {
              price: {
                amount: "10.00",
                currency: "EUR",
              },
              quantity: formData.quantity, // required
            },
          ],
          name: "T-Shirt",
          category: "clothes",
          sku: "355122",
          merchant: {
            redirectCancelUrl:
              "https://portal.integration.scalapay.com/failure-url",
            redirectConfirmUrl:
              "https://portal.integration.scalapay.com/success-url",
          },
        };
        const response = await axios.post(
          "http://localhost:4999/api/posts",
          data
        );
        console.log(response.data.checkoutUrl);
        window.open(response.data.checkoutUrl);
        handleCancel();
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };
  const handleCancel = () => {
    setVisible(false);
    form.resetFields();
  };
  const handleOpenModal = () => {
    setVisible(true);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
      }}
    >
      <Button onClick={handleOpenModal}>Buy T-Shirt</Button>
      <Modal
        okText={"Ok!"}
        cancelText={"Cancel"}
        open={visible}
        title={"Place order"}
        width={500}
        onOk={handleOk}
        onCancel={handleCancel}
        destroyOnClose={handleCancel}
      >
        <Form form={form}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label={"First name"}
                name="givenNames"
                rules={[
                  {
                    required: true,
                    message: "This field is required",
                  },
                ]}
                initialValue="Khoi"
              >
                <Input placeholder="Input your first name"></Input>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label={"Last name"}
                name="surname"
                rules={[
                  {
                    required: true,
                    message: "This field is required",
                  },
                ]}
                initialValue="Nguyen"
              >
                <Input placeholder="Input your last name"></Input>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label={"Country code"}
                name="countryCode"
                rules={[
                  {
                    required: true,
                    message: "This field is required",
                  },
                ]}
                initialValue="IT"
              >
                <Input placeholder="Input your country code"></Input>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label={"Post code"}
                name="postcode"
                rules={[
                  {
                    required: true,
                    message: "This field is required",
                  },
                ]}
                initialValue="500562"
              >
                <Input placeholder="Input your post code"></Input>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label={"Suburb"}
                name="suburb"
                rules={[
                  {
                    required: true,
                    message: "This field is required",
                  },
                ]}
                initialValue="Montelube Fiorent"
              >
                <Input placeholder="Input your suburb"></Input>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label={"Address"}
                name="line1"
                rules={[
                  {
                    required: true,
                    message: "This field is required",
                  },
                ]}
                initialValue="Via della Rosa, 58"
              >
                <Input placeholder="Input your address"></Input>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label={"Quantity"}
                name="quantity"
                rules={[
                  {
                    required: true,
                    message: "Must be a number!",
                  },
                ]}
                initialValue={1}
              >
                <InputNumber min={1} max={99}></InputNumber>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  );
};

export default Payment;

import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Button, Cascader, Form, Input, Select } from "antd";
// import { Checkbox } from "antd";

const { Option } = Select;
const residences = [
  {
    value: "tel",
    label: "Telangana",
    children: [
      {
        value: "hyd",
        label: "Hyderabad",
        children: [
          {
            value: "kp",
            label: "KPHB",
          },
        ],
      },
    ],
  },
  {
    value: "kar",
    label: "Karanataka",
    children: [
      {
        value: "ban",
        label: "Bangalore",
        children: [
          {
            value: "yesh",
            label: "Yeshwanthpur",
          },
        ],
      },
    ],
  },
];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

// Dropdown data
const grades = [
  { id: "1", name: "Nursery" },
  { id: "2", name: "K1" },
  { id: "3", name: "K2" },
  { id: "4", name: "Grade 1" },
  { id: "5", name: "Grade 2" },
  { id: "6", name: "Grade 3" },
  { id: "7", name: "Grade 4" },
  { id: "8", name: "Grade 5" },
  { id: "9", name: "Grade 6" },
  { id: "10", name: "Grade 7" },
  { id: "11", name: "Grade 8" },
];
const subjects = [
  { id: "1", gradeId: "1", name: "Literacy" },
  { id: "2", gradeId: "1", name: "Numeracy" },
  { id: "3", gradeId: "2", name: "Literacy" },
  { id: "4", gradeId: "2", name: "Numeracy" },
  { id: "5", gradeId: "3", name: "Literacy" },
  { id: "6", gradeId: "3", name: "Numeracy" }, // K2
  { id: "7", gradeId: "4", name: "English" },
  { id: "8", gradeId: "4", name: "Math" },
  { id: "9", gradeId: "5", name: "English" },
  { id: "10", gradeId: "5", name: "Math" },
  { id: "11", gradeId: "6", name: "English" },
  { id: "12", gradeId: "6", name: "Math" },
  { id: "13", gradeId: "7", name: "English" },
  { id: "14", gradeId: "7", name: "Math" }, // Grade 4
  { id: "15", gradeId: "8", name: "English" },
  { id: "16", gradeId: "8", name: "Math" },
  { id: "17", gradeId: "9", name: "English" },
  { id: "18", gradeId: "9", name: "Math" },
  { id: "19", gradeId: "10", name: "English" },
  { id: "20", gradeId: "10", name: "Math" },
  { id: "21", gradeId: "11", name: "English" },
  { id: "22", gradeId: "11", name: "Math" }, // Grade 8
];

const MainForm = () => {
  // Dropdown
  const [grade, setGrade] = useState();
  const [subject, setSubject] = useState();

  useEffect(() => {
    setGrade(grades);
  }, []);

  const handleGrade = (id) => {
    const dt = subjects.filter((x) => x.gradeId === id);
    setSubject(dt);
  };

  // Submit data
  const [email, setEmail] = useState("");
  const [parentname, setParentname] = useState("");
  const [childname, setChildname] = useState("");
  const [residence, setResidence] = useState("");
  const [phone, setPhone] = useState("");
  const [dgrade, setDgrade] = useState("");
  const [dsubject, setDsubject] = useState("");
  // const [agreement, setAgreement] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // setEmail("");
    // setParentname("");
    // setChildname("");
    // setResidence("");
    // setPhone("");
    // setDgrade("");
    // setDsubject("");
    // setAgreement("");
  }

  // const form1 = document.getElementById("form12");
  // form1.addEventListener("submit", function handleSubmit(e) {
  //   e.preventDefault();
  //   form1.reset();
  // });

  const set = (value) => {
    // console.log("Subject", value);
    setDsubject(value);
  };
  const set1 = (value) => {
    setDgrade(value);
  };
  // Form
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="91">+91</Option>
        <Option value="1">+1</Option>
      </Select>
    </Form.Item>
  );

  return (
    <Form
      onSubmit={handleSubmit}
      id="form12"
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ["tel", "hyd", "kp"],
        prefix: "91",
      }}
      scrollToFirstError
      action="thankyou.html"
    >
      <Form.Item
        name="email"
        id="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input onChange={(e) => setEmail(e.target.value)} value={email} />
      </Form.Item>

      <Form.Item
        name="parentname"
        label="Parentname"
        tooltip="Please enter parent's name"
        rules={[
          {
            required: true,
            message: "Please input your name!",
            whitespace: true,
          },
        ]}
      >
        <Input
          onChange={(e) => setParentname(e.target.value)}
          value={parentname}
        />
      </Form.Item>

      <Form.Item
        name="childname"
        label="Childname"
        tooltip="Please enter child's name"
        rules={[
          {
            required: true,
            message: "Please input the child's name!",
            whitespace: true,
          },
        ]}
      >
        <Input
          onChange={(e) => setChildname(e.target.value)}
          value={childname}
        />
      </Form.Item>

      <Form.Item
        name="residence"
        label="Habitual Residence"
        rules={[
          {
            type: "array",
            required: true,
            message: "Please select your habitual residence!",
          },
        ]}
      >
        <Cascader
          options={residences}
          onChange={(e) => setResidence(e.target.value)}
          value={residence}
        />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          style={{
            width: "100%",
          }}
        />
      </Form.Item>

      <Form.Item
        name="grade"
        label="Grade"
        rules={[
          {
            required: true,
            message: "Please select the grade!",
          },
        ]}
      >
        <Select onChange={(set1, handleGrade)} value={dgrade}>
          <Option>-- Select the grade --</Option>
          {grade && grade !== undefined
            ? grade.map((ctr, index) => {
                return (
                  <option key={index} value={ctr.id}>
                    {ctr.name}
                  </option>
                );
              })
            : "No grade chosen"}
        </Select>
      </Form.Item>

      <Form.Item
        name="subject"
        label="Subject"
        rules={[
          {
            required: true,
            message: "Please select subject!",
          },
        ]}
      >
        <Select onChange={set} value={dsubject}>
          <Option>-- Select the subject --</Option>
          {subject && subject !== undefined
            ? subject.map((ctr, index) => {
                return (
                  <>
                    <option key={index} value={ctr.id}>
                      {ctr.name}
                    </option>
                  </>
                );
              })
            : "No Subject chosen"}
        </Select>
      </Form.Item>

      {/* <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("Should accept agreement")),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox
          onChange={(e) => setAgreement(e.target.value)}
          value={agreement}
        >
          I have read the{" "}
          <a href="https://ant.design/components/form/">agreement</a>
        </Checkbox>
      </Form.Item> */}

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default MainForm;

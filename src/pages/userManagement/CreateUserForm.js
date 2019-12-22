import {
    Form, Input, Button, Select,
} from 'antd';
import React, { Component } from 'react';


const FormItem = Form.Item;

class RegistrationForm extends Component {
    componentWillReceiveProps(props) {
        this.createSelectItems(props.roles);
    }

   handleSubmit = (e) => {
       e.preventDefault();
       const { form, onConfirm } = this.props;
       form.validateFieldsAndScroll((err, values) => {
           if (!err) {
               onConfirm(values);
           }
       });
   }

   createSelectItems = (roles) => {
       const items = [];
       const { Option } = Select;

       if (roles) {
           const arr = Object.keys(roles).map(key => roles[key]);
           console.log(arr);
           for (let i = 0; i < arr.length; i += 1) {
               items.push(
                   <Option key={arr[i]} value={arr[i]}>
                       {arr[i]}
                   </Option>,
               );
           }
       }
       return items;
   }

   render() {
       const { form, roles } = this.props;
       const { getFieldDecorator } = form;

       const formItemLayout = {
           labelCol: {
               xs: { span: 24 },
               sm: { span: 8 },
           },
           wrapperCol: {
               xs: { span: 24 },
               sm: { span: 16 },
           },
       };

       return (
           <Form onSubmit={this.handleSubmit}>
               <FormItem {...formItemLayout} label="Role">
                   {getFieldDecorator('role', {
                       rules: [{ required: true, message: 'Role is Mandatory' }],
                   })(
                       <Select style={{ width: 100 }}>
                           {this.createSelectItems(roles)}
                       </Select>,
                   )}
               </FormItem>
               <FormItem {...formItemLayout} label="UserName">
                   {getFieldDecorator('username', {
                       rules: [{ required: true, message: 'UserName is Mandatory' }],
                   })(
                       <Input />,
                   )}
               </FormItem>
               <FormItem {...formItemLayout} label="Name">
                   {getFieldDecorator('name', {
                       rules: [{ required: true, message: 'Name is Mandatory' }],
                   })(
                       <Input />,
                   )}
               </FormItem>
               <FormItem {...formItemLayout} label="E-mail">
                   {getFieldDecorator('emailId', {
                       rules: [{
                           type: 'email', message: 'The input is not valid E-mail!',
                       }, {
                           required: true, message: 'Please input your E-mail!',
                       }],
                   })(
                       <Input />,
                   )}
               </FormItem>
               <FormItem {...formItemLayout} label="Phone Number">
                   {getFieldDecorator('mobileNumber', {
                       rules: [{ required: true, message: 'Please input your phone number!' }],
                   })(
                       <Input style={{ width: '100%' }} />,
                   )}
               </FormItem>
               <FormItem {...formItemLayout}>
                   <Button type="primary" htmlType="submit">Submit</Button>
               </FormItem>
           </Form>
       );
   }
}

const CreateUserForm = Form.create()(RegistrationForm);
export default CreateUserForm;

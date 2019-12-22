import React, { Component } from 'react';
import Button from 'antd/lib/button';
import PropTypes from 'prop-types';
// import { Table, Divider, Tag } from 'antd';
import Modal from 'antd/lib/modal';
import moment from 'moment';
import Table from 'antd/lib/table';

import CreateUserForm from './CreateUserForm';
import './userManagement.scss';

class UserManagement extends Component {
    static propTypes = {
        getUsers: PropTypes.func.isRequired,
        createUser: PropTypes.func.isRequired,
        updateUser: PropTypes.func.isRequired,
        authenticatedData: PropTypes.object,
        getRoles: PropTypes.func.isRequired,
        users: PropTypes.object,
        roles: PropTypes.object,
    }

    static defaultProps = {
        authenticatedData: {},
        users: {},
        roles: {},
    }

    constructor(props) {
        super(props);
        this.state = { visible: false };
    }

    componentDidMount() {
        const { authenticatedData, getUsers } = this.props;
        getUsers(authenticatedData.accessToken);
    }

    handleCancel = () => {
        this.setState({ visible: false });
    }

    showModal = () => {
        const { authenticatedData, getRoles } = this.props;
        getRoles(authenticatedData.accessToken);

        this.setState({ visible: true });
    }

    createUser = (formData) => {
        const { authenticatedData, createUser } = this.props;
        createUser(authenticatedData.accessToken, formData);
    }

    updateUser = (user) => {
        const { authenticatedData, updateUser, getUsers } = this.props;
        if (!user.deletedAt) {
            // Activate the user
            updateUser(authenticatedData.accessToken,
                {
                    id: user.id,
                    deletedAt: moment().toString(),
                    updatedAt: moment().toString(),
                }, getUsers(authenticatedData.accessToken));
        } else {
            // Deactivate the user
            updateUser(authenticatedData.accessToken, {
                id: user.id,
                deletedAt: null,
                updatedAt: moment().toString(),
            }, getUsers(authenticatedData.accessToken));
        }
    }


    render() {
        const columns = [{
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <span>{text}</span>,
        },
        {
            title: 'UserName',
            dataIndex: 'username',
            key: 'username',
            render: text => <span>{text}</span>,
        },
        {
            title: 'Email Id',
            dataIndex: 'emailId',
            key: 'emailId',
            render: text => <span>{text}</span>,
        },
        {
            title: 'Phone',
            dataIndex: 'mobileNumber',
            key: 'mobileNumber',
            render: text => <span>{text}</span>,
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
            render: text => <span>{text}</span>,
        },
        {
            title: 'Created On',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: text => <span>{text}</span>,
        },
        {
            title: 'Last Modified On',
            dataIndex: 'updatedAt',
            key: 'updatedAt',
            render: text => <span>{text}</span>,
        },
        {
            title: 'Actions',
            key: 'deletedAt',
            render: (deletedAt, user) => (<Button onClick={() => this.updateUser(user)}>{(user.deletedAt === null) ? 'Deactivate' : 'Activate'}</Button>),
        },
        ];
        const { users, roles } = this.props;
        const { visible, reload } = this.state;
        return (
            <div className="userManagementPage">
                <div className="addUserContainer">
                    <Button type="primary" onClick={this.showModal}>Add User</Button>
                    <Modal
                        visible={visible}
                        title="Title"
                        onCancel={this.handleCancel}
                    >
                        <CreateUserForm roles={roles.data} onConfirm={this.createUser} />
                    </Modal>
                </div>
                <Table
                    columns={columns}
                    reload={reload}
                    dataSource={users.data || []}
                    pagination={{ pageSize: 50 }}
                />
            </div>);
    }
}
export default UserManagement;

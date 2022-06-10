import React from 'react';
import { Button, Modal, Form, Input } from 'antd'
import { useStore, observer } from 'store/utils';
import './index.scss'

const InfoModal = () => {
	const { GlobalStore } = useStore()
	return <Modal width={620} className='infoModal' visible={GlobalStore.infoVisible} footer={null} onCancel={() => GlobalStore.setInfoVisible(false)}>
		<div>
			<div className='title tc'>Welcome to Formfunction!</div>
			<div className='intro tc mb-18'>
				To set up your account, you just need to choose a username and enter your email.
				You can always edit this info later.
			</div>
			<Form
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				labelAlign="right"
				colon={false}
				onFinish={GlobalStore.onSubmit}
			>
				<Form.Item
					label="Username"
					name="username"
					rules={[
						{ required: true, message: 'Please input your username!' },
						{
							min: 4,
							message: 'Minimum 4 characters!'
						}
					]}
					extra="Minimum 4 characters, periods and underscores are allowed."
				>
					<Input className='input' maxLength={20} />
				</Form.Item>
				<Form.Item
					label="Email"
					name="email"
					rules={[
						{ required: true, message: 'Please input your email!' },
						{ pattern: new RegExp(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/), message: 'Email format error!' }
					]}
					extra="We'll use it to send useful notifications."
				>
					<Input className='input' />
				</Form.Item>
				<Button className='submit_btn' type="primary" ghost size='large' htmlType="submit" loading={GlobalStore.confirmLoading}>
					Explore
				</Button>
			</Form>
		</div>
	</Modal>
}

export default observer(InfoModal)
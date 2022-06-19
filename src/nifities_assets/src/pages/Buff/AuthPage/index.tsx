import React, { useState, useEffect } from 'react'
import { Result, Button, Spin } from 'antd'
import { useHistory } from 'react-router-dom'
import { parseQuery } from 'utils/Tools'
import { observer, useLocalStore } from '../store'

const AuthPage = () => {
    const root = useLocalStore()
    const { AccountListStore } = root
    const [loading, setLoading] = useState(true)
    const params = parseQuery(window.location.search)
    const history = useHistory()
    useEffect(() => {
        AccountListStore.authTwitter({ ...params }).finally(() => {
            setLoading(false)
        })
    }, [])

    return <Spin spinning={loading} delay={500} tip="Loading...">
        <div className="h-[500px] flex items-center justify-center">
            {!loading && <Result
                status={AccountListStore.authFlag ? "success" : 'error'}
                title={AccountListStore.authFlag ? "Success" : 'Fail'}
                subTitle={`Twitter authorized ${AccountListStore.authFlag ? "success" : 'fail '}`}
                extra={<Button type="primary" onClick={() => history.goBack()}>Go Back</Button>} />}
        </div>
    </Spin>
}

export default observer(AuthPage)
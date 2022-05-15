import React, { useEffect, useRef } from 'react';
import { Button } from 'antd';
import { nifities } from "../../../../declarations/nifities"
import { useHistory } from "react-router-dom"
import { useStore, observer } from "../../store/utils";
import './index.scss'

const Home = () => {
    const { GlobalStore } = useStore();
    const history = useHistory()
    const [greeting, setGreeting] = React.useState("");
    const [pending, setPending] = React.useState(false);
    const inputRef = useRef<any>();

    useEffect(() => {
        // GlobalStore.creatConnect()
    }, [])

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (pending) return;
        setPending(true);
        const name = inputRef.current?.value.toString();

        // Interact with hello actor, calling the greet method
        const greeting = await nifities.greet(name);
        setGreeting(greeting);
        setPending(false);
        return false;
    }

    return (
        <main>
            <img src="logo.png" alt="DFINITY logo" />
            <Button className="btn" type="primary" onClick={() => {
                history.push('/test')
            }}>路由</Button>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Enter your name: &nbsp;</label>
                <input id="name" alt="Name" type="text" ref={inputRef} />
                <button id="clickMeBtn" type="submit" disabled={pending}>Click Me!</button>
            </form>
            <section id="greeting">{greeting}</section>
            <Button className="btn" type="primary" onClick={() => {
                GlobalStore.createActor()
            }}>测试</Button>
        </main>
    )
}

export default observer(Home);
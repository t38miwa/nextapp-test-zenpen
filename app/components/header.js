"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
    };

    return (
        <header>
            <div>
                <a href="/" className="Header-title">NYKSaikenCommunity</a>
            </div>
            <nav>
                <ul>
                    <li><Link href="/eventpage/readall">イベントを探す</Link></li>
                    <li><Link href="/map">NBA観戦できる店一覧</Link></li>
                    <li><Link href="/item/create">アイテム作成</Link></li>
                    {isLoggedIn ? (
                        <>
                            <li><button className="logout-button" onClick={handleLogout}>ログアウト</button></li>
                        </>
                    ) : (
                        <>
                            <li><Link href="/user/register">登録</Link></li>
                            <li><Link href="/user/login">ログイン</Link></li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Header;

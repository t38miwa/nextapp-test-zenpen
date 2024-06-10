"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const ReadAllItems = () => {
  const [allItems, setAllItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [selectedPrefecture, setSelectedPrefecture] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");

  const keywords = [
    "NBA", "Bリーグ", "W杯", "オリンピック", "プレイオフ", "ドラフト", "再建民オフ会", "試合観戦会"
  ];

  const prefectures = [
    "北海道", "東北", "関東", "中部", "近畿", "中国", "四国", "九州"
  ];

  const months = Array.from({ length: 12 }, (_, i) => {
    const date = new Date(2024, 5 + i, 1);
    return { value: `${date.getFullYear()}年${date.getMonth() + 1}月`, label: `${date.getFullYear()}年${date.getMonth() + 1}月` };
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/eventpage/readall`, { cache: "no-store" });
      const jsonData = await response.json();
      setAllItems(jsonData.allItems);
      setFilteredItems(jsonData.allItems);
    };
    fetchData();
  }, []);

  const handleSearch = () => {
    const results = allItems.filter(item =>
      (item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.keyword.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.prefecture.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.place.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.team.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedKeywords.length === 0 || selectedKeywords.some(keyword => item.keyword.includes(keyword))) &&
      (selectedPrefecture === "" || item.prefecture === selectedPrefecture) &&
      (selectedMonth === "" || item.date.startsWith(selectedMonth))
    );
    setFilteredItems(results);
  };

  const handleCheckboxChange = (keyword) => {
    setSelectedKeywords(prev => 
      prev.includes(keyword) ? prev.filter(k => k !== keyword) : [...prev, keyword]
    );
  };

  useEffect(() => {
    handleSearch();
  }, [selectedKeywords, selectedPrefecture, selectedMonth]);

  return (
    <div className="container">
      <div className="content">
        <h1>イベント一覧</h1>
        <div className="event-instructions">
          <h2>イベント参加方法</h2>
          <p>1. 検索機能を使用して自分の興味があるイベントを見つける</p>
          <p>2. 個別のページに移行し、日時や場所、その他詳細を確認する</p>
          <p>3. 参加したいイベントの「参加登録」ボタンを押す</p>
          <p>4. あとは主催者からの連絡をお待ちください!</p>
        </div>
        <div className="grid-event-container">
          {filteredItems.map(item => (
            <Link href={`/eventpage/readsingle/${item._id}`} key={item._id} className="event-item">
              <Image src={item.Image} width={200} height={200} alt="item-image" priority />
              <div className="event-details">
                <h2>{item.title}</h2>
                <h3 className="keyword">キーワード: {item.keyword}</h3>
                <h3>{item.prefecture}: {item.place}</h3>
                <h3>日時: {item.date}</h3>
                <h3>チーム: {item.team}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="検索キーワードを入力"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>検索</button>
        <div className="checkbox-container">
          {keywords.map(keyword => (
            <div className="check-children" key={keyword}>
              <input
                type="checkbox"
                id={keyword}
                name={keyword}
                value={keyword}
                onChange={() => handleCheckboxChange(keyword)}
              />
              <label htmlFor={keyword}>{keyword}</label>
            </div>
          ))}
        </div>
        <div className="checkbox-container">
          <label htmlFor="prefecture">都道府県:</label>
          <select
            id="prefecture"
            value={selectedPrefecture}
            onChange={(e) => setSelectedPrefecture(e.target.value)}
          >
            <option value="">選択してください</option>
            {prefectures.map(pref => (
              <option key={pref} value={pref}>{pref}</option>
            ))}
          </select>
        </div>
        <div className="checkbox-container">
          <label htmlFor="month">年月:</label>
          <select
            id="month"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            <option value="">選択してください</option>
            {months.map(month => (
              <option key={month.value} value={month.value}>{month.label}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default ReadAllItems;

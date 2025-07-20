import { useState, useEffect } from "react";
import axios from "axios";
import "./convertkudokuten.css";

function ConvertKudokuten() {
  const [sentence, setSentence] = useState("");  // 入力された文章の状態管理
  const [convertedsentence, setConvertedSentence] = useState("");  // 変換後の文章の状態管理
  const [convertMode, setConvertMode] = useState("zenkaku");  // 変換モードの状態管理

  const convertKudokuten = () => {
    const fetch_convert = async () => {
      const endpoint = convertMode;
      const response = await axios.post(`http://127.0.0.1:8000/${endpoint}`, {
        text: sentence,
      });
      const converted = response.data.converted;
      setConvertedSentence(converted);
    };
    fetch_convert();
  };

  useEffect(() => {
    convertKudokuten();
    console.log(sentence);
  }, [sentence]);

  return (
    <main className="convert">
      <div className="wrapper">
        <h2>文章を入力してください</h2>
        {/* 変換モード選択 */}
        <label htmlFor="mode-select">変換モード：</label>
        <select name="mode-select" id="mode-select" value={convertMode} onChange={(e) => { setConvertMode(e.target.value); }}>
          <option value="zenkaku">半角 → 全角</option>
          <option value="hankaku">全角 → 半角</option>
        </select>
        <div className="convert-area">
          <div className="before-convert">
            <label htmlFor="before-text" className="convert-area__label">
              変換前
            </label>
            <br />
            <textarea
              name=""
              id="before-text"
              value={sentence}
              onChange={(e) => {
                setSentence(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="after-convert">
            <label htmlFor="after-text" className="convert-area__label">
              変換後
            </label>
            <br />
            <textarea
              name=""
              id="after-text"
              value={convertedsentence}
            ></textarea>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ConvertKudokuten;

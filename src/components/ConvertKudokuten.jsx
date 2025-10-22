import { useState, useEffect } from "react";
import axios from "axios";
import "./convertkudokuten.css";

// 環境変数からAPI URLを取得（フォールバックはローカル開発用）
const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

function ConvertKudokuten() {
  const [sentence, setSentence] = useState("");  // 入力された文章の状態管理
  const [convertedsentence, setConvertedSentence] = useState("");  // 変換後の文章の状態管理
  const [convertMode, setConvertMode] = useState("zenkaku");  // 変換モードの状態管理

  useEffect(() => {
    // 入力が空の場合は変換をスキップ
    if (!sentence) {
      setConvertedSentence("");
      return;
    }

    const convertKudokuten = async () => {
      try {
        const response = await axios.post(`${API_URL}/${convertMode}`, {
          text: sentence,
        });
        const converted = response.data.converted;
        setConvertedSentence(converted);
      } catch (error) {
        console.error("変換エラー:", error);
        setConvertedSentence("エラーが発生しました");
      }
    };

    convertKudokuten();
  }, [sentence, convertMode]);  // sentenceとconvertModeの両方を監視

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

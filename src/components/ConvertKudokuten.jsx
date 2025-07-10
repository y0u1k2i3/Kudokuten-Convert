import { useState, useEffect } from "react";
import axios from "axios";
import "./convertkudokuten.css";

function ConvertKudokuten() {
  const [sentence, setSentence] = useState("");
  const [convertedsentence, setConvertedSentence] = useState("");

  const convertKudokuten = () => {
    const fetch_convert = async () => {
      const response = await axios.post("http://127.0.0.1:8000/zenkaku", {
        text: sentence,
      });
      const converted = response.data.converted;
      setConvertedSentence(converted);
      console.log(converted);
    };
    fetch_convert();
  };

  useEffect(() => {
    convertKudokuten();
    console.log(sentence);
  }, [sentence]);

  return (
    <main className="convert">
      <h2>文章を入力してください</h2>
      <button onClick={convertKudokuten}>変換</button>
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
    </main>
  );
}

export default ConvertKudokuten;

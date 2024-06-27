import React, { useState } from "react";
import Header from "./Component/header";
import SearchBar from "./Component/search";
import Restaurant from "./Component/restaurant";

function App() {
  const [keyword, setKeyword] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    // การดำเนินการเมื่อส่งฟอร์ม ไม่จำเป็นต้องทำอะไรเพิ่มเติม
  };

  return (
    <div className="App">
      <div className="header flex justify-center text-xl">
        <Header />
      </div>
      <div>
        <SearchBar
          keyword={keyword}
          setKeyword={setKeyword}
          handleSearch={handleSearch}
        />
      </div>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-7xl">
        <Restaurant keyword={keyword} />
      </div>
    </div>
  );
}

export default App;

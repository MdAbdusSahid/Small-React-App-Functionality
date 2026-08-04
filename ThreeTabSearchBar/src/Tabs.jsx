// Tabs.jsx
import { useState } from "react";
import SearchTab from "./SearchTab";
import { DATA } from "./data";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("users");

  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        <button onClick={() => setActiveTab("users")}>Users</button>
        <button onClick={() => setActiveTab("products")}>Products</button>
        <button onClick={() => setActiveTab("cities")}>Cities</button>
      </div>

      {activeTab === "users" && <SearchTab data={DATA.users} />}
      {activeTab === "products" && <SearchTab data={DATA.products} />}
      {activeTab === "cities" && <SearchTab data={DATA.cities} />}
    </div>
  );
};

export default Tabs;

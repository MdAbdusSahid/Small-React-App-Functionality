// SearchTab.jsx
import { useMemo, useState } from "react";
import { useDebounce } from "./useDebounce";

const SearchTab = ({ data }) => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query);

  const filteredResults = useMemo(() => {
    if (!debouncedQuery) return [];
    return data.filter((item) =>
      item.toLowerCase().includes(debouncedQuery.toLowerCase()),
    );
  }, [debouncedQuery, data]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <ul>
        {filteredResults.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchTab;

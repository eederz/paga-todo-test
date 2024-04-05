const SearchBar = () => {
  return (
    <section className="items-center h-full">
      <label htmlFor="searchBank">Search Bank</label>
      <input
        id="searchBank"
        className="mr-5 ml-5 font-medium hover:text-gray-900 bg-blue-100 border-2 border-blue-900"
      ></input>
    </section>
  );
};

export default SearchBar;

import ReactPaginate from "react-paginate";

const Pagination = () => {
  return (
    <>
      <div className="hidden sm:block text-purple">
        <ReactPaginate
          pageCount={1000}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          containerClassName="flex items-center justify-center bg-white py-3 text-lg select-none"
          pageClassName="text-purple-700 hover:text-white hover:bg-purple-400 mx-1"
          pageLinkClassName="px-2"
          activeClassName="bg-purple-600 text-white px-1"
          activeLinkClassName="px-2 text-white"
          previousClassName="text-purple-900 hover:text-white hover:bg-purple-900 mx-1"
          nextClassName="text-purple-900 hover:text-white hover:bg-purple-900 mx-1"
          previousLinkClassName="px-2"
          nextLinkClassName="px-2"
          breakLabel="···"
          breakClassName="text-center text-purple-500"
          breakLinkClassName="px-2"
        />
      </div>
    </>
  );
};

export default Pagination;

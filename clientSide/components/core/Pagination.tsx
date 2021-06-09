import ReactPaginate from "react-paginate";
import { useRouter } from "next/router";
import Link from "next/link";

const Pagination = (props) => {
  const router = useRouter();
  const allPage: number = parseInt(props.total) || 1;

  const pPage: number = router.query?.page
    ? parseInt(router.query?.page?.toString()) - 1
    : 0;

  const pageChange = (page) => {
    // console.log(page?.selected);
    const nextPage = page?.selected + 1;
    // console.log(router.query);
    const path =
      router.asPath.indexOf("?") >= 0
        ? router.asPath.slice(0, router.asPath.indexOf("?"))
        : router.asPath;
    router.push(`${path}?page=${nextPage}`);
  };

  const nextPage = () => {
    const nextPage = parseInt(router.query?.page?.toString()) + 1 || 2;
    console.log(router.query);
    const path =
      router.asPath.indexOf("?") >= 0
        ? router.asPath.slice(0, router.asPath.indexOf("?"))
        : router.asPath;
    return `${path}?page=${nextPage}`;
  };

  const prevPage = () => {
    const nextPage = parseInt(router.query?.page?.toString()) - 1 || 1;
    console.log(router.query);
    const path =
      router.asPath.indexOf("?") >= 0
        ? router.asPath.slice(0, router.asPath.indexOf("?"))
        : router.asPath;
    return `${path}?page=${nextPage}`;
  };

  const mobileSelect = (e) => {
    console.log(e.target.value);
    const page = {
      selected: parseInt(e.target.value),
    };
    pageChange(page);
  };

  return (
    <>
      <div className="hidden sm:block text-purple">
        <ReactPaginate
          pageCount={allPage}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          containerClassName="flex items-center justify-center bg-white py-3 text-lg select-none"
          pageClassName="text-purple-700 hover:text-white hover:bg-purple-400 px-1 mx-1"
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
          forcePage={pPage}
          onPageChange={pageChange}
        />
      </div>
      <div className="sm:hidden">
        <div className="bg-white p-3">
          <div className="flex justify-between">
            {/* add key that not update data */}
            <select
              className="h-10 w-24 border-purple-400 text-purple-900 border-2"
              name="changepage"
              key={pPage}
              defaultValue={pPage}
              onChange={mobileSelect}
              id="changepage"
            >
              {[...Array(allPage)].map((day, i) => {
                return (
                  <option key={i} value={`${i}`}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <div className="flex">
              {(parseInt(router.query?.page?.toString()) || 1) != 1 && (
                <Link href={prevPage()}>
                  <a className="bg-purple-100 mr-1 text-purple-900 px-3 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </a>
                </Link>
              )}

              {allPage > (parseInt(router.query?.page?.toString()) || 1) && (
                <Link href={nextPage()}>
                  <a className="bg-purple-700 text-white px-5 flex items-center justify-center">
                    NEXT
                  </a>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;

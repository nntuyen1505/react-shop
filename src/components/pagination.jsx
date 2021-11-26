import { Link } from "react-router-dom";
function convertQueryToObject() {
  var search = window.location.search.substring(1);
  return !search
    ? {}
    : JSON.parse(
        '{"' +
          decodeURI(search.replace(/&/g, '","').replace(/=/g, '":"')) +
          '"}'
      );
}
//convertObjectToQuery
const reverse = function (obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
};

export default function Pagination({ currentPage, totalPage }) {
  function renderPaging() {


    if(totalPage ===  1  ) return null

    let start = currentPage - 2;
    if (start < 1) start = 1;
    let end = start + 5;
    if (end > totalPage) {
      end = totalPage;
      start = end - 5;
      if (start < 1) start = 1;
    }

    let listPage = [];

    let queryUrl = convertQueryToObject();
    for (let i = start; i <= end; i++) {
      queryUrl.page = i;
      let strUrl = reverse(queryUrl);
      listPage.push(
        <li
          className={`page-item ${currentPage === i ? "active" : ""}`}
          key={i}
        >
          <Link className="page-link" to={`/shop?${strUrl}`}>
            {i}
          </Link>
        </li>
      );
    }
    return listPage;
  }

  return (
    <nav className="d-flex justify-content-center justify-content-md-end">
      <ul className="pagination pagination-sm text-gray-400">

        {currentPage > 1 ? (
          <li className="page-item">
            <Link
              className="page-link page-link-arrow"
              to={`/shop?${reverse({
                ...convertQueryToObject(),
                page: currentPage - 1,
              })}`}
            >
              <i className="fa fa-caret-left" />
            </Link>
          </li>
        ) : (
          ""
        )}
        
        {renderPaging()}
        {currentPage < totalPage && (
          <li className="page-item">
            <Link
              className="page-link page-link-arrow"
              to={`/shop?${reverse({
                ...convertQueryToObject(),
                page: currentPage + 1,
              })}`}
            >
              <i className="fa fa-caret-right" />
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

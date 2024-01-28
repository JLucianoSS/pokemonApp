
import { useDispatch } from "react-redux";
import { navigateNext, navigatePage, navigatePrev } from "../../../redux/slices/pagination";
import { useMediaQuery } from "react-responsive";
import styles from "./Pagination.module.scss";

export const Pagination = ({pages,currentPage,totalPages}) => {

    const dispatch = useDispatch();
    const isTablet = useMediaQuery({ maxWidth: 768 }); // Define el ancho máximo para la detección de tablet
    const isPhone = useMediaQuery({ maxWidth: 400 }); // Define el ancho máximo para la detección de tablet

    let itemsPerPage = 0;
    if(isPhone){
      itemsPerPage = 2
    } else if(isTablet){
      itemsPerPage = 4
    }else{
      itemsPerPage = 8
    }
  
    const handleNavigatePrev = () => {
      if (currentPage != 1) {
        dispatch(navigatePrev());
      }
    };
    const handleNavigateNext = () => {
      if (currentPage !== totalPages) {
        dispatch(navigateNext());
      }
    };
    const handleCurrentPage = (p) => {
      dispatch(navigatePage(p));
    };

    const totalPagesInGroups = Math.ceil(pages.length / itemsPerPage);
    const groupIndex = Math.floor((currentPage - 1) / itemsPerPage);
  
    const startItem = groupIndex * itemsPerPage;
    const endItem = Math.min(startItem + itemsPerPage, pages.length);
    const visiblePages = pages.slice(startItem, endItem);
  
  

  return (
    <div className={styles.container}>
      <div className={styles.button_container}>
        <button className={styles.pagination_button} onClick={ () => handleCurrentPage(pages[0])}>
          {"<<"}
        </button>
        <button
          className={styles.pagination_button}
          disabled={currentPage === pages[0]}
          onClick={handleNavigatePrev}
        >
          {"<"}
        </button>

        {groupIndex > 0 && (
          <button
            className={styles.pagination_button}
            key="ellipsis-star"
            disabled={true}
          >
            ...
          </button>
        )}
        {visiblePages.map((p) => (
          <button
            className={`${styles.pagination_button} ${
              currentPage === p ? styles.active : ""
            }`}
            key={p.id}
            onClick={() => handleCurrentPage.call(null, p)}
          >
            {p}
          </button>
        ))}

        {groupIndex < totalPagesInGroups - 1 && (
          <button
            className={styles.pagination_button}
            key="ellipsis-end"
            disabled={true}
          >
            ...
          </button>
        )}

        <button
          className={styles.pagination_button}
          disabled={currentPage === pages[pages.length - 1]}
          onClick={handleNavigateNext}
        >
          {">"}
        </button>
        <button className={styles.pagination_button} onClick={ () => handleCurrentPage(pages[pages.length - 1])}>
          {">>"}
        </button>
      </div>

      <div className={styles.total_pages}>
        Page {currentPage} of {totalPages}
      </div>
    </div>
  );
};


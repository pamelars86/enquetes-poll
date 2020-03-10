import React, { Component } from "react";
import { Pagination, PaginationItem, PaginationLink  } from "reactstrap";
import PropTypes from 'prop-types';


const ListPagination = ({
    pagesCount,
    currentPage,
    handlePageClick,
    handlePreviousClick,
    handleNextClick
   }) =>(
    <div className="pagination-wrapper">
          
          <Pagination aria-label="Page navigation example">
            
            <PaginationItem disabled={currentPage <= 0}>
              
              <PaginationLink
                onClick={e => this.handleClick(e, currentPage - 1)}
                previous
                href="#"
              />
              
            </PaginationItem>

            {[...Array(this.pagesCount)].map((page, i) => 
              <PaginationItem active={i === currentPage} key={i}>
                <PaginationLink onClick={e => this.handleClick(e, i)} href="#">
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            )}

            <PaginationItem disabled={currentPage >= this.pagesCount - 1}>
              
              <PaginationLink
                onClick={e => this.handleClick(e, currentPage + 1)}
                next
                href="#"
              />
              
            </PaginationItem>
            
          </Pagination>
          
        </div>
);


ListPagination.propTypes = {
    pagesCount: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    handlePageClick: PropTypes.func.isRequired,
    handlePreviousClick: PropTypes.func.isRequired,
    handleNextClick: PropTypes.func.isRequired
   };
export default ListPagination;
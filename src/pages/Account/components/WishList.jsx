import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { number } from 'yup'
import { removeWidhList } from '../../../store/action/productAction'
import { numberWithCommas } from '../../../utils/numberWithCommas'

export function WishList() {
  const {widhlist} = useSelector((store) => store.product)
  console.log("widhlist", widhlist)
  const dispatch = useDispatch()
    return (
        <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
        {/* Products */}
        <div className="row">
          {/* Item */}
      {
        widhlist.map((e)=>{
          return(
            <div className="col-6 col-md-4" key={e.id}>
            <div className="card mb-7">
              {/* Image */}
              <div className="card-img">
                {/* Action */}
                <button 
                  className="btn btn-xs btn-circle btn-white-primary card-action card-action-right"
                  onClick={()=>dispatch(removeWidhList(e.id))}
                  >
                  <i className="fe fe-x" />
                </button>
                {/* Button */}
                <button className="btn btn-xs btn-block btn-dark card-btn" data-toggle="modal" data-target="#modalProduct">
                  <i className="fe fe-eye mr-2 mb-1" /> Quick View
                </button>
                {/* Image */}
                {
                  e.images && (
                    <img className="card-img-top" src={e.images[0]?.large_url} alt="..." />
                  )
                }
              </div>
              {/* Body */}
              <div className="card-body font-weight-bold text-center">
                <Link className="text-body" to={`/product/${e?.slug}`}>{e?.name}</Link> <br />
                <span className="text-muted">{numberWithCommas(e?.price)} VNĐ</span>
              </div>
            </div>
          </div>
          )
        })
      }
               
        </div>
        {/* Pagination */}
        {/* <nav className="d-flex justify-content-center justify-content-md-end">
          <ul className="pagination pagination-sm text-gray-400">
            <li className="page-item">
              <Link className="page-link page-link-arrow" to="#">
                <i className="fa fa-caret-left" />
              </Link>
            </li>
            <li className="page-item active">
              <Link className="page-link" to="#">1</Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#">2</Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#">3</Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#">4</Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#">5</Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#">6</Link>
            </li>
            <li className="page-item">
              <Link className="page-link page-link-arrow" to="#">
                <i className="fa fa-caret-right" />
              </Link>
            </li>
          </ul>
        </nav> */}
      </div>
    )
}

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslate } from "../../../core";

export function NavBarTop() {
  let { lang, t, setLang } = useTranslate();

  function changeLang(lang) {    
    setLang(lang);
  }

  return (
    <div className="navbar navbar-topbar navbar-expand-xl navbar-light bg-light">
      <div className="container">
        {/* Promo */}
        <div className="mr-xl-8">
          <i className="fe fe-truck mr-2" />{" "}
          <span className="heading-xxxs">{t("Free shipping worldwide")}</span>
        </div>
        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#topbarCollapse"
          aria-controls="topbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* Collapse */}
        <div className="collapse navbar-collapse" id="topbarCollapse">
          {/* Nav */}
          <ul className="nav nav-divided navbar-nav mr-auto">
            <li className="nav-item dropdown ">
              {/* Toggle */}
              <Link
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                aria-expanded="true"
                to="#"
              >
                <img className="mb-1 mr-1" src="/img/flags/usa.svg" alt="..." />{" "}
                United States
              </Link>
              {/* Menu */}
              <div className="dropdown-menu minw-0 ">
                <Link className="dropdown-item" to="#!">
                  <img
                    className="mb-1 mr-2"
                    src="/img/flags/usa.svg"
                    alt="USA"
                  />
                  United States
                </Link>
                <Link className="dropdown-item" to="#!">
                  <img
                    className="mb-1 mr-2"
                    src="/img/flags/canada.svg"
                    alt="Canada"
                  />
                  Canada
                </Link>
                <Link className="dropdown-item" to="#!">
                  <img
                    className="mb-1 mr-2"
                    src="/img/flags/germany.svg"
                    alt="Germany"
                  />
                  Germany
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              {/* Toggle */}
              <Link
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                to="#"
              >
                USD
              </Link>
              {/* Menu */}
              <div className="dropdown-menu minw-0">
                <Link className="dropdown-item" to="#!">
                  USD
                </Link>
                <Link className="dropdown-item" to="#!">
                  EUR
                </Link>
              </div>
            </li>

            <li className="nav-item dropdown">
              {/* Toggle */}
              <Link
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                to="#"
              >
                {lang === "en"
                  ? "English"
                  : lang === "vn"
                  ? "VietNam"
                  : "Japan"}
              </Link>
              {/* Menu */}
              <div className="dropdown-menu minw-0">
                <Link
                  className="dropdown-item"
                  to="#"
                  onClick={() => changeLang("en")}
                >
                  English
                </Link>
                <Link
                  className="dropdown-item"
                  to="#"
                  onClick={() => changeLang("vn")}
                >
                  VietNam
                </Link>
                <Link
                  className="dropdown-item"
                  to="#"
                  onClick={() => changeLang("jp")}
                >
                  Japan
                </Link>
              </div>
            </li>
          </ul>
          {/* Nav */}
          <ul className="nav navbar-nav mr-8">
            <li className="nav-item">
              <Link className="nav-link" to="/shipping">
                {t("Shipping")}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/faq">
                {t("FAQ")}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                {t("Contact")}
              </Link>
            </li>
          </ul>
          {/* Nav */}
          <ul className="nav navbar-nav flex-row">
            <li className="nav-item">
              <Link className="nav-link text-gray-350" to="#!">
                <i className="fab fa-facebook-f" />
              </Link>
            </li>
            <li className="nav-item ml-xl-n4">
              <Link className="nav-link text-gray-350" to="#!">
                <i className="fab fa-twitter" />
              </Link>
            </li>
            <li className="nav-item ml-xl-n4">
              <Link className="nav-link text-gray-350" to="#!">
                <i className="fab fa-instagram" />
              </Link>
            </li>
            <li className="nav-item ml-xl-n4">
              <Link className="nav-link text-gray-350" to="#!">
                <i className="fab fa-medium" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

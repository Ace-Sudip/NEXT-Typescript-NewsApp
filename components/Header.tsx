import Link from "next/link";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <Link className="navbar-brand" href="/">
        Breaking News
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" href="/search-topics">
              Search <span className="sr-only">(current)</span>
            </Link>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              Categories
            </a>
            <div className="dropdown-menu">
              <Link className="dropdown-item" href="/categories/science">
                Science
              </Link>
              <Link className="dropdown-item" href="/categories/sports">
                Sports
              </Link>
              <Link className="dropdown-item" href="/categories/entertainment">
                Entertainment
              </Link>
              <Link className="dropdown-item" href="/categories/business">
                Business
              </Link>
              <Link className="dropdown-item" href="/categories/general">
                General
              </Link>
              <Link className="dropdown-item" href="/categories/health">
                Health
              </Link>
              <Link className="dropdown-item" href="/categories/technology">
                Technology
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;

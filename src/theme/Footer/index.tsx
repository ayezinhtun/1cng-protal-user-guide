export default function Footer() {
  return (
    <footer className="footer footer--dark">
      <div className="container container-fluid">
        <div className="footer__bottom text--center">
          <div className="footer__copyright">
            Copyright © {new Date().getFullYear()} 1CNG
          </div>
        </div>
      </div>
    </footer>
  );
}

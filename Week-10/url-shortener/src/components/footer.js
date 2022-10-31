import React from "react";
import "./style/footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <table className="footer-table">
          <thead>
            <tr>
              <th>Features</th>
              <th>Resources</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Shortning</td>
              <td>Blog</td>
              <td>About</td>
            </tr>
            <tr>
              <td>Analytics</td>
              <td>Support</td>
              <td>Career</td>
            </tr>
          </tbody>
        </table>
        <div className="footer-head">
          <p>&copy; 2022 shawty. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;

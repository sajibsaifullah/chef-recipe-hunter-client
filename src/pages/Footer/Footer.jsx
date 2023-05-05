import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container bg-dark text-white text-center mt-4 py-3">
      <p>© 2023 Flaming Fork. All rights reserved.</p>
      <p>
        DISCLAIMER: The recipes on this website are provided for informational
        purposes only. Chef Recipe Hunter does not guarantee the accuracy or
        completeness of any recipe or information provided on this site. We
        strongly recommend that you follow food safety guidelines and use your
        best judgement when cooking.
      </p>
      <p>
        CONTACT US: If you have any questions, comments, or suggestions, please
        don't hesitate to contact us at{" "}
        <a href="mailto:info@chefrecipehunter.com">info@chefrecipehunter.com</a>
        .
      </p>
      <p>
        FOLLOW US: Stay up-to-date with the latest recipes and cooking tips by
        following us on social media:
      </p>
      <FaFacebook></FaFacebook>
      <FaTwitter className="mx-2"></FaTwitter>
      <FaInstagram></FaInstagram>
    </div>
  );
};

export default Footer;

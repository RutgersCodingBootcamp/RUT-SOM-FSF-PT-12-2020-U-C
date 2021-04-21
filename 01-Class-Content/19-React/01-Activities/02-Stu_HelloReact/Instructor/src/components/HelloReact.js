import React from "react";

// simple components are only functions... and the only function you need is render...
function HelloReact() {
  return ( // use parentheses for multiple lines
    <p>Hello World!
      {/* comments look like this... this is just how it is */}
      {/* singlet tags need a self closing slash at the end */}
      <img src="https://d2d8wwwkmhfcva.cloudfront.net/400x/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_7e2006a6-15c4-4799-b4f6-d0d28dbbd62c.jpg" alt="Mango" />
      {/* mangoes are delicious */}
    </p>
  );
}

export default HelloReact;

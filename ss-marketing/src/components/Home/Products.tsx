import ProductClash from "./imgs/product-clashPencils.png";
import ProductClassRoomRumble from "./imgs/product-classroomRumble.png";
import Producttriktionary from "./imgs/product-tricktionary.png";
import "./styles/Products.css";

function Products() {
  return (
    <div className="productsContainer" id="products">
      <div className='productsInner'>
        <div className="productText">
          <h3>Products</h3>
        </div>
        <div className="productImgDiv">
          <img src={ProductClash} alt="clash" />
          <img src={ProductClassRoomRumble} alt="classroom rumble" />
          {/* <img src={Producttriktionary} alt="triktionary" /> */}
        </div>
      </div>
    </div>
  );
}

export default Products;

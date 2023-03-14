// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";

// const mapState = ({ productsData }) => ({
//   products: productsData.products,
// });

// const Admin = (props) => {
//   const { products } = useSelector(mapState);
//   const dispatch = useDispatch();
//   const [hideModal, setHideModal] = useState(true);
//   const [productCategory, setProductCategory] = useState("mens");
//   const [productName, setProductName] = useState("");
//   const [productThumbnail, setProductThumbnail] = useState("");
//   const [productPrice, setProductPrice] = useState(0);
//   const [productDesc, setProductDesc] = useState("");

//   const { data, queryDoc, isLastPage } = products;

//   const toggleModal = () => setHideModal(!hideModal);

//   const configModal = {
//     hideModal,
//     toggleModal,
//   };

//   const resetForm = () => {
//     setHideModal(true);
//     setProductCategory("mens");
//     setProductName("");
//     setProductThumbnail("");
//     setProductPrice(0);
//     setProductDesc("");
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     resetForm();
//   };

//   const handleLoadMore = () => {
//     dispatch();
//   };

//   const configLoadMore = {
//     onLoadMoreEvt: handleLoadMore,
//   };

//   return (
//     <div className="admin">
//       <div className="callToActions">
//         <ul>
//           <li>
//             <Button onClick={() => toggleModal()}>Add new product</Button>
//           </li>
//         </ul>
//       </div>
//       <form>
//         <div className={classes.section}>
//           <label>Password</label>
//           <TextField
//             required
//             id="outlined"
//             size="small"
//             margin="dense"
//             type="text"
//             value={productName}
//             onChange={(e) => setProductName(e.target.value)}
//           />
//         </div>
//         <div className={classes.section}>
//           <label>Password</label>
//           <TextField
//             required
//             id="outlined"
//             size="small"
//             margin="dense"
//             type="url"
//             value={productThumbnail}
//             onChange={(e) => setProductThumbnail(e.target.value)}
//           />
//         </div>
//         <div className={classes.section}>
//           <label>Password</label>
//           <TextField
//             required
//             id="outlined"
//             size="small"
//             margin="dense"
//             type="number"
//             min="0.00"
//             max="10000.00"
//             step="0.01"
//             value={productPrice}
//             onChange={(e) => setProductPrice(e.target.value)}
//           />
//         </div>{" "}
//         <br />
//         <Button type="submit">Add product</Button>
//       </form>

//       <div className="manageProducts">
//         <table border="0" cellPadding="0" cellSpacing="0">
//           <tbody>
//             <tr>
//               <th>
//                 <h1>Manage Products</h1>
//               </th>
//             </tr>
//             <tr>
//               <td>
//                 <table
//                   className="results"
//                   border="0"
//                   cellPadding="10"
//                   cellSpacing="0"
//                 >
//                   <tbody>
//                     {Array.isArray(data) &&
//                       data.length > 0 &&
//                       data.map((product, index) => {
//                         const {
//                           productName,
//                           productThumbnail,
//                           productPrice,
//                           documentID,
//                         } = product;

//                         return (
//                           <tr key={index}>
//                             <td>
//                               <img className="thumb" src={productThumbnail} />
//                             </td>
//                             <td>{productName}</td>
//                             <td>£{productPrice}</td>
//                             <td>
//                               <Button onClick={() => dispatch()}>
//                                 {/* deleteProductStart(documentID) */}
//                                 Delete
//                               </Button>
//                             </td>
//                           </tr>
//                         );
//                       })}
//                   </tbody>
//                 </table>
//               </td>
//             </tr>
//             <tr>
//               <td></td>
//             </tr>
//             <tr>
//               <td>
//                 <table border="0" cellPadding="10" cellSpacing="0">
//                   <tbody>
//                     <tr>
//                       <td>{!isLastPage && <LoadMore {...configLoadMore} />}</td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Admin;

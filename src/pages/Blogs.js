import {
  collection,
  endAt,
  endBefore,
  getDocs,
  limit,
  limitToLast,
  orderBy,
  query,
  startAfter,
} from "firebase/firestore";
import React from "react";
import "../pages/Admin.css";
import { useEffect } from "react";
import { useState } from "react";
import { db } from "../firebase";
import {Link} from "react-router-dom";
import logo from "../components/Image/navImage.jpg"
const Blogs = ({setActive,user}) => {
  const [blogs, setBlogs] = useState([]);


  useEffect(() => {
    getBlogsData();
    getTotalBlogs();
  }, []);

  const getBlogsData = async () => {

    const blogRef = collection(db, "blog");
    const first = query(blogRef);
    const docSnapshot = await getDocs(first);
    setBlogs(docSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };


  const getTotalBlogs = async () => {
    const blogRef = collection(db, "blog");
    const docSnapshot = await getDocs(blogRef);
  };
  return (
    <div>
      <header>
        <img src={logo} alt="logo" style={{width:"70px",height:"70px"}}/>
        <h1>Krishak Sahayak</h1>
        <ul className="utilities">
          <br />
          <li className="users"><a href="#">{user.email}</a></li>
          <li className="logout warn"><Link to="/">Log Out</Link></li>
        </ul>
      </header>
        <div className="row mt-5 ">
          {blogs?.map((blog) => (
            <div className="col-md-4" key={blog.id} >
              <div class="card" style={{width: "18rem"}}>
            <img class="card-img-top" src={blog.imgUrl} alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">{blog.link}</h5>
              <p class="card-text">{blog.desc}</p>
            </div>
          </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Blogs;

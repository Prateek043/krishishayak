import React, { useState, useEffect } from "react";
import "../pages/Admin.css";
import { Link } from "react-router-dom";
import logo from "../components/Image/navImage.jpg"
import { db, storage } from "../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import {
  addDoc,
  collection,
  getDoc,
  serverTimestamp,
  doc,
  updateDoc,
} from "firebase/firestore";
const initialState = {
  link:"",
  description: "",
  
};
function Admin({ user }) {
  const userId = user.uid;
  const navigate=useNavigate();
  const [form, setForm] = useState(initialState);
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(null);
  const { link, desc } = form;

  useEffect(() => {
    const uploadFile = () => {
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setProgress(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            console.log("Image upload to firebase successfully");
            setForm((prev) => ({ ...prev, imgUrl: downloadUrl }));
          });
        }
      );
    };

    file && uploadFile();
  }, [file]);
  const getBlogDetail = async () => {
    const docRef = collection(db, "notification");
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      setForm({ ...snapshot.data() });
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (link && desc && file) {
        try {
          await addDoc(collection(db, "blog"), {
            date:new Date(),
            ...form,
            timestamp: serverTimestamp(),
          });
        alert("Blog created successfully");
        } catch (err) {
          console.log(err);
        }
      } else {
          alert("Something");
        }
  };
  return (
    <>
      <header >
        <img src={logo} alt="logo" style={{width:"70px",height:"70px"}}/>
        <h1>Krishak Sahayak</h1>
        <ul className="utilities">
          <br />
          <li className="users"><a href="#">{user.email}</a></li>
          <li className="logout warn"><Link to="/">Log Out</Link></li>
        </ul>
      </header>

      <nav role='navigation'>
        <div className="sidebar">
        <ul className="main">
          <li className="Notification"><Link to="/Admin/Blogs">Post</Link></li>
          <li className="Complaints"><Link to="/Admin/Complaints">Complaints</Link></li>
        </ul>
        </div>
      </nav>

      <main role="main">

        <section className="panel important mt-0">
          <h2>Notification</h2>
        </section>

        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-10 col-md-8 col-lg-6">
            <form class="row blog-form" onSubmit={handleSubmit}>
              <div class="col-12 py-3">
                <input type="text" class="form-control input-text-box" placeholder="Link" name="link" value={link} onChange={handleChange}/>
                </div>
                     <div class="col-12 py-3">
                      <textarea class="form-control description-box" placeholder="Description" name="desc" value={desc} onChange={handleChange} rows="9"></textarea>
                      </div>
                      <div class="mb-3">
                      <input type="file" class="form-control"  onChange={(e) => setFile(e.target.files[0])}/>
                     </div>
                     <div class="col-12 py-3 text-center">
                      <button class="btn btn-primary" type="submit">Submit</button></div>
                      </form>
                      </div>
                      </div>

      </main>

    </>
  )
}

export default Admin
import React, { useEffect } from 'react';
import Comment from '../../assets/Comment';
import Like from '../../assets/Like';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setImages } from '../../redux/actions/ImageActions';

export default function Home() {
    const dispatch = useDispatch();
    const images = useSelector((state) => state.allImages.images);
    const getImages = async()=> {
        const res = await axios
            .get("https://picsum.photos/v2/list?page=2&limit=100")
            .catch((err) =>{
                console.log("ERR" ,err);
            });
            dispatch(setImages(res.data));
            
    };

    useEffect(() =>{
        getImages();
    });

    const renderImg = images.map((image) =>{
        const{id,author,width,height,download_url} = image;
        return ( <div className="container mt-4" key={id}>
            <Link to={`/image/${id}/${width}/${height}`}> 
        <div className="pic card mt-4" >
            <img src={download_url} className="card-img-top" alt={width} />
            
            <div className="card-body">
                <h5 className="card-title">{author}</h5>
                <p className="card-text">
                <nav class="navbar navbar-expand-lg navbar-light bg-light ">
                    <div class="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
                                <li className="nav-item">
                                    <Like />
                                </li>
                                <li className="nav-item">
                                <Link to={`/image/${id}/${width}/${height}`}> <Comment /> </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                </p>
                
            </div>
        </div>
        </Link>
    </div>

        )
    });
    return (
        <>{renderImg}</>
    );
}

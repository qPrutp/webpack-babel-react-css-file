import React from 'react';
import img1 from '../img/img1.jpg';
import img2 from '../img/img2.png';

const ImageList = () => {
    // console.log(img2);
    const list = (
        <ul>
            <li>
                <img src={img1} alt="alt from react conponent 1" />
                img 1
            </li>
            <li>
                <img src={img2} alt="alt from react conponent 2" />
                img 2
            </li>
        </ul>
    )

    return (
        <div>
            <h3>image list</h3>
            {list}
        </div>
    )
}

export default ImageList;

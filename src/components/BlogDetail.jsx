import React from 'react';
import { useLocation } from 'react-router-dom';

const BlogDetail = () => {

    const location = useLocation();
    console.log(location);

    // const {title} = useParams();

    // const [blogData, setBlogData] = useState("");

    // useEffect(() => {
    //     const newBlog = data.filter((item) => item.title === title);
    // setBlogData(newBlog[0].text);

    // }, [])
  return (
    <div>
        <p>{location.state.title} Page</p>
        <p>{location.state.text}</p>
    </div>
  )
}

export default BlogDetail;
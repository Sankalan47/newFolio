import { useState } from "react";
const SECRET_KEY = `${import.meta.env.VITE_HASHNODE_KEY}`;
console.log(SECRET_KEY);
const Blogs = () => {
  const [articles, setArticles] = useState([]);
  const getData = async () => {
    const query = `
            {
            user(username: "imnoob") {
                publication {
                    posts(page: 0) {
                        slug
                        title
                        brief
                        coverImage
                    }
                }
                }
            }
        `;

    const response = await fetch("https://api.hashnode.com/", {
      method: "POST",
      headers: {
        authorization: SECRET_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();
    console.log(data);
  };
  getData();
  return <div>Blogs</div>;
};

export default Blogs;

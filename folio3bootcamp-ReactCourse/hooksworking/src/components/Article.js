import React, { useContext } from "react";
import { dataContext } from "../App";

const Article = () => {
  const articleDetail = useContext(dataContext);
  console.log(articleDetail);
  const data = [articleDetail];
  console.log(data);

  // if(data && data.map())
  // {data && data.map}

  if (data) {
    return (
      <div>
        {data.map((article, index) => {
          return (
            <div key={index}>
              <h1>Article Number : {article.articleNumber}</h1>
              <h1>Article Name : {article.articleName}</h1>
            </div>
          );
        })}
      </div>
    );
  } else return <div>No Data Found</div>;

  // const renderArticles = data?.map((article, index) => {
  //   return (
  //     <div key={index}>
  //       <h1>Article Number : {article?.articleNumber}</h1>
  //       <h1>Article Name : {article?.articleName}</h1>
  //     </div>
  //   );
  // });

  // return <div>{renderArticles}</div>;
};

export default Article;

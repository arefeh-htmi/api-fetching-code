import React, { useState, useEffect } from "react";
import Category from "./Category";
import Loading from "./Loading";
import Erorr from "./Erorr";
import categorizeItems from "../utils/categorizeResponse";
import Axios from "axios";

const api = process.env.URL;
const bgShades = ["#f5ffee", "#fffff1", "#f2f7ff"];
const BulletColors = ["#9fd3a5", "#f2e888", "#88bff2"];

const Layout = () => {
  const [list, setList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [erorr, setErorr] = useState(false);

  useEffect(() => {
    let mounted = true;
    const getList = async (mounted) => {
      if (mounted) {
        await Axios.get(api)
          .then((result) => {
            let categorizeList = categorizeItems(result);
            setList(categorizeList);
            setLoading(false);
          })
          .catch((e) => {
            setLoading(false);
            setTimeout(() => {
              setErorr(true);
            }, 3000);
            console.log(e);
          });
      }
    };
    getList(mounted);
    return () => (mounted = false);
  });
  return (
    <div className="layout">
      {erorr ? <Erorr /> : null}
      <h3>ESG SCORING</h3>
      <p>This is the list and caegories</p>
      {isLoading ? <Loading /> : null}

      <div data-testid="list">
        {!erorr && !isLoading && list.length > 0 ? (
          list.map((obj, index) => (
            <Category
              item={obj}
              colors={{
                bgShade: bgShades[index],
                BulletColor: BulletColors[index],
              }}
              key={index}
            />
          ))
        ) : (
          <p>No items</p>
        )}
      </div>
    </div>
  );
};
export default Layout;

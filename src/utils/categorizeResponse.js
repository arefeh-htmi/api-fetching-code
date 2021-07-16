const categorizeItems = (arr) => {
  let allCategories = ["Environmental", "Social", "Governance"];
  let categorizedArr = [];
  allCategories.forEach((cat) => {
    let itemUnderCategory = arr.filter((item, ind) => item.categories === cat);
    categorizedArr.push({
      category: cat,
      items: itemUnderCategory,
    });
  });
  return categorizedArr;
};
export default categorizeItems;

/*
what i'm doing here is changing the structure of state from what i get from api to an array of objects
each object has category and items
something like this:

[
    {
        category:"Environmental",
        items:[...]
    },
    {...}
]

*/
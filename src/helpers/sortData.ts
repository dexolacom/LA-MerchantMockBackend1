// @ts-nocheck
const sortData = arr => {
  const newArr = arr.sort((a, b) => {
    return a.user_id > b.user_id ? 1 : -1;
  });

  return newArr;
};

export default sortData;

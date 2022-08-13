// @ts-nocheck
const sortData = arr => arr.sort((a, b) => (a.user_id > b.user_id ? 1 : -1));

export default sortData;

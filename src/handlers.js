//Named Exports
export const clickHandler = (event) => {
  console.log("clicked");
};

export const scrollHandler = (event) => {
  console.log("scrolling");
};

//Default Export (only one per file)
export default (name) => {
  console.log(name);
};

// used to replace wrapping divs to fulfil JSX requirement for one root element

const Wrapper = props => {
  return props.children;
};
export default Wrapper;
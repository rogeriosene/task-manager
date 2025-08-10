function Title(props) {
  return (
    <h1 className=" text-black font-bold text-center text-5xl" {...props}>
      {props.children}
    </h1>
  );
}
export default Title;

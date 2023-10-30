const SubmitBtn = ({ text,onClick }) => {
  return (
    <button type="submit"  className="btn btn-primary btn-block">
      {text}
    </button>
  );
};
export default SubmitBtn;


const Price = ({ data }) => {

  return (
    <div className="text-xl font-semibold">
      ${data} <span className="font-bold text-sm">/gece</span>
    </div>
  );
};

export default Price;
import PropTypes from "prop-types";

function FeatureItem({ title, icon, content }) {
  const altText = icon.split("/").pop().split(".")[0];
  return (
    <div className="flex-1 p-10">
      <img
        src={icon}
        alt={altText}
        className="mx-auto w-[152px] rounded-full border-[10px] border-accentGreen p-4"
      />
      <h3 className="mb-2 mt-5 text-center text-xl font-bold text-[#222]">
        {title}
      </h3>
      <p className="text-center">{content}</p>
    </div>
  );
}

FeatureItem.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  content: PropTypes.string,
};

export default FeatureItem;

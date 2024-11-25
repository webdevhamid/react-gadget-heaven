const Categories = ({ category, handleCategoryProducts }) => {
  return (
    <div>
      <button
        className="w-[180px] h-[50px] mb-3 rounded-badge bg-gray-100"
        onClick={() => handleCategoryProducts(category)}
      >
        {category}
      </button>
    </div>
  );
};

export default Categories;

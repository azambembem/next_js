import { Pagination } from "carbon-components-react";

const CarbonDesign = () => {
  return (
    <div style={{ width: "800px" }}>
      <Pagination
        backwardText="Previous page"
        forwardText="Next page"
        itemsPerPageText="Items per page:"
        page={1}
        pageNumberText="Page Number"
        pageSize={10}
        pageSizes={[10, 20, 30, 40, 50]}
        totalItems={103}
      />
    </div>
  );
};

export default CarbonDesign;

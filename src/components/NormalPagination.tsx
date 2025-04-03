import Pagination from "@mui/material/Pagination";

interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const NormalPagination = ({ page, totalPages, onChange }: PaginationProps) => {
  return (
    <Pagination 
      count={totalPages} 
      page={page} 
      onChange={onChange} 
      color="primary"
    />
  );
};

export default NormalPagination;

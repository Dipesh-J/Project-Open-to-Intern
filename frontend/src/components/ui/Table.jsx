import PropTypes from 'prop-types';

/**
 * Reusable Table component for displaying data.
 * Uses design tokens for consistent styling.
 */
const Table = ({ columns, data, loading = false, emptyMessage = 'No data available' }) => {
  if (loading) {
    return (
      <div className="w-full bg-bg-surface rounded-lg p-8 flex justify-center items-center">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-primary border-t-transparent" />
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="w-full bg-bg-surface rounded-lg p-8 text-center">
        <p className="text-text-secondary">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-auto bg-bg-surface rounded-lg">
      <table className="w-full">
        <thead>
          <tr className="border-b border-bg-default">
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-4 py-3 text-left text-sm font-semibold text-text-primary"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={row._id || row.id || rowIndex}
              className="border-b border-bg-default/50 hover:bg-bg-default/30 transition-colors"
            >
              {columns.map((column) => (
                <td
                  key={`${rowIndex}-${column.key}`}
                  className="px-4 py-3 text-sm text-text-secondary"
                >
                  {column.render ? column.render(row[column.key], row) : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      render: PropTypes.func,
    })
  ).isRequired,
  data: PropTypes.array,
  loading: PropTypes.bool,
  emptyMessage: PropTypes.string,
};

export default Table;

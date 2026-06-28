import { Link } from 'react-router-dom'
import { FaChevronRight } from 'react-icons/fa6'

const Breadcrumb = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-4 sm:px-6 pt-5 pb-2">
      <ol className="flex items-center flex-wrap gap-1 text-xs text-gray-400">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            {i > 0 && <FaChevronRight className="w-3 h-3 text-gray-300 flex-shrink-0" />}
            {item.to ? (
              <Link
                to={item.to}
                className="hover:text-red-600 transition-colors duration-150"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-700 font-medium" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumb

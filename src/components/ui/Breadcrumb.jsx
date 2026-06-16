import { Link } from 'react-router-dom'

const Breadcrumb = ({ items }) => {
  return (
    <nav className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-2">
      <ol className="flex items-center flex-wrap gap-1.5 text-xs sm:text-sm text-gray-400">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 && <span className="text-gray-600">/</span>}
            {item.to ? (
              <Link to={item.to} className="hover:text-red-500 transition-colors duration-200">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-700 font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumb

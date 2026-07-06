export default function SimpleMegaMenu({ open, columns }) {
  return (
    <div
      className={`absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg z-40 transition-all duration-300 ease-out ${
        open
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}
    >
      <div className="max-w-[1654px] mx-auto px-4 sm:px-6 lg:px-10 py-8">
        <div className="grid grid-cols-3 gap-10">
          {columns.map((column, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-8">
              {column.map((group, groupIdx) => (
                <div key={groupIdx} className="flex flex-col gap-3">
                  {group.header && (
                    <span className="text-xs font-medium tracking-widest uppercase text-gray-400">
                      {group.header}
                    </span>
                  )}
                  {group.links.map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="text-sm font-semibold text-black hover:text-gray-600 transition-colors"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
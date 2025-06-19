import { Search } from 'lucide-react'
import { type JSX, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BlogData, Badge } from './BlogData'

export const Blog = (): JSX.Element => {
  const navigate = useNavigate()

  const getBadgeStyle = (badge: Badge): string => {
    switch (badge) {
      case Badge.Recruitment:
        return 'bg-blue-200 text-blue-700'
      case Badge.Technology:
        return 'bg-green-200 text-green-700'
      case Badge.AI:
        return 'bg-purple-200 text-purple-700'
      case Badge.IndustryNews:
        return 'bg-cyan-200 text-cyan-700'
      default:
        return 'bg-blue-200 text-blue-700'
    }
  }

  // State cho filter, search, pagination
  const [selectedBadge, setSelectedBadge] = useState<'All' | Badge>('All')
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

  // Lọc bài viết theo badge và search
  const filteredData = BlogData.filter(
    (item) =>
      (selectedBadge === 'All' || item.badge === selectedBadge) &&
      (item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase()) ||
        item.name.toLowerCase().includes(search.toLowerCase()))
  )

  // Pagination
  const totalPages = Math.ceil(filteredData.length / postsPerPage)
  const paginatedData = filteredData.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  )

  return (
    <div className="min-h-screen bg-[url('/images/png/bg-wave.png')]">
      <main className='container items-center pt-32 mx-auto px-18 pb-20'>
        <header className='mb-16'>
          <h2 className='text-4xl font-bold text-white mb-2'>Blog & Resources</h2>
          <p className='text-white'>Latest insights, tips, and trends in recruitment technology</p>
        </header>

        <div className="filters-container flex justify-between mb-8">
          <div className="filter-buttons flex justify-between gap-2">
            <button className={`bg-white text-black px-4 py-2 rounded-full ${selectedBadge === 'All' ? 'ring-2 ring-blue-500' : ''}`} onClick={() => { setSelectedBadge('All'); setCurrentPage(1) }}>All</button>
            <button className={`bg-white text-black px-4 py-2 rounded-full ${selectedBadge === Badge.Recruitment ? 'ring-2 ring-blue-500' : ''}`} onClick={() => { setSelectedBadge(Badge.Recruitment); setCurrentPage(1) }}>Recruitment</button>
            <button className={`bg-white text-black px-4 py-2 rounded-full ${selectedBadge === Badge.Technology ? 'ring-2 ring-blue-500' : ''}`} onClick={() => { setSelectedBadge(Badge.Technology); setCurrentPage(1) }}>Technology</button>
            <button className={`bg-white text-black px-4 py-2 rounded-full ${selectedBadge === Badge.AI ? 'ring-2 ring-blue-500' : ''}`} onClick={() => { setSelectedBadge(Badge.AI); setCurrentPage(1) }}>AI & ML</button>
            <button className={`bg-white text-black px-4 py-2 rounded-full ${selectedBadge === Badge.IndustryNews ? 'ring-2 ring-blue-500' : ''}`} onClick={() => { setSelectedBadge(Badge.IndustryNews); setCurrentPage(1) }}>Industry News</button>
          </div>
          <div className="search-container flex bg-white rounded-md items-center gap-2">
            <Search className='ml-2 text-gray-400' />
            <input type="text" placeholder="Search articles..." value={search} onChange={e => { setSearch(e.target.value); setCurrentPage(1) }} className="outline-none px-2 py-1 bg-transparent" />
          </div>
        </div>

        <div className="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedData.length === 0 ? (
            <div className="col-span-3 text-center text-white">No articles found.</div>
          ) : (
            paginatedData.map((item) => (
              <div key={item.id} className="bg-white rounded-xl h-[500px] overflow-hidden flex flex-col">
                <div className='img-container overflow-hidden h-56'>
                  <img className='w-full h-full object-cover' src={item.img} alt={item.title} />
                </div>
                <div className='content-container p-6 flex flex-col flex-grow'>
                  <div className='info-container flex flex-row justify-start gap-2 items-center mb-2'>
                    <div className={`badge px-2 py-1 rounded-full ${getBadgeStyle(item.badge)}`}>{item.badge}</div>
                    <div className='date text-gray-500'>{item.date}</div>
                  </div>
                  <h3 className='text-lg font-bold'>{item.title}</h3>
                  <p className='text-gray-500'>{item.description}</p>
                  <div className='profile-container flex flex-row items-center mt-auto pt-4 justify-between'>
                    <div className='flex flex-row items-center gap-2'>
                      <div className='profile-img-container'>
                        <img src={item.profileImg} alt="Profile" className='w-10 h-10 rounded-full' />
                      </div>
                      <div className='profile-info-container ml-3'>
                        <h4 className='text-lg font-bold'>{item.name}</h4>
                        <p className='text-gray-500'>{item.jobTitle}</p>
                      </div>
                    </div>
                    <button className='bg-blue-500 text-white px-4 py-2 rounded-full' onClick={() => navigate(`/blog/${item.id}`)}>Read More</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Pagination */}
        <div className="pagination flex justify-center items-center gap-2 mt-10">
          <button
            className="px-3 py-1 rounded bg-white text-black disabled:opacity-50"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`px-3 py-1 rounded ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
          <button
            className="px-3 py-1 rounded bg-white text-black disabled:opacity-50"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages || totalPages === 0}
          >
            Next
          </button>
        </div>
      </main>
    </div>
  )
}

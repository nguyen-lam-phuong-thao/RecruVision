import { Search } from 'lucide-react'
import { type JSX } from 'react'

export const Blog = (): JSX.Element => {
  // const [isActive, setIsActive] = useState(false);
  const enum Badge {
    Recruitment = 'Recruitment',
    Technology = 'Technology',
    AI = 'AI & ML',
    IndustryNews = 'Industry News',
  }

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

  const BlogData = [
    {
      id: 1,
      img: '/images/png/blog-card-1.png',
      badge: Badge.Recruitment,
      date: 'Jan 15, 2025',
      title: 'The Future of AI-Powered Recruitment',
      description: 'Discover how artificial intelligence is revolutionizing the recruitment industry...',
      profileImg: '/images/png/profile-1.png',
      name: 'Sarah Johnson',
      jobTitle: 'Head of Technology',
    },
    {
      id: 2,
      img: '/images/png/blog-card-2.png',
      badge: Badge.Technology,
      date: 'Jan 20, 2025',
      title: 'How Technology is Changing Recruitment',
      description: 'Explore the latest technological innovations in the recruitment process...',
      profileImg: '/images/png/profile-2.png',
      name: 'Michael Chen',
      jobTitle: 'Tech Recruiter',
    },
    {
      id: 3,
      img: '/images/png/blog-card-3.png',
      badge: Badge.AI,
      date: 'Jan 25, 2025',
      title: 'AI in Modern Recruitment',
      description: 'Understanding the role of AI in modern recruitment practices...',
      profileImg: '/images/png/profile-3.png',
      name: 'Emily Davis',
      jobTitle: 'AI Specialist',
    }
  ]

  return (
    <div className="min-h-screen bg-[url('/images/png/bg-wave.png')]">
      <main className='container items-center pt-32 mx-auto px-18 pb-20'>
        <header className='mb-16'>
          <h2 className='text-4xl font-bold text-white mb-2'>Blog & Resources</h2>
          <p className='text-white'>Latest insights, tips, and trends in recruitment technology</p>
        </header>

        <div className="filters-container flex justify-between mb-8">
          <div className="filter-buttons flex justify-between gap-2">
            <button className='bg-white text-black px-4 py-2 rounded-full'>All</button>
            <button className='bg-white text-black px-4 py-2 rounded-full'>Recruitment</button>
            <button className='bg-white text-black px-4 py-2 rounded-full'>Technology</button>
            <button className='bg-white text-black px-4 py-2 rounded-full'>AI & ML</button>
            <button className='bg-white text-black px-4 py-2 rounded-full'>Industry News</button>
          </div>
          <div className="search-container flex bg-white rounded-md items-center gap-2">
            <Search className='ml-2 text-gray-400' />
            <input type="text" placeholder="Search articles..." />
          </div>
        </div>

        <div className="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card-1 bg-white rounded-xl h-[500px] overflow-hidden flex flex-col">
            <div className='img-container overflow-hidden'>
              <img className='w-full h-full object-cover' src='/images/png/blog-card-1.png' alt="Card 1" />
            </div>
            <div className='content-container p-6 flex flex-col flex-grow'>
              <div className='info-container flex flex-row justify-start gap-2 items-center mb-2'>
                <div className={`badge px-2 py-1 rounded-full ${getBadgeStyle(BlogData[0].badge)}`}>{BlogData[0].badge}</div>
                <div className='date text-gray-500'>{BlogData[0].date}</div>
              </div>
              <h3 className='text-lg font-bold'>{BlogData[0].title}</h3>
              <p className='text-gray-500'>{BlogData[0].description}</p>
              <div className='profile-container flex flex-row items-center mt-auto pt-4'>
                <div className='profile-img-container'>
                  <img src={BlogData[0].profileImg} alt="Profile" className='w-10 h-10 rounded-full' />
                </div>
                <div className='profile-info-container ml-3'>
                  <h4 className='text-lg font-bold'>{BlogData[0].name}</h4>
                  <p className='text-gray-500'>{BlogData[0].jobTitle}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card-2 bg-white rounded-xl h-[500px] overflow-hidden flex flex-col">
            <div className='img-container overflow-hidden'>
              <img src="/images/png/blog-card-2.png" alt="Card 2" className='w-full h-full object-cover' />
            </div>
            <div className='content-container p-6 flex flex-col flex-grow'>
              <div className='info-container flex flex-row justify-start gap-2 items-center mb-2'>
                <div className={`badge px-2 py-1 rounded-full ${getBadgeStyle(BlogData[1].badge)}`}>{BlogData[1].badge}</div>
                <div className='date text-gray-500'>{BlogData[1].date}</div>
              </div>
              <h3 className='text-lg font-bold'>{BlogData[1].title}</h3>
              <p className='text-gray-500'>{BlogData[1].description}</p>
              <div className='profile-container flex flex-row items-center mt-auto pt-4'>
                <div className='profile-img-container'>
                  <img src={BlogData[1].profileImg} alt="Profile" className='w-10 h-10 rounded-full' />
                </div>
                <div className='profile-info-container ml-3'>
                  <h4 className='text-lg font-bold'>{BlogData[1].name}</h4>
                  <p className='text-gray-500'>{BlogData[1].jobTitle}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card-3 bg-white rounded-xl h-[500px] overflow-hidden flex flex-col">
            <div className='img-container overflow-hidden'>
              <img src="/images/png/blog-card-3.png" alt="Card 3" className='w-full h-full object-cover' />
            </div>
            <div className='content-container p-6 flex flex-col flex-grow'>
              <div className='info-container flex flex-row justify-start gap-2 items-center mb-2'>
                <div className={`badge px-2 py-1 rounded-full ${getBadgeStyle(BlogData[2].badge)}`}>{BlogData[2].badge}</div>
                <div className='date text-gray-500'>{BlogData[2].date}</div>
              </div>
              <h3 className='text-lg font-bold'>{BlogData[2].title}</h3>
              <p className='text-gray-500'>{BlogData[2].description}</p>
              <div className='profile-container flex flex-row items-center mt-auto pt-4'>
                <div className='profile-img-container'>
                  <img src={BlogData[2].profileImg} alt="Profile" className='w-10 h-10 rounded-full' />
                </div>
                <div className='profile-info-container ml-3'>
                  <h4 className='text-lg font-bold'>{BlogData[2].name}</h4>
                  <p className='text-gray-500'>{BlogData[2].jobTitle}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

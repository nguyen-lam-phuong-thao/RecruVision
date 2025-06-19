import { useParams, useNavigate } from 'react-router-dom'
import { type JSX } from 'react'
import { ArrowLeft } from 'lucide-react'
import { BlogData, Badge } from '../Blog/BlogData'

export const BlogDetail = (): JSX.Element => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  
  const blog = BlogData.find(b => b.id === Number(id))

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Bài viết không tồn tại</h1>
          <button 
            onClick={() => navigate('/blog')}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Quay lại Blog
          </button>
        </div>
      </div>
    )
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <button 
            onClick={() => navigate('/blog')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Quay lại Blog</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Article Header */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getBadgeStyle(blog.badge)}`}>
              {blog.badge}
            </span>
            <span className="text-gray-500 text-sm">{blog.date}</span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {blog.title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {blog.description}
          </p>

          {/* Author Info */}
          <div className="flex items-center gap-4 pt-6 border-t">
            <img 
              src={blog.profileImg} 
              alt={blog.name} 
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-gray-900">{blog.name}</h3>
              <p className="text-gray-600">{blog.jobTitle}</p>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <img 
            src={blog.img} 
            alt={blog.title} 
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.content || '' }}
          />
        </div>

        {/* Related Articles */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(() => {
              // Lấy bài viết cùng Badge (không tính bài viết hiện tại)
              const sameBadgeArticles = BlogData.filter(item => 
                item.badge === blog.badge && item.id !== blog.id
              )
              
              // Lấy bài viết khác Badge
              const otherBadgeArticles = BlogData.filter(item => 
                item.badge !== blog.badge && item.id !== blog.id
              )
              
              // Kết hợp để có 3 bài viết
              const relatedArticles = [
                ...sameBadgeArticles,
                ...otherBadgeArticles
              ].slice(0, 3)
              
              return relatedArticles.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getBadgeStyle(item.badge)}`}>
                        {item.badge}
                      </span>
                      <span className="text-gray-500 text-xs">{item.date}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                      {item.description}
                    </p>
                    <button 
                      onClick={() => navigate(`/blog/${item.id}`)}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                    >
                      Đọc thêm →
                    </button>
                  </div>
                </div>
              ))
            })()}
          </div>
        </div>
      </div>
    </div>
  )
}

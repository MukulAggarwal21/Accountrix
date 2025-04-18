import { useState } from 'react';
import { Search, Edit, Trash2, MessageSquare, Eye, Calendar, Clock, PlusCircle, ThumbsUp, Send, Filter, User, ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';

export default function RecruiterBlogDashboard() {
  const [activeTab, setActiveTab] = useState('my-blogs');
  const [showNewBlogForm, setShowNewBlogForm] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [commentText, setCommentText] = useState('');
  
  // Sample data
  const myBlogs = [
    {
      id: 1,
      title: "Top 10 Skills Every Software Developer Should Have in 2025",
      excerpt: "Discover the most in-demand technical and soft skills that employers are looking for in software developers this year.",
      content: "The tech landscape continues to evolve at a rapid pace, and staying competitive as a developer means continuously updating your skill set. In 2025, employers are increasingly looking for developers who combine technical expertise with strong soft skills.\n\nTechnical skills topping the list include:\n\n1. **Full-stack JavaScript proficiency** - React, Node.js, and TypeScript continue to dominate the market\n2. **Cloud architecture knowledge** - AWS, Azure, or Google Cloud certification is becoming standard\n3. **AI and ML integration capabilities** - Not necessarily as a specialist, but understanding how to implement AI services\n4. **DevOps and CI/CD pipeline experience** - Automated testing and deployment are now expected\n5. **Cybersecurity awareness** - Security can't be an afterthought in modern development\n\nEqually important are soft skills like:\n\n1. **Remote collaboration** - Asynchronous communication and digital teamwork\n2. **Problem-solving approach** - How you tackle challenges matters more than knowing all answers\n3. **Business domain understanding** - Connecting technical solutions to business outcomes\n4. **Adaptability** - The ability to learn new technologies quickly\n5. **Project estimation** - Realistic planning and communicating timelines effectively\n\nRecruiting teams are increasingly using technical assessments that test for these combined capabilities, moving beyond algorithm puzzles to real-world scenarios that demonstrate both technical aptitude and collaboration skills.",
      author: "Jane Smith",
      authorRole: "Senior Tech Recruiter",
      authorAvatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            image: "https://media.istockphoto.com/id/1352603244/photo/shot-of-an-unrecognizable-businessman-working-on-his-laptop-in-the-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=DNh3mMglIT-Oryjr8NemB8N50K0ZkjngHK6q3Y9_8MY=",
date: "April 15, 2025",
      time: "10:30 AM",
      readTime: "8 min read",
      likes: 47,
      comments: 18,
      views: 523,
      tags: ["Software Development", "Recruiting", "Career Tips"]
    },
    {
      id: 2,
      title: "Effective Remote Hiring Strategies That Actually Work",
      excerpt: "Learn proven techniques to find, assess, and onboard top talent entirely through remote recruiting processes.",
      content: "Remote hiring has evolved from a necessity to a strategic advantage. Companies that master the art of remote recruiting gain access to global talent pools and often see increased retention rates. Here's how successful companies are optimizing their remote hiring process in 2025.\n\nThe key components of an effective remote hiring strategy include:\n\n- **Compelling job descriptions** that accurately reflect remote work expectations and company culture\n- **Structured video interviews** with clear assessment criteria and multiple team members\n- **Practical skill assessments** that simulate actual work rather than theoretical problems\n- **Virtual culture fit sessions** where candidates meet potential teammates in casual settings\n- **Transparent communication** about timeline, process, and expectations throughout\n\nMany organizations are finding that fully remote hiring actually improves their ability to assess candidates. Without the biases that can come from in-person impressions, teams focus more on skills, work samples, and structured interview responses.\n\nThe remote onboarding process is equally critical, with successful companies providing:\n\n- Pre-start equipment delivery and setup support\n- Structured first-week schedules with clear objectives\n- Assigned onboarding partners separate from direct managers\n- Regular check-ins scheduled for the first 90 days\n- Digital documentation of all processes and expectations\n\nRemote hiring isn't just about replicating in-person processes digitally – it requires a fundamental rethinking of how we evaluate, engage, and integrate new team members.",
      author: "Jane Smith",
      authorRole: "Senior Tech Recruiter",
 authorAvatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            image: "https://media.istockphoto.com/id/1352603244/photo/shot-of-an-unrecognizable-businessman-working-on-his-laptop-in-the-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=DNh3mMglIT-Oryjr8NemB8N50K0ZkjngHK6q3Y9_8MY=",
                  date: "April 10, 2025",
      time: "2:15 PM",
      readTime: "6 min read",
      likes: 32,
      comments: 9,
      views: 347,
      tags: ["Remote Work", "Hiring", "HR Strategy"]
    },
    {
      id: 3,
      title: "Building an Employer Brand That Attracts Top Talent",
      excerpt: "Strategies to develop and communicate your employer brand to stand out in a competitive hiring market.",
      content: "Your employer brand is what sets you apart in a crowded job market. It's the reputation and perception of your company as a place to work, and it's increasingly becoming the deciding factor for top candidates choosing between multiple offers.\n\nA strong employer brand:\n\n- Reduces cost-per-hire by up to 50%\n- Decreases time-to-fill for open positions\n- Improves quality of applicants\n- Increases employee retention\n- Builds a talent pipeline for future openings\n\nTo develop an authentic employer brand, start by assessing your current reputation. Survey existing employees, check review sites like Glassdoor, and analyze your current recruitment metrics. Identify the authentic strengths of your workplace culture and the unique value proposition you offer to employees.\n\nNext, craft messaging that highlights these strengths across multiple channels:\n\n- Your careers page should tell a compelling story about employee experience\n- Social media content should showcase real team members and their work\n- Job descriptions should reflect your values and culture, not just requirements\n- Recruitment materials should maintain consistent messaging and visual identity\n\nThe most effective employer branding comes from amplifying employee voices rather than corporate messaging. Create platforms for team members to share their experiences, whether through video testimonials, blog posts, or social media takeovers.\n\nFinally, continuously measure the impact of your employer branding efforts through metrics like application rates, offer acceptance rates, and new hire satisfaction scores. The most successful employer brands evolve based on feedback and changing workforce priorities.",
      author: "Jane Smith",
      authorRole: "Senior Tech Recruiter",
       authorAvatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            image: "https://media.istockphoto.com/id/1352603244/photo/shot-of-an-unrecognizable-businessman-working-on-his-laptop-in-the-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=DNh3mMglIT-Oryjr8NemB8N50K0ZkjngHK6q3Y9_8MY=",
      date: "April 5, 2025",
      time: "9:45 AM",
      readTime: "7 min read",
      likes: 53,
      comments: 21,
      views: 612,
      tags: ["Employer Branding", "Talent Acquisition", "HR"]
    }
  ];

  const allBlogs = [
    ...myBlogs,
    {
      id: 4,
      title: "The Future of AI in Recruitment Processes",
      excerpt: "Exploring how artificial intelligence is transforming candidate sourcing, screening, and selection.",
      author: "Alex Johnson",
      authorRole: "Tech Recruitment Lead",
       authorAvatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            image: "https://media.istockphoto.com/id/1352603244/photo/shot-of-an-unrecognizable-businessman-working-on-his-laptop-in-the-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=DNh3mMglIT-Oryjr8NemB8N50K0ZkjngHK6q3Y9_8MY=",
      date: "April 16, 2025",
      time: "11:20 AM",
      readTime: "9 min read",
      likes: 64,
      comments: 27,
      views: 782,
      tags: ["AI", "Recruitment Tech", "Future of Work"]
    },
    {
      id: 5,
      title: "Creating Inclusive Job Descriptions That Attract Diverse Talent",
      excerpt: "Learn how to write job posts that appeal to candidates from all backgrounds and reduce unconscious bias.",
      author: "Maria Garcia",
      authorRole: "Diversity Recruitment Specialist",
       authorAvatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            image: "https://media.istockphoto.com/id/1352603244/photo/shot-of-an-unrecognizable-businessman-working-on-his-laptop-in-the-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=DNh3mMglIT-Oryjr8NemB8N50K0ZkjngHK6q3Y9_8MY=",
      date: "April 14, 2025",
      time: "3:45 PM",
      readTime: "5 min read",
      likes: 89,
      comments: 31,
      views: 945,
      tags: ["Diversity", "Inclusion", "Job Descriptions"]
    }
  ];

  const comments = [
    {
      id: 1,
      blogId: 1,
      author: "David Lee",
      authorRole: "Frontend Developer",
 authorAvatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "April 17, 2025",
      time: "2:30 PM",
      content: "Great insights! I'd add that understanding design principles is becoming increasingly important for developers too. The line between design and development continues to blur."
    },
    {
      id: 2,
      blogId: 1,
      author: "Sarah Wilson",
      authorRole: "CTO",
 authorAvatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "April 16, 2025",
      time: "5:45 PM",
      content: "I completely agree with your point about DevOps experience. We've started including basic CI/CD questions in all our technical interviews, regardless of the specific role."
    },
    {
      id: 3,
      blogId: 2,
      author: "Michael Brown",
      authorRole: "HR Director",
 authorAvatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      time: "10:15 AM",
      content: "We've implemented many of these strategies and have seen a 40% improvement in our remote hire retention rates. The virtual culture fit sessions were particularly impactful."
    }
  ];

  const displayedBlogs = activeTab === 'my-blogs' ? myBlogs : allBlogs;

  const handleAddComment = () => {
    if (commentText.trim() !== '') {
      alert(`Comment added: ${commentText}`);
      setCommentText('');
    }
  };

  const handleNewBlog = (e) => {
    e.preventDefault();
    alert('New blog post would be saved here!');
    setShowNewBlogForm(false);
  };

  const openBlog = (blog) => {
    setSelectedBlog(blog);
  };

  const closeBlog = () => {
    setSelectedBlog(null);
  };

  // Blog Form Component
  const NewBlogForm = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-screen overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Create New Blog Post</h2>
            <button 
              onClick={() => setShowNewBlogForm(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <form onSubmit={handleNewBlog}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                Blog Title
              </label>
              <input 
                type="text" 
                id="title" 
                placeholder="Enter a compelling title" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="excerpt">
                Short Excerpt
              </label>
              <input 
                type="text" 
                id="excerpt" 
                placeholder="A brief description of your blog post" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
                Blog Content
              </label>
              <textarea 
                id="content" 
                placeholder="Write your blog post here..." 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-64"
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tags">
                Tags (comma separated)
              </label>
              <input 
                type="text" 
                id="tags" 
                placeholder="recruitment, hiring, career" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                Featured Image
              </label>
              <div className="flex items-center justify-center bg-gray-100 border-2 border-dashed border-gray-300 rounded-md h-32">
                <button type="button" className="text-blue-600 hover:text-blue-700">
                  <div className="flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="mt-2 text-sm">Upload Image</span>
                  </div>
                </button>
              </div>
            </div>
            
            <div className="flex justify-end space-x-3">
              <button 
                type="button"
                onClick={() => setShowNewBlogForm(false)}
                className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button 
                type="submit"
                className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Publish Blog
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  // Blog Detail View Component
  const BlogDetailView = ({ blog }) => {
    const blogComments = comments.filter(comment => comment.blogId === blog.id);
    
    return (
      <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
        <div className="container mx-auto px-4 py-8">
          <button 
            onClick={closeBlog} 
            className="flex items-center text-blue-600 hover:text-blue-800 mb-6"
          >
            <ChevronLeft size={20} />
            <span className="ml-1">Back to blogs</span>
          </button>
          
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{blog.title}</h1>
              
              <div className="flex items-center mb-6">
                <img src={blog.authorAvatar} alt={blog.author} className="w-12 h-12 rounded-full object-cover" />
                <div className="ml-4">
                  <div className="font-medium text-gray-900">{blog.author}</div>
                  <div className="text-sm text-gray-500">{blog.authorRole}</div>
                </div>
                <div className="ml-auto flex items-center text-gray-500 text-sm">
                  <Calendar size={16} className="mr-1" />
                  <span className="mr-4">{blog.date}</span>
                  <Clock size={16} className="mr-1" />
                  <span>{blog.readTime}</span>
                </div>
              </div>
              
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-80 object-cover rounded-lg mb-8" 
              />
              
              <div className="prose max-w-none">
                {blog.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              <div className="flex items-center mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center text-blue-600 hover:text-blue-800 cursor-pointer">
                  <ThumbsUp size={20} />
                  <span className="ml-2">{blog.likes} likes</span>
                </div>
                <div className="flex items-center ml-6 text-gray-600">
                  <MessageSquare size={20} />
                  <span className="ml-2">{blog.comments} comments</span>
                </div>
                <div className="flex items-center ml-6 text-gray-600">
                  <Eye size={20} />
                  <span className="ml-2">{blog.views} views</span>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Comments ({blogComments.length})</h3>
              
              <div className="mb-8">
                <div className="flex">
                  <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Your avatar" className="w-10 h-10 rounded-full mr-4" />
                  <div className="flex-1">
                    <textarea 
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      placeholder="Write a comment..." 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows="3"
                    />
                    <div className="flex justify-end mt-2">
                      <button 
                        onClick={handleAddComment}
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                      >
                        <Send size={16} className="mr-2" />
                        Post Comment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                {blogComments.map(comment => (
                  <div key={comment.id} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <img src={comment.authorAvatar} alt={comment.author} className="w-10 h-10 rounded-full" />
                      <div className="ml-3">
                        <div className="font-medium text-gray-900">{comment.author}</div>
                        <div className="text-xs text-gray-500">{comment.date} at {comment.time}</div>
                      </div>
                    </div>
                    <p className="text-gray-700">{comment.content}</p>
                    <div className="flex items-center mt-3 text-sm">
                      <button className="text-gray-500 hover:text-blue-600">Reply</button>
                      <button className="ml-4 text-gray-500 hover:text-blue-600">Like</button>
                    </div>
                  </div>
                ))}
                
                {blogComments.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    No comments yet. Be the first to comment!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className=" bg-gray-50 overflow-y-auto">
  

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Blog Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Blogs Management</h1>
              {/* <p className="text-gray-600 mt-1">Create, manage, and engage with recruitment content</p> */}
            </div>
            <div className="mt-4 md:mt-0">
              <button 
                onClick={() => setShowNewBlogForm(true)}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 shadow-sm"
              >
                <PlusCircle size={18} className="mr-2" />
                Create New Blog Post
              </button>
            </div>
          </div>
        </div>

    

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedBlogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 transition transform hover:-translate-y-1 hover:shadow-md">
              <div className="relative">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-48 object-cover"
                />
                {activeTab === 'my-blogs' && (
                  <div className="absolute top-3 right-3 flex space-x-2">
                    <button className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-100">
                      <Edit size={16} className="text-gray-600" />
                    </button>
                    <button className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-100">
                      <Trash2 size={16} className="text-gray-600" />
                    </button>
                  </div>
                )}
              </div>
              
              <div className="p-5">
                <div className="flex items-center mb-3">
                  <img src={blog.authorAvatar} alt={blog.author} className="w-8 h-8 rounded-full" />
                  <div className="ml-2">
                    <span className="text-sm font-medium text-gray-900">{blog.author}</span>
                  </div>
                  <div className="ml-auto text-xs text-gray-500">{blog.date}</div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 cursor-pointer" onClick={() => openBlog(blog)}>
                  {blog.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags && blog.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-full">{tag}</span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <ThumbsUp size={16} className="mr-1" />
                      <span>{blog.likes}</span>
                    </div>
                    <div className="flex items-center">
                      <MessageSquare size={16} className="mr-1" />
                      <span>{blog.comments}</span>
                    </div>
                    <div className="flex items-center">
                      <Eye size={16} className="mr-1" />
                      <span>{blog.views}</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => openBlog(blog)}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-10 flex justify-center">
          <nav className="flex items-center space-x-2">
            <button className="px-3 py-1 rounded border border-gray-300 text-gray-700 hover:bg-gray-50">
              <ChevronLeft size={18} />
            </button>
            <button className="px-3 py-1 rounded border border-blue-600 bg-blue-600 text-white">1</button>
            <button className="px-3 py-1 rounded border border-gray-300 text-gray-700 hover:bg-gray-50">2</button>
            <button className="px-3 py-1 rounded border border-gray-300 text-gray-700 hover:bg-gray-50">3</button>
            <span className="px-2 text-gray-500">...</span>
            <button className="px-3 py-1 rounded border border-gray-300 text-gray-700 hover:bg-gray-50">8</button>
            <button className="px-3 py-1 rounded border border-gray-300 text-gray-700 hover:bg-gray-50">
              <ChevronRight size={18} />
            </button>
          </nav>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-gray-500 text-sm">
            © 2025 Accountrix. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Modals */}
      {showNewBlogForm && <NewBlogForm />}
      {selectedBlog && <BlogDetailView blog={selectedBlog} />}
    </div>
  );
}


// import { useState } from 'react';
// import { 
//   Search, Edit, Trash2, MessageSquare, Eye, Calendar, Clock, 
//   PlusCircle, ThumbsUp, Send, Filter, User, ChevronLeft, 
//   ChevronRight, MoreHorizontal, Bookmark, TrendingUp, Award,
//   BarChart, LineChart, Share2, ArrowUp, Download
// } from 'lucide-react';

// export default function RecruiterBlogDashboard() {
//   const [activeTab, setActiveTab] = useState('my-blogs');
//   const [showNewBlogForm, setShowNewBlogForm] = useState(false);
//   const [selectedBlog, setSelectedBlog] = useState(null);
//   const [commentText, setCommentText] = useState('');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [showMobileMenu, setShowMobileMenu] = useState(false);
//   const [activeFilter, setActiveFilter] = useState('all');
  
//   // Sample data
//   const myBlogs = [
//     {
//       id: 1,
//       title: "Top 10 Skills Every Software Developer Should Have in 2025",
//       excerpt: "Discover the most in-demand technical and soft skills that employers are looking for in software developers this year.",
//       content: "The tech landscape continues to evolve at a rapid pace, and staying competitive as a developer means continuously updating your skill set. In 2025, employers are increasingly looking for developers who combine technical expertise with strong soft skills.\n\nTechnical skills topping the list include:\n\n1. **Full-stack JavaScript proficiency** - React, Node.js, and TypeScript continue to dominate the market\n2. **Cloud architecture knowledge** - AWS, Azure, or Google Cloud certification is becoming standard\n3. **AI and ML integration capabilities** - Not necessarily as a specialist, but understanding how to implement AI services\n4. **DevOps and CI/CD pipeline experience** - Automated testing and deployment are now expected\n5. **Cybersecurity awareness** - Security can't be an afterthought in modern development\n\nEqually important are soft skills like:\n\n1. **Remote collaboration** - Asynchronous communication and digital teamwork\n2. **Problem-solving approach** - How you tackle challenges matters more than knowing all answers\n3. **Business domain understanding** - Connecting technical solutions to business outcomes\n4. **Adaptability** - The ability to learn new technologies quickly\n5. **Project estimation** - Realistic planning and communicating timelines effectively\n\nRecruiting teams are increasingly using technical assessments that test for these combined capabilities, moving beyond algorithm puzzles to real-world scenarios that demonstrate both technical aptitude and collaboration skills.",
//       author: "Jane Smith",
//       authorRole: "Senior Tech Recruiter",
//       authorAvatar: "/api/placeholder/100/100",
//       date: "April 15, 2025",
//       time: "10:30 AM",
//       readTime: "8 min read",
//       image: "/api/placeholder/600/400",
//       likes: 47,
//       comments: 18,
//       views: 523,
//       tags: ["Software Development", "Recruiting", "Career Tips"],
//       featured: true,
//       trending: true,
//       status: "published"
//     },
//     {
//       id: 2,
//       title: "Effective Remote Hiring Strategies That Actually Work",
//       excerpt: "Learn proven techniques to find, assess, and onboard top talent entirely through remote recruiting processes.",
//       content: "Remote hiring has evolved from a necessity to a strategic advantage. Companies that master the art of remote recruiting gain access to global talent pools and often see increased retention rates. Here's how successful companies are optimizing their remote hiring process in 2025.\n\nThe key components of an effective remote hiring strategy include:\n\n- **Compelling job descriptions** that accurately reflect remote work expectations and company culture\n- **Structured video interviews** with clear assessment criteria and multiple team members\n- **Practical skill assessments** that simulate actual work rather than theoretical problems\n- **Virtual culture fit sessions** where candidates meet potential teammates in casual settings\n- **Transparent communication** about timeline, process, and expectations throughout\n\nMany organizations are finding that fully remote hiring actually improves their ability to assess candidates. Without the biases that can come from in-person impressions, teams focus more on skills, work samples, and structured interview responses.\n\nThe remote onboarding process is equally critical, with successful companies providing:\n\n- Pre-start equipment delivery and setup support\n- Structured first-week schedules with clear objectives\n- Assigned onboarding partners separate from direct managers\n- Regular check-ins scheduled for the first 90 days\n- Digital documentation of all processes and expectations\n\nRemote hiring isn't just about replicating in-person processes digitally – it requires a fundamental rethinking of how we evaluate, engage, and integrate new team members.",
//       author: "Jane Smith",
//       authorRole: "Senior Tech Recruiter",
//       authorAvatar: "/api/placeholder/100/100",
//       date: "April 10, 2025",
//       time: "2:15 PM",
//       readTime: "6 min read",
//       image: "/api/placeholder/600/400",
//       likes: 32,
//       comments: 9,
//       views: 347,
//       tags: ["Remote Work", "Hiring", "HR Strategy"],
//       featured: false,
//       trending: true,
//       status: "published"
//     },
//     {
//       id: 3,
//       title: "Building an Employer Brand That Attracts Top Talent",
//       excerpt: "Strategies to develop and communicate your employer brand to stand out in a competitive hiring market.",
//       content: "Your employer brand is what sets you apart in a crowded job market. It's the reputation and perception of your company as a place to work, and it's increasingly becoming the deciding factor for top candidates choosing between multiple offers.\n\nA strong employer brand:\n\n- Reduces cost-per-hire by up to 50%\n- Decreases time-to-fill for open positions\n- Improves quality of applicants\n- Increases employee retention\n- Builds a talent pipeline for future openings\n\nTo develop an authentic employer brand, start by assessing your current reputation. Survey existing employees, check review sites like Glassdoor, and analyze your current recruitment metrics. Identify the authentic strengths of your workplace culture and the unique value proposition you offer to employees.\n\nNext, craft messaging that highlights these strengths across multiple channels:\n\n- Your careers page should tell a compelling story about employee experience\n- Social media content should showcase real team members and their work\n- Job descriptions should reflect your values and culture, not just requirements\n- Recruitment materials should maintain consistent messaging and visual identity\n\nThe most effective employer branding comes from amplifying employee voices rather than corporate messaging. Create platforms for team members to share their experiences, whether through video testimonials, blog posts, or social media takeovers.\n\nFinally, continuously measure the impact of your employer branding efforts through metrics like application rates, offer acceptance rates, and new hire satisfaction scores. The most successful employer brands evolve based on feedback and changing workforce priorities.",
//       author: "Jane Smith",
//       authorRole: "Senior Tech Recruiter",
//       authorAvatar: "/api/placeholder/100/100",
//       date: "April 5, 2025",
//       time: "9:45 AM",
//       readTime: "7 min read",
//       image: "/api/placeholder/600/400",
//       likes: 53,
//       comments: 21,
//       views: 612,
//       tags: ["Employer Branding", "Talent Acquisition", "HR"],
//       featured: false,
//       trending: false,
//       status: "published"
//     },
//     {
//       id: 7,
//       title: "Interview Questions That Reveal Culture Fit",
//       excerpt: "A guide to crafting questions that help identify candidates who will thrive in your company culture.",
//       author: "Jane Smith",
//       authorRole: "Senior Tech Recruiter",
//       authorAvatar: "/api/placeholder/100/100",
//       date: "April 3, 2025",
//       time: "11:20 AM",
//       readTime: "5 min read",
//       image: "/api/placeholder/600/400",
//       likes: 0,
//       comments: 0,
//       views: 0,
//       tags: ["Interviews", "Culture Fit", "Hiring Process"],
//       featured: false,
//       trending: false,
//       status: "draft"
//     }
//   ];

//   const allBlogs = [
//     ...myBlogs,
//     {
//       id: 4,
//       title: "The Future of AI in Recruitment Processes",
//       excerpt: "Exploring how artificial intelligence is transforming candidate sourcing, screening, and selection.",
//       author: "Alex Johnson",
//       authorRole: "Tech Recruitment Lead",
//       authorAvatar: "/api/placeholder/100/100",
//       date: "April 16, 2025",
//       time: "11:20 AM",
//       readTime: "9 min read",
//       image: "/api/placeholder/600/400",
//       likes: 64,
//       comments: 27,
//       views: 782,
//       tags: ["AI", "Recruitment Tech", "Future of Work"],
//       featured: true,
//       trending: true,
//       status: "published"
//     },
//     {
//       id: 5,
//       title: "Creating Inclusive Job Descriptions That Attract Diverse Talent",
//       excerpt: "Learn how to write job posts that appeal to candidates from all backgrounds and reduce unconscious bias.",
//       author: "Maria Garcia",
//       authorRole: "Diversity Recruitment Specialist",
//       authorAvatar: "/api/placeholder/100/100",
//       date: "April 14, 2025",
//       time: "3:45 PM",
//       readTime: "5 min read",
//       image: "/api/placeholder/600/400",
//       likes: 89,
//       comments: 31,
//       views: 945,
//       tags: ["Diversity", "Inclusion", "Job Descriptions"],
//       featured: true,
//       trending: false,
//       status: "published"
//     },
//     {
//       id: 6,
//       title: "The Psychology of Candidate Experience: What Really Matters",
//       excerpt: "Understanding the psychological factors that influence how candidates perceive your recruitment process.",
//       author: "Dr. Emily Chen",
//       authorRole: "Behavioral Scientist",
//       authorAvatar: "/api/placeholder/100/100",
//       date: "April 12, 2025",
//       time: "1:30 PM",
//       readTime: "11 min read",
//       image: "/api/placeholder/600/400",
//       likes: 117,
//       comments: 42,
//       views: 1243,
//       tags: ["Candidate Experience", "Psychology", "Recruiting"],
//       featured: false,
//       trending: true,
//       status: "published"
//     }
//   ];

//   const comments = [
//     {
//       id: 1,
//       blogId: 1,
//       author: "David Lee",
//       authorRole: "Frontend Developer",
//       authorAvatar: "/api/placeholder/100/100",
//       date: "April 17, 2025",
//       time: "2:30 PM",
//       content: "Great insights! I'd add that understanding design principles is becoming increasingly important for developers too. The line between design and development continues to blur.",
//       likes: 8
//     },
//     {
//       id: 2,
//       blogId: 1,
//       author: "Sarah Wilson",
//       authorRole: "CTO",
//       authorAvatar: "/api/placeholder/100/100",
//       date: "April 16, 2025",
//       time: "5:45 PM",
//       content: "I completely agree with your point about DevOps experience. We've started including basic CI/CD questions in all our technical interviews, regardless of the specific role.",
//       likes: 12
//     },
//     {
//       id: 3,
//       blogId: 2,
//       author: "Michael Brown",
//       authorRole: "HR Director",
//       authorAvatar: "/api/placeholder/100/100",
//       date: "April 12, 2025",
//       time: "10:15 AM",
//       content: "We've implemented many of these strategies and have seen a 40% improvement in our remote hire retention rates. The virtual culture fit sessions were particularly impactful.",
//       likes: 5
//     }
//   ];

//   // Analytics data
//   const analytics = {
//     totalViews: 2789,
//     totalLikes: 326,
//     totalComments: 97,
//     viewsThisWeek: 814,
//     likesThisWeek: 123,
//     commentsThisWeek: 36,
//     growthRate: 18.5
//   };

//   const displayedBlogs = activeTab === 'my-blogs' ? myBlogs : allBlogs;
//   let filteredBlogs = displayedBlogs.filter(blog => 
//     blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
//   );

//   // Apply filter
//   if (activeFilter !== 'all') {
//     if (activeFilter === 'published') {
//       filteredBlogs = filteredBlogs.filter(blog => blog.status === 'published');
//     } else if (activeFilter === 'draft') {
//       filteredBlogs = filteredBlogs.filter(blog => blog.status === 'draft');
//     } else if (activeFilter === 'featured') {
//       filteredBlogs = filteredBlogs.filter(blog => blog.featured);
//     } else if (activeFilter === 'trending') {
//       filteredBlogs = filteredBlogs.filter(blog => blog.trending);
//     }
//   }

//   const handleAddComment = () => {
//     if (commentText.trim() !== '') {
//       alert(`Comment added: ${commentText}`);
//       setCommentText('');
//     }
//   };

//   const handleNewBlog = (e) => {
//     e.preventDefault();
//     alert('New blog post would be saved here!');
//     setShowNewBlogForm(false);
//   };

//   const openBlog = (blog) => {
//     setSelectedBlog(blog);
//   };

//   const closeBlog = () => {
//     setSelectedBlog(null);
//   };

//   // Blog Form Component
//   const NewBlogForm = () => (
//     <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-screen overflow-y-auto">
//         <div className="p-8">
//           <div className="flex justify-between items-center mb-8">
//             <h2 className="text-2xl font-bold text-gray-800">Create New Blog Post</h2>
//             <button 
//               onClick={() => setShowNewBlogForm(false)}
//               className="text-gray-500 hover:text-gray-700 transition-colors"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//           </div>
//           <form onSubmit={handleNewBlog}>
//             <div className="mb-6">
//               <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="title">
//                 Blog Title
//               </label>
//               <input 
//                 type="text" 
//                 id="title" 
//                 placeholder="Enter a compelling title" 
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
//                 required
//               />
//             </div>
            
//             <div className="mb-6">
//               <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="excerpt">
//                 Short Excerpt
//               </label>
//               <input 
//                 type="text" 
//                 id="excerpt" 
//                 placeholder="A brief description of your blog post" 
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
//                 required
//               />
//             </div>
            
//             <div className="mb-6">
//               <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="content">
//                 Blog Content
//               </label>
//               <textarea 
//                 id="content" 
//                 placeholder="Write your blog post here..." 
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition h-64"
//                 required
//               />
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//               <div>
//                 <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="tags">
//                   Tags (comma separated)
//                 </label>
//                 <input 
//                   type="text" 
//                   id="tags" 
//                   placeholder="recruitment, hiring, career" 
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-gray-700 text-sm font-medium mb-2">
//                   Options
//                 </label>
//                 <div className="flex space-x-4">
//                   <label className="flex items-center">
//                     <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
//                     <span className="ml-2 text-gray-700">Featured</span>
//                   </label>
//                   <label className="flex items-center">
//                     <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
//                     <span className="ml-2 text-gray-700">Allow Comments</span>
//                   </label>
//                 </div>
//               </div>
//             </div>
            
//             <div className="mb-6">
//               <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="image">
//                 Featured Image
//               </label>
//               <div className="flex items-center justify-center bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg h-40 transition hover:bg-gray-100 cursor-pointer">
//                 <div className="flex flex-col items-center p-6">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                   </svg>
//                   <span className="mt-2 text-base font-medium text-blue-500">Upload Image</span>
//                   <span className="mt-1 text-sm text-gray-500">or drag and drop here</span>
//                 </div>
//               </div>
//             </div>
            
//             <div className="flex justify-end space-x-4">
//               <button 
//                 type="button"
//                 onClick={() => setShowNewBlogForm(false)}
//                 className="px-6 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 font-medium transition"
//               >
//                 Cancel
//               </button>
//               <button 
//                 type="submit"
//                 className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 font-medium shadow-sm hover:shadow transition"
//               >
//                 Publish Blog
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );

//   // Blog Detail View Component
//   const BlogDetailView = ({ blog }) => {
//     const blogComments = comments.filter(comment => comment.blogId === blog.id);
    
//     return (
//       <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
//         <div className="container mx-auto px-4 py-8">
//           <button 
//             onClick={closeBlog} 
//             className="flex items-center text-blue-600 hover:text-blue-800 mb-6 transition"
//           >
//             <ChevronLeft size={20} />
//             <span className="ml-1 font-medium">Back to blogs</span>
//           </button>
          
//           <div className="max-w-4xl mx-auto">
//             <div className="mb-6">
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {blog.tags && blog.tags.map((tag, i) => (
//                   <span key={i} className="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">{tag}</span>
//                 ))}
//                 {blog.featured && (
//                   <span className="text-xs px-3 py-1 bg-purple-100 text-purple-700 rounded-full font-medium flex items-center">
//                     <Award size={12} className="mr-1" />
//                     Featured
//                   </span>
//                 )}
//                 {blog.trending && (
//                   <span className="text-xs px-3 py-1 bg-orange-100 text-orange-700 rounded-full font-medium flex items-center">
//                     <TrendingUp size={12} className="mr-1" />
//                     Trending
//                   </span>
//                 )}
//               </div>
              
//               <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">{blog.title}</h1>
              
//               <div className="flex items-center mb-8">
//                 <img src={blog.authorAvatar} alt={blog.author} className="w-12 h-12 rounded-full object-cover ring-2 ring-white" />
//                 <div className="ml-4">
//                   <div className="font-medium text-gray-900">{blog.author}</div>
//                   <div className="text-sm text-gray-500">{blog.authorRole}</div>
//                 </div>
//                 <div className="ml-auto flex items-center text-gray-500 text-sm">
//                   <Calendar size={16} className="mr-1" />
//                   <span className="mr-4">{blog.date}</span>
//                   <Clock size={16} className="mr-1" />
//                   <span>{blog.readTime}</span>
//                 </div>
//               </div>
              
//               <img 
//                 src={blog.image} 
//                 alt={blog.title} 
//                 className="w-full h-96 object-cover rounded-xl mb-10 shadow-md" 
//               />
              
//               <div className="prose max-w-none">
//                 {blog.content.split('\n\n').map((paragraph, index) => (
//                   <p key={index} className="mb-6 text-gray-700 leading-relaxed text-lg">
//                     {paragraph}
//                   </p>
//                 ))}
//               </div>
              
//               <div className="flex items-center justify-between mt-10 pt-6 border-t border-gray-200">
//                 <div className="flex space-x-4">
//                   <button className="flex items-center text-blue-600 hover:text-blue-800 cursor-pointer transition">
//                     <ThumbsUp size={20} />
//                     <span className="ml-2 font-medium">{blog.likes} likes</span>
//                   </button>
//                   <button className="flex items-center text-gray-600 hover:text-gray-800 transition">
//                     <MessageSquare size={20} />
//                     <span className="ml-2 font-medium">{blog.comments} comments</span>
//                   </button>
//                   <div className="flex items-center text-gray-600">
//                     <Eye size={20} />
//                     <span className="ml-2 font-medium">{blog.views} views</span>
//                   </div>
//                 </div>
                
//                 <div className="flex space-x-3">
//                   <button className="flex items-center text-gray-600 hover:text-gray-800 transition">
//                     <Share2 size={20} />
//                     <span className="ml-2 font-medium">Share</span>
//                   </button>
//                   <button className="flex items-center text-blue-600 hover:text-blue-800 transition">
//                     <Bookmark size={20} />
//                     <span className="ml-2 font-medium">Save</span>
//                   </button>
//                 </div>
//               </div>
//             </div>
            
//             <div className="mt-16">
//               <h3 className="text-2xl font-bold text-gray-900 mb-8">Comments ({blogComments.length})</h3>
              
//               <div className="mb-10 bg-gray-50 rounded-xl p-6">
//                 <div className="flex">
//                   <img src="/api/placeholder/40/40" alt="Your avatar" className="w-10 h-10 rounded-full mr-4" />
//                   <div className="flex-1">
//                     <textarea 
//                       value={commentText}
//                       onChange={(e) => setCommentText(e.target.value)}
//                       placeholder="Share your thoughts..." 
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
//                       rows="3"
//                     />
//                     <div className="flex justify-end mt-3">
//                       <button 
//                         onClick={handleAddComment}
//                         className="inline-flex items-center px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition shadow-sm"
//                       >
//                         <Send size={16} className="mr-2" />
//                         Post Comment
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="space-y-6">
//                 {blogComments.map(comment => (
//                   <div key={comment.id} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition">
//                     <div className="flex items-center mb-3">
//                       <img src={comment.authorAvatar} alt={comment.author} className="w-10 h-10 rounded-full" />
//                       <div className="ml-3">
//                         <div className="font-medium text-gray-900">{comment.author}</div>
//                         <div className="text-xs text-gray-500">{comment.date} at {comment.time}</div>
//                       </div>
//                     </div>
//                     <p className="text-gray-700 mb-4">{comment.content}</p>
//                     <div className="flex items-center text-sm">
//                       <button className="flex items-center text-blue-600 hover:text-blue-800 transition">
//                         <ThumbsUp size={14} className="mr-1" />
//                         <span>{comment.likes}</span>
//                       </button>
//                       <button className="ml-6 text-gray-600 hover:text-gray-800 transition">Reply</button>
//                     </div>
//                   </div>
//                 ))}
                
//                 {blogComments.length === 0 && (
//                   <div className="text-center py-16 bg-gray-50 rounded-xl">
//                     <MessageSquare size={48} className="mx-auto mb-4 text-gray-400" />
//                     <h4 className="text-xl font-medium text-gray-700 mb-2">No comments yet</h4>
//                     <p className="text-gray-500">Be the first to share your thoughts on this post!</p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   // Header Component
//   const Header = () => (
//     <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <div className="text-blue-600 font-bold text-xl">RecruiterHub</div>
//             <div className="hidden md:flex ml-10 space-x-8">
//               <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 font-medium">Dashboard</a>
//               <a href="#" className="text-blue-600 border-b-2 border-blue-600 px-3 py-2 font-medium">Blog</a>
//               <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 font-medium">Analytics</a>
//               <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 font-medium">Settings</a>
//             </div>
//           </div>
          
//           <div className="flex items-center">
//             <div className="flex items-center">
//               <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
//                 <User size={20} />
//               </div>
//               <span className="hidden md:block font-medium">Jane Smith</span>
//             </div>
            
//             <button 
//               className="ml-6 md:hidden" 
//               onClick={() => setShowMobileMenu(!showMobileMenu)}
//             >
//               <svg className="h-6 w-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
      
//       {/* Mobile Menu */}
//       {showMobileMenu && (
//         <div className="md:hidden bg-white border-t border-gray-200 px-4 py-2">
//           <a href="#" className="block py-2 text-gray-900 hover:text-blue-600 font-medium">Dashboard</a>
//           <a href="#" className="block py-2 text-blue-600 font-medium">Blog</a>
//           <a href="#" className="block py-2 text-gray-900 hover:text-blue-600 font-medium">Analytics</a>
//           <a href="#" className="block py-2 text-gray-900 hover:text-blue-600 font-medium">Settings</a>
//           <a href="#" className="block py-2 text-gray-900 hover:text-blue-600 font-medium">Profile</a>
//         </div>
//       )}
//     </header>
//   );

//   return (
// <div className="bg-gray-50 min-h-screen">
//       <Header />
      
//       {selectedBlog ? (
//         <BlogDetailView blog={selectedBlog} />
//       ) : (
//         <main className="container mx-auto px-4 py-8">
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
//             <div>
//               <h1 className="text-3xl font-bold text-gray-900 mb-2">Recruitment Blog</h1>
//               <p className="text-gray-600">Share insights and attract top talent with your recruitment expertise</p>
//             </div>
//             <button 
//               onClick={() => setShowNewBlogForm(true)}
//               className="mt-4 md:mt-0 inline-flex items-center px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium shadow-sm hover:shadow transition"
//             >
//               <PlusCircle size={18} className="mr-2" />
//               Create New Blog
//             </button>
//           </div>
          
//           <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
//             <div className="flex flex-col md:flex-row">
//               <div className="flex overflow-x-auto pb-3 md:pb-0 scrollbar-hide border-b md:border-b-0 md:border-r border-gray-200">
//                 <button
//                   onClick={() => setActiveTab('my-blogs')}
//                   className={`px-6 py-4 font-medium whitespace-nowrap ${
//                     activeTab === 'my-blogs' 
//                       ? 'text-blue-600 border-b-2 border-blue-600 md:border-b-0 md:border-l-4 md:border-blue-600 md:bg-blue-50' 
//                       : 'text-gray-600 hover:text-gray-900'
//                   }`}
//                 >
//                   My Blogs
//                 </button>
//                 <button
//                   onClick={() => setActiveTab('all-blogs')}
//                   className={`px-6 py-4 font-medium whitespace-nowrap ${
//                     activeTab === 'all-blogs' 
//                       ? 'text-blue-600 border-b-2 border-blue-600 md:border-b-0 md:border-l-4 md:border-blue-600 md:bg-blue-50' 
//                       : 'text-gray-600 hover:text-gray-900'
//                   }`}
//                 >
//                   All Blogs
//                 </button>
//               </div>
              
//               <div className="flex-1 p-4">
//                 <div className="flex flex-col md:flex-row justify-between gap-4">
//                   <div className="relative flex-1">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <Search size={18} className="text-gray-400" />
//                     </div>
//                     <input
//                       type="text"
//                       placeholder="Search blogs by title, content or tags..."
//                       className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       value={searchQuery}
//                       onChange={(e) => setSearchQuery(e.target.value)}
//                     />
//                   </div>
                  
//                   <div className="relative">
//                     <button
//                       className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-50"
//                     >
//                       <Filter size={16} className="mr-2" />
//                       <span>Filter</span>
//                       <ChevronRight size={16} className="ml-2 transform rotate-90" />
//                     </button>
                    
//                     <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-10 border border-gray-200">
//                       <button 
//                         onClick={() => setActiveFilter('all')}
//                         className={`block px-4 py-2 text-sm w-full text-left ${activeFilter === 'all' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
//                       >
//                         All Blogs
//                       </button>
//                       <button 
//                         onClick={() => setActiveFilter('published')}
//                         className={`block px-4 py-2 text-sm w-full text-left ${activeFilter === 'published' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
//                       >
//                         Published
//                       </button>
//                       <button 
//                         onClick={() => setActiveFilter('draft')}
//                         className={`block px-4 py-2 text-sm w-full text-left ${activeFilter === 'draft' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
//                       >
//                         Drafts
//                       </button>
//                       <button 
//                         onClick={() => setActiveFilter('featured')}
//                         className={`block px-4 py-2 text-sm w-full text-left ${activeFilter === 'featured' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
//                       >
//                         Featured
//                       </button>
//                       <button 
//                         onClick={() => setActiveFilter('trending')}
//                         className={`block px-4 py-2 text-sm w-full text-left ${activeFilter === 'trending' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
//                       >
//                         Trending
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {activeTab === 'my-blogs' && (
//             <section className="mb-10">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {filteredBlogs.map(blog => (
//                   <div 
//                     key={blog.id}
//                     className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition cursor-pointer"
//                     onClick={() => openBlog(blog)}
//                   >
//                     <div className="relative h-48">
//                       <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
//                       {blog.status === 'draft' && (
//                         <div className="absolute top-3 left-3 px-2 py-1 bg-gray-800 text-white text-xs font-medium rounded">
//                           Draft
//                         </div>
//                       )}
//                       {blog.featured && (
//                         <div className="absolute top-3 right-3 px-2 py-1 bg-purple-600 text-white text-xs font-medium rounded flex items-center">
//                           <Award size={12} className="mr-1" />
//                           Featured
//                         </div>
//                       )}
//                     </div>
                    
//                     <div className="p-5">
//                       <div className="flex flex-wrap gap-2 mb-3">
//                         {blog.tags && blog.tags.slice(0, 2).map((tag, i) => (
//                           <span key={i} className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">{tag}</span>
//                         ))}
//                         {blog.trending && (
//                           <span className="text-xs px-2 py-1 bg-orange-100 text-orange-700 rounded-full flex items-center">
//                             <TrendingUp size={10} className="mr-1" />
//                             Trending
//                           </span>
//                         )}
//                       </div>
                      
//                       <h3 className="font-bold text-xl mb-2 text-gray-900 line-clamp-2">{blog.title}</h3>
//                       <p className="text-gray-600 mb-4 line-clamp-2">{blog.excerpt}</p>
                      
//                       <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
//                         <div className="flex items-center text-sm text-gray-500">
//                           <Calendar size={14} className="mr-1" />
//                           {blog.date}
//                         </div>
                        
//                         <div className="flex space-x-4">
//                           <div className="flex items-center text-sm text-gray-500">
//                             <Eye size={14} className="mr-1" />
//                             {blog.views}
//                           </div>
//                           <div className="flex items-center text-sm text-gray-500">
//                             <MessageSquare size={14} className="mr-1" />
//                             {blog.comments}
//                           </div>
//                           <div className="flex items-center text-sm text-gray-500">
//                             <ThumbsUp size={14} className="mr-1" />
//                             {blog.likes}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </section>
//           )}
          
//           {activeTab === 'all-blogs' && (
//             <section className="mb-10">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {filteredBlogs.map(blog => (
//                   <div 
//                     key={blog.id}
//                     className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition cursor-pointer"
//                     onClick={() => openBlog(blog)}
//                   >
//                     <div className="relative h-48">
//                       <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
//                       {blog.featured && (
//                         <div className="absolute top-3 right-3 px-2 py-1 bg-purple-600 text-white text-xs font-medium rounded flex items-center">
//                           <Award size={12} className="mr-1" />
//                           Featured
//                         </div>
//                       )}
//                     </div>
                    
//                     <div className="p-5">
//                       <div className="flex flex-wrap gap-2 mb-3">
//                         {blog.tags && blog.tags.slice(0, 2).map((tag, i) => (
//                           <span key={i} className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">{tag}</span>
//                         ))}
//                         {blog.trending && (
//                           <span className="text-xs px-2 py-1 bg-orange-100 text-orange-700 rounded-full flex items-center">
//                             <TrendingUp size={10} className="mr-1" />
//                             Trending
//                           </span>
//                         )}
//                       </div>
                      
//                       <div className="flex items-center mb-3">
//                         <img src={blog.authorAvatar} alt={blog.author} className="w-8 h-8 rounded-full" />
//                         <div className="ml-2">
//                           <div className="text-sm font-medium text-gray-900">{blog.author}</div>
//                           <div className="text-xs text-gray-500">{blog.authorRole}</div>
//                         </div>
//                       </div>
                      
//                       <h3 className="font-bold text-xl mb-2 text-gray-900 line-clamp-2">{blog.title}</h3>
//                       <p className="text-gray-600 mb-4 line-clamp-2">{blog.excerpt}</p>
                      
//                       <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
//                         <div className="flex items-center text-sm text-gray-500">
//                           <Calendar size={14} className="mr-1" />
//                           {blog.date}
//                         </div>
                        
//                         <div className="flex space-x-4">
//                           <div className="flex items-center text-sm text-gray-500">
//                             <ThumbsUp size={14} className="mr-1" />
//                             {blog.likes}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </section>
//           )}
          
//           {/* Analytics Summary */}
//           <section className="mb-8">
//             <h2 className="text-2xl font-bold text-gray-900 mb-6">Blog Performance</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
//                 <div className="flex items-center justify-between mb-4">
//                   <div className="text-lg font-semibold text-gray-700">Total Views</div>
//                   <Eye size={20} className="text-blue-600" />
//                 </div>
//                 <div className="flex items-baseline">
//                   <div className="text-3xl font-bold text-gray-900">{analytics.totalViews}</div>
//                   <div className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded flex items-center">
//                     <ArrowUp size={12} className="mr-1" />
//                     {analytics.growthRate}%
//                   </div>
//                 </div>
//                 <div className="text-sm text-gray-500 mt-1">
//                   {analytics.viewsThisWeek} views this week
//                 </div>
//               </div>
              
//               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
//                 <div className="flex items-center justify-between mb-4">
//                   <div className="text-lg font-semibold text-gray-700">Total Likes</div>
//                   <ThumbsUp size={20} className="text-blue-600" />
//                 </div>
//                 <div className="text-3xl font-bold text-gray-900">{analytics.totalLikes}</div>
//                 <div className="text-sm text-gray-500 mt-1">
//                   {analytics.likesThisWeek} likes this week
//                 </div>
//               </div>
              
//               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
//                 <div className="flex items-center justify-between mb-4">
//                   <div className="text-lg font-semibold text-gray-700">Comments</div>
//                   <MessageSquare size={20} className="text-blue-600" />
//                 </div>
//                 <div className="text-3xl font-bold text-gray-900">{analytics.totalComments}</div>
//                 <div className="text-sm text-gray-500 mt-1">
//                   {analytics.commentsThisWeek} comments this week
//                 </div>
//               </div>
              
//               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
//                 <div className="flex items-center justify-between mb-4">
//                   <div className="text-lg font-semibold text-gray-700">Downloads</div>
//                   <Download size={20} className="text-blue-600" />
//                 </div>
//                 <div className="text-3xl font-bold text-gray-900">128</div>
//                 <div className="text-sm text-gray-500 mt-1">
//                   18 downloads this week
//                 </div>
//               </div>
//             </div>
//           </section>
          
//           {/* Performance Graph */}
//           <section className="mb-8">
//             <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
//               <div className="flex items-center justify-between mb-6">
//                 <h3 className="text-xl font-bold text-gray-900">Blog Performance</h3>
//                 <div className="flex space-x-2">
//                   <button className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-700 rounded-md">Week</button>
//                   <button className="px-3 py-1 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-md">Month</button>
//                   <button className="px-3 py-1 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-md">Year</button>
//                 </div>
//               </div>
//               <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
//                 <LineChart size={48} className="text-gray-300" />
//                 <div className="ml-4 text-gray-500">Performance data visualization would go here</div>
//               </div>
//             </div>
//           </section>
//         </main>
//       )}
      
//       {showNewBlogForm && <NewBlogForm />}
//     </div>
//   );
// }
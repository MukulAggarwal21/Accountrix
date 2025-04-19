import { useState } from 'react';
import { Search, Edit, Trash2, MessageSquare, Eye, Calendar, Clock, PlusCircle, ThumbsUp, Send, Filter, User, ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';

export default function RecruiterBlogDashboard() {
  const [activeTab, setActiveTab] = useState('my-blogs');
  const [showNewBlogForm, setShowNewBlogForm] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [commentText, setCommentText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6; 

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
    },
      {
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
      id: 9,
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
    },
      {
      id: 10,
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
      id:11,
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
      id: 12,
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
 const totalPages = Math.ceil(displayedBlogs.length / blogsPerPage);

  // Get blogs for the current page
  const paginatedBlogs = displayedBlogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className=" bg-gray-50 overflow-y-auto">
  

      {/* Main Content */}
      <main className="container  mx-auto px-4 pt-8 pb-2">
        {/* Blog Header */}
        <div className="mb-8 ">
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
          {paginatedBlogs.map((blog) => (
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
        {/* <div className="mt-10 flex justify-center">
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
        </div> */}

     <div className="mt-10 flex justify-center">
          <nav className="flex items-center space-x-2">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className={`px-3 py-1 rounded border ${
                currentPage === 1
                  ? 'border-gray-300 text-gray-400'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <ChevronLeft size={18} />
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageClick(index + 1)}
                className={`px-3 py-1 rounded border ${
                  currentPage === index + 1
                    ? 'border-blue-600 bg-blue-600 text-white'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 rounded border ${
                currentPage === totalPages
                  ? 'border-gray-300 text-gray-400'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
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


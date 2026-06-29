"use client"

import React, { useEffect, useState } from 'react'
import SkeletonLoader from '../components/SkeletonLoader'
import Loading from '../loading'

const Page = () => {
    const [posts, setPosts] = useState<post[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPosts = async () => {
            const data = await fetch('https://dummyjson.com/posts')
            const json = await data.json()
            setPosts(json.posts)
            setLoading(false)
        }
        fetchPosts()
    }, [])

    if (loading) return <SkeletonLoader />

    return (
        <div className="min-h-screen bg-gray-50 px-6 py-10">

            <div className="mb-10 text-center">
                <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight"> BLOGS</h1>
                {/* <p className="text-gray-500 mt-2 text-sm">{posts.length} posts loaded</p> */}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {posts.map((post: post) => (
                    <div
                        key={post.id}
                        className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
                    >
                        <div>
                            <span className="text-xs font-semibold text-indigo-500 bg-indigo-50 px-2 py-1 rounded-full">
                                #{post.id}
                            </span>
                            <h2 className="mt-3 text-lg font-bold text-gray-800 leading-snug">
                                {post.title}
                            </h2>
                            <p className="mt-2 text-gray-500 text-sm leading-relaxed line-clamp-3">
                                {post.body}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-4">
                            {Array.isArray(post.tags)
                                ? post.tags.map((tag: string) => (
                                    <span
                                        key={tag}
                                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                                    >
                                        #{tag}
                                    </span>
                                ))
                                : (
                                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                        #{post.tags}
                                    </span>
                                )
                            }
                        </div>

                        <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                            <div className="flex gap-3">
                                <button className="flex items-center gap-1 text-sm text-green-600 bg-green-50 hover:bg-green-100 px-3 py-1.5 rounded-lg transition-colors">
                                    👍 {post.reactions.likes}
                                </button>
                                <button className="flex items-center gap-1 text-sm text-red-500 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-lg transition-colors">
                                    👎 {post.reactions.dislikes}
                                </button>
                            </div>
                            <span className="text-xs text-gray-400 flex items-center gap-1">
                                👁️ {post.views} views
                            </span>
                        </div>
                        
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Page
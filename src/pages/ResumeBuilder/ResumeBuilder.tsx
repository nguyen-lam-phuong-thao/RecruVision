import { Menu, Plus, Search, Upload, HelpCircle, Trash2, ArrowUpDown, ArrowUp, ArrowDown, X, FileText, Linkedin, Clipboard, Edit, Copy, Trash } from 'lucide-react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import * as Dialog from '@radix-ui/react-dialog'
import * as Tabs from '@radix-ui/react-tabs'
import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { useState, useRef, useCallback, useEffect } from 'react'
import { toast, Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import Joyride from 'react-joyride'
import type { CallBackProps, Step } from 'react-joyride'
import { getCvList, importCv, type CvListItem } from '../../services/cvService'
import { getProfile } from '../../services/authService'

type SortDirection = 'asc' | 'desc' | null

interface SortConfig {
    key: string
    direction: SortDirection
}

interface Resume {
    id: string
    name: string
    score: number
    matchedJob: string
    match: number
    created: string
    lastEdited: string
}

export const ResumeBuilder = () => {
    const [sortConfig, setSortConfig] = useState<SortConfig>({ key: '', direction: null })
    const [isImportOpen, setIsImportOpen] = useState(false)
    const [isDeleteAllOpen, setIsDeleteAllOpen] = useState(false)
    const [resumes, setResumes] = useState<Resume[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [runTour, setRunTour] = useState(false)
    const [userId, setUserId] = useState<number | null>(null)
    const [isDragOver, setIsDragOver] = useState(false)
    const fileInputRef = useRef<HTMLInputElement>(null)
    const navigate = useNavigate()
    
    // Get user profile on component mount
    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const profile = await getProfile()
                setUserId(profile.data.userId)
                return profile.data.userId
            } catch (error) {
                console.error('Error fetching user profile:', error)
                toast.error('Failed to load user profile')
                return null
            }
        }
        
        const loadCvList = async (userId: number) => {
            try {
                const cvs: CvListItem[] = await getCvList(userId)
                const mappedResumes: Resume[] = cvs.map((cv) => ({
                    id: cv.id,
                    name: cv.title,
                    score: cv.score || Math.floor(Math.random() * 30) + 70, // Fallback score
                    matchedJob: cv.matchedJob || 'Not matched', // Fallback job
                    match: cv.match || Math.floor(Math.random() * 20) + 80, // Fallback match
                    created: cv.created,
                    lastEdited: cv.lastEdited
                }))
                setResumes(mappedResumes)
            } catch (error) {
                console.error('Error loading CV list from API:', error)
                toast.error('Failed to load resumes')
            }
        }
        
        const initializeData = async () => {
            const userId = await fetchUserProfile()
            if (userId) {
                await loadCvList(userId)
            }
        }
        
        initializeData()
    }, [])

    const steps: Step[] = [
        {
            target: '.search-resumes',
            content: 'Search through your resumes using keywords or filters.',
            disableBeacon: true,
        },
        {
            target: '.menu-button',
            content: 'Access additional options like importing resumes, quick tour, and bulk actions.',
        },
        {
            target: '.create-resume-button',
            content: 'Create a new resume from current resume.',
        },
        {
            target: '.resume-table',
            content: 'View and manage all your resumes. Sort by clicking column headers.',
        },
        {
            target: '.resume-actions',
            content: 'Edit, duplicate, or delete individual resumes.',
        },
    ]

    const handleJoyrideCallback = useCallback((data: CallBackProps) => {
        const { status } = data
        if (status === 'finished' || status === 'skipped') {
            setRunTour(false)
        }
    }, [])

    const handleSort = (key: string) => {
        let direction: SortDirection = 'asc'
        if (sortConfig.key === key) {
            if (sortConfig.direction === 'asc') direction = 'desc'
            else if (sortConfig.direction === 'desc') direction = null
        }
        setSortConfig({ key, direction })
    }

    const getSortIcon = (columnKey: string) => {
        if (sortConfig.key !== columnKey) return <ArrowUpDown className="w-4 h-4" />
        if (sortConfig.direction === 'asc') return <ArrowUp className="w-4 h-4" />
        if (sortConfig.direction === 'desc') return <ArrowDown className="w-4 h-4" />
        return <ArrowUpDown className="w-4 h-4" />
    }

    const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (!file) return

        // Check if userId is available
        if (!userId) {
            toast.error('User profile not loaded. Please try again.')
            return
        }

        // Validate file type
        const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
        if (!validTypes.includes(file.type)) {
            toast.error('Please upload a valid file (PDF, DOC, or DOCX)')
            return
        }

        // Validate file size (50MB)
        if (file.size > 50 * 1024 * 1024) {
            toast.error('File size should be less than 50MB')
            return
        }

        setIsLoading(true)
        try {
            // Call the importCv API
            const response = await importCv(
                userId,
                file,
                file.name.replace(/\.[^/.]+$/, ""), // Use filename without extension as title
                true, // Create new version
                undefined // No existing CV ID for new import
            )

            // Add the new resume to the list
            const newResume: Resume = {
                id: response.cvId.toString(),
                name: response.metadata.originalFileName || file.name,
                score: Math.floor(Math.random() * 30) + 70, // Fallback score
                matchedJob: 'Software Engineer', // Fallback job
                match: Math.floor(Math.random() * 20) + 80, // Fallback match
                created: new Date().toISOString().split('T')[0],
                lastEdited: new Date().toISOString().split('T')[0]
            }

            setResumes(prev => [...prev, newResume])
            toast.success(response.message || 'Resume imported successfully')
            setIsImportOpen(false)
        } catch (error) {
            console.error('Error importing resume:', error)
            toast.error('Failed to import resume. Please try again.')
        } finally {
            setIsLoading(false)
            // Reset file input
            if (fileInputRef.current) {
                fileInputRef.current.value = ''
            }
        }
    }

    const handleBrowseClick = () => {
        fileInputRef.current?.click()
    }

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.stopPropagation()
        setIsDragOver(true)
    }

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.stopPropagation()
        setIsDragOver(false)
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.stopPropagation()
        setIsDragOver(false)

        const files = e.dataTransfer.files
        if (files.length > 0) {
            const file = files[0]
            handleFileFromDrop(file)
        }
    }

    const handleFileFromDrop = async (file: File) => {
        // Check if userId is available
        if (!userId) {
            toast.error('User profile not loaded. Please try again.')
            return
        }

        // Validate file type
        const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
        if (!validTypes.includes(file.type)) {
            toast.error('Please upload a valid file (PDF, DOC, or DOCX)')
            return
        }

        // Validate file size (50MB)
        if (file.size > 50 * 1024 * 1024) {
            toast.error('File size should be less than 50MB')
            return
        }

        setIsLoading(true)
        try {
            // Call the importCv API
            const response = await importCv(
                userId,
                file,
                file.name.replace(/\.[^/.]+$/, ""), // Use filename without extension as title
                true, // Create new version
                undefined // No existing CV ID for new import
            )

            // Add the new resume to the list
            const newResume: Resume = {
                id: response.cvId.toString(),
                name: response.metadata.originalFileName || file.name,
                score: Math.floor(Math.random() * 30) + 70, // Fallback score
                matchedJob: 'Software Engineer', // Fallback job
                match: Math.floor(Math.random() * 20) + 80, // Fallback match
                created: new Date().toISOString().split('T')[0],
                lastEdited: new Date().toISOString().split('T')[0]
            }

            setResumes(prev => [...prev, newResume])
            toast.success(response.message || 'Resume imported successfully')
            setIsImportOpen(false)
        } catch (error) {
            console.error('Error importing resume:', error)
            toast.error('Failed to import resume. Please try again.')
        } finally {
            setIsLoading(false)
        }
    }

    const handleDuplicateResume = (resume: Resume) => {
        const newResume: Resume = {
            ...resume,
            id: Date.now().toString(),
            name: `${resume.name} (Copy)`,
            created: new Date().toISOString().split('T')[0],
            lastEdited: new Date().toISOString().split('T')[0]
        }
        setResumes(prev => [...prev, newResume])
        toast.success('Resume duplicated successfully')
    }

    const handleDeleteResume = (resumeId: string) => {
        setResumes(prev => prev.filter(resume => resume.id !== resumeId))
        toast.success('Resume deleted successfully')
    }

    const handleDeleteAllResumes = () => {
        setResumes([])
        setIsDeleteAllOpen(false)
        toast.success('All resumes deleted successfully')
    }

    const handleCreateNewResume = () => {
        const newResume: Resume = {
            id: Date.now().toString(),
            name: 'Untitled Resume',
            score: 0,
            matchedJob: 'Not matched',
            match: 0,
            created: new Date().toISOString().split('T')[0],
            lastEdited: new Date().toISOString().split('T')[0]
        }
        setResumes(prev => [...prev, newResume])
        toast.success('New resume created')
        // Navigate to editor after creating
        
    }

    const startQuickTour = () => {
        setRunTour(true)
    }

    return (
        <div className='p-6'>
            <Toaster position="top-center" />
            <Joyride
                callback={handleJoyrideCallback}
                continuous
                hideCloseButton
                run={runTour}
                scrollToFirstStep
                showProgress
                showSkipButton
                steps={steps}
                styles={{
                    options: {
                        zIndex: 10000,
                    },
                }}
            />
            <div className='flex justify-between mb-6'>
                <h1 className='text-2xl font-bold text-[#4F9CF9]'>Resume Builder</h1>
                <div className='flex gap-2'>
                    <div className='flex items-center gap-2 border border-gray-300 rounded-sm p-2 focus-within:border-blue-300 search-resumes'>
                        <input type='text' placeholder='Search resumes' className='outline-none'/>
                        <Search className='w-5 h-5 text-gray-500'/>
                    </div>
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger asChild>
                            <div className='flex items-center gap-2 border border-gray-300 rounded-sm p-2 cursor-pointer hover:bg-gray-50 menu-button'>
                                <Menu className='w-5 h-5 text-gray-500'/>
                                <button>Menu</button>
                            </div>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Portal>
                            <DropdownMenu.Content 
                                className="min-w-[220px] bg-white rounded-md p-1 shadow-sm border border-gray-200"
                                sideOffset={5}
                            >
                                <DropdownMenu.Item 
                                    className="flex items-center gap-2 px-2 py-2 text-sm text-black hover:bg-gray-100 rounded-sm cursor-pointer outline-none"
                                    onSelect={() => setIsImportOpen(true)}
                                >
                                    <Upload className="w-4 h-4" />
                                    <span>Import Resume or LinkedIn</span>
                                </DropdownMenu.Item>
                                <DropdownMenu.Item 
                                    className="flex items-center gap-2 px-2 py-2 text-sm text-black hover:bg-gray-100 rounded-sm cursor-pointer outline-none"
                                    onSelect={startQuickTour}
                                >
                                    <HelpCircle className="w-4 h-4" />
                                    <span>Quick Tour</span>
                                </DropdownMenu.Item>
                                <DropdownMenu.Separator className="h-px bg-gray-200 my-1" />
                                <DropdownMenu.Item 
                                    className="flex items-center gap-2 px-2 py-2 text-sm text-red-600 hover:bg-gray-100 rounded-sm cursor-pointer outline-none"
                                    onSelect={() => setIsDeleteAllOpen(true)}
                                >
                                    <Trash2 className="w-4 h-4" />
                                    <span>Delete All Resumes</span>
                                </DropdownMenu.Item>
                            </DropdownMenu.Content>
                        </DropdownMenu.Portal>
                    </DropdownMenu.Root>
                    <div className='flex items-center gap-2 border border-gray-300 rounded-sm p-2 bg-[#4F9CF9] create-resume-button'>
                        <Plus className='w-5 h-5 text-white'/>
                        <button className='text-white' onClick={handleCreateNewResume}>Create New Resume</button>
                    </div>
                </div>
            </div>

            {/* table */}
            <div className='table-resume resume-table'>
                <div className="w-full">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200">
                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 w-[25%]">
                                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleSort('resume')}>
                                        Resume
                                        {getSortIcon('resume')}
                                    </div>
                                </th>
                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 w-[10%]">
                                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleSort('score')}>
                                        Score
                                        {getSortIcon('score')}
                                    </div>
                                </th>
                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 w-[20%]">
                                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleSort('matchedJob')}>
                                        Matched Job
                                        {getSortIcon('matchedJob')}
                                    </div>
                                </th>
                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 w-[10%]">
                                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleSort('match')}>
                                        Match
                                        {getSortIcon('match')}
                                    </div>
                                </th>
                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 w-[15%]">
                                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleSort('created')}>
                                        Created
                                        {getSortIcon('created')}
                                    </div>
                                </th>
                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 w-[15%]">
                                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleSort('lastEdited')}>
                                        Last Edited
                                        {getSortIcon('lastEdited')}
                                    </div>
                                </th>
                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 w-[5%]">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {resumes.length === 0 ? (
                                <tr className="border-b border-gray-200">
                                    <td colSpan={7} className="py-12">
                                        <div className="flex flex-col items-center justify-center">
                                            <FileText className="w-12 h-12 text-gray-400 mb-4" />
                                            <p className="text-gray-600 text-lg font-medium mb-2">No resumes found</p>
                                            <p className="text-gray-500 text-sm">Create your first resume to get started</p>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                resumes.map((resume) => (
                                    <tr key={resume.id} className="border-b border-gray-200 hover:bg-gray-50">
                                        <td className="px-4 py-3 text-sm text-gray-900">{resume.name}</td>
                                        <td className="px-4 py-3 text-sm text-gray-900">{resume.score}%</td>
                                        <td className="px-4 py-3 text-sm text-gray-900">{resume.matchedJob}</td>
                                        <td className="px-4 py-3 text-sm text-gray-900">{resume.match}%</td>
                                        <td className="px-4 py-3 text-sm text-gray-900">{resume.created}</td>
                                        <td className="px-4 py-3 text-sm text-gray-900">{resume.lastEdited}</td>
                                        <td className="px-4 py-3 text-sm">
                                            <div className="flex items-center gap-3 resume-actions">
                                                <button className="text-gray-600 hover:text-blue-600" onClick={() => navigate('/app/resume-builder/resume-editor')}>
                                                    <Edit className="w-4 h-4" />
                                                </button>
                                                <button 
                                                    className="text-gray-600 hover:text-green-600"
                                                    onClick={() => handleDuplicateResume(resume)}
                                                >
                                                    <Copy className="w-4 h-4" />
                                                </button>
                                                <button 
                                                    className="text-gray-600 hover:text-red-600"
                                                    onClick={() => handleDeleteResume(resume.id)}
                                                >
                                                    <Trash className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* import resume dialog */}
            <Dialog.Root open={isImportOpen} onOpenChange={setIsImportOpen}>
                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/50" />
                    <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] bg-white rounded-lg shadow-lg">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-4">
                                <Dialog.Title className="text-xl font-semibold text-gray-900">
                                    Import your career history
                                </Dialog.Title>
                                <Dialog.Close className="text-gray-500 hover:text-gray-700">
                                    <X className="w-5 h-5" />
                                </Dialog.Close>
                            </div>
                            
                            <Dialog.Description className="text-sm text-gray-600 mb-6">
                                Import your information from an existing resume, LinkedIn profile, or add it manually.
                            </Dialog.Description>

                            <h3 className="text-sm font-medium text-gray-900 mb-4">
                                How would you like to add your career information?
                            </h3>

                            <Tabs.Root defaultValue="resume" className="w-full">
                                <Tabs.List className="flex border-b border-gray-200 mb-6">
                                    <Tabs.Trigger
                                        value="resume"
                                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:text-blue-600"
                                    >
                                        <FileText className="w-4 h-4" />
                                        Resume File
                                    </Tabs.Trigger>
                                    <Tabs.Trigger
                                        value="linkedin"
                                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:text-blue-600"
                                    >
                                        <Linkedin className="w-4 h-4" />
                                        LinkedIn Import
                                    </Tabs.Trigger>
                                    <Tabs.Trigger
                                        value="paste"
                                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:text-blue-600"
                                    >
                                        <Clipboard className="w-4 h-4" />
                                        Paste Text
                                    </Tabs.Trigger>
                                </Tabs.List>

                                <Tabs.Content value="resume" className="outline-none">
                                    <div 
                                        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                                            isDragOver 
                                                ? 'border-blue-500 bg-blue-50' 
                                                : 'border-gray-300'
                                        }`}
                                        onDragOver={handleDragOver}
                                        onDragLeave={handleDragLeave}
                                        onDrop={handleDrop}
                                    >
                                        <input
                                            type="file"
                                            ref={fileInputRef}
                                            onChange={handleFileUpload}
                                            accept=".pdf,.doc,.docx"
                                            className="hidden"
                                        />
                                        <div className="mb-4">
                                            <Upload className={`w-8 h-8 mx-auto ${
                                                isDragOver ? 'text-blue-500' : 'text-gray-400'
                                            }`} />
                                        </div>
                                        <p className={`text-sm mb-2 ${
                                            isDragOver ? 'text-blue-600' : 'text-gray-600'
                                        }`}>
                                            {isDragOver 
                                                ? 'Drop your file here' 
                                                : 'Choose a file or drag and drop it here'
                                            }
                                        </p>
                                        <p className="text-xs text-gray-500 mb-4">
                                            .doc, .docx or .pdf, up to 50 MB
                                        </p>
                                        <button 
                                            onClick={handleBrowseClick}
                                            disabled={isLoading}
                                            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isLoading ? 'Importing...' : 'Browse file'}
                                        </button>
                                    </div>
                                </Tabs.Content>

                                <Tabs.Content value="linkedin" className="outline-none">
                                    <div className="text-center py-8">
                                        <input type="text" placeholder='Enter your LinkedIn profile URL' className='w-full p-2 border border-gray-300 rounded-md' />
                                    </div>
                                </Tabs.Content>

                                <Tabs.Content value="paste" className="outline-none">
                                    <div className="text-center">
                                        <textarea placeholder='Paste your text here' className='w-full p-2 border border-gray-300 rounded-md h-[200px]' />
                                    </div>
                                </Tabs.Content>
                            </Tabs.Root>

                            <div className="flex justify-end gap-3 mt-6">
                                <button
                                    onClick={() => setIsImportOpen(false)}
                                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                                >
                                    Cancel
                                </button>
                                <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md">
                                    Next
                                </button>
                            </div>
                        </div>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>

            {/* Delete All Confirmation Dialog */}
            <AlertDialog.Root open={isDeleteAllOpen} onOpenChange={setIsDeleteAllOpen}>
                <AlertDialog.Portal>
                    <AlertDialog.Overlay className="fixed inset-0 bg-black/50" />
                    <AlertDialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] bg-white rounded-lg shadow-lg p-6">
                        <AlertDialog.Title className="text-lg font-semibold text-gray-900 mb-2">
                            Delete All Resumes
                        </AlertDialog.Title>
                        <AlertDialog.Description className="text-sm text-gray-600 mb-6">
                            Are you sure you want to delete all resumes? This action cannot be undone.
                        </AlertDialog.Description>
                        <div className="flex justify-end gap-3">
                            <AlertDialog.Cancel asChild>
                                <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md">
                                    Cancel
                                </button>
                            </AlertDialog.Cancel>
                            <AlertDialog.Action asChild>
                                <button 
                                    onClick={handleDeleteAllResumes}
                                    className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md"
                                >
                                    Delete All
                                </button>
                            </AlertDialog.Action>
                        </div>
                    </AlertDialog.Content>
                </AlertDialog.Portal>
            </AlertDialog.Root>
        </div>
    )
}

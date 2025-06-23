import { ArrowLeft, Download, Menu, FileText, Palette, BarChart2, Briefcase, FileType, ChevronRight } from 'lucide-react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Button } from '../../components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs'
import * as Accordion from '@radix-ui/react-accordion'
import { useState, useEffect, useRef } from 'react'
import { exportView, getCvList } from '../../services/cvService'
import { getProfile } from '../../services/authService'
import { Document, Page } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import { pdfjs } from 'react-pdf';
import { toast } from 'react-hot-toast';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.mjs',
  import.meta.url,
).toString();

export const ResumeEditor = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [openItems, setOpenItems] = useState<string[]>([])
  const [activeTab, setActiveTab] = useState('content')
  const [userId, setUserId] = useState<number | null>(null)
  const [cvId, setCvId] = useState<number | null>(null)
  const [resumeName, setResumeName] = useState<string>('Untitled Resume')
  const [pdfData, setPdfData] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isInitialLoading, setIsInitialLoading] = useState(true)
  const [numPages, setNumPages] = useState<number>(0)
  const [isMounted, setIsMounted] = useState(true)
  const [pdfKey, setPdfKey] = useState<number>(0) // Add key to force PDF component re-render
  const currentCvIdRef = useRef<number | null>(null) // Track current CV ID to prevent race conditions

  const handleAccordionChange = (value: string) => {
    setOpenItems(prev =>
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    )
  }

  // Function to cleanup PDF data
  const cleanupPdfData = () => {
    if (pdfData) {
      URL.revokeObjectURL(pdfData)
      setPdfData(null)
    }
    setNumPages(0)
    setPdfKey(prev => prev + 1) // Force PDF component re-render
  }

  // Load user profile and CV data on component mount
  useEffect(() => {
    const loadData = async () => {
      setIsInitialLoading(true)
      try {
        // Get user profile
        const profile = await getProfile()
        const currentUserId = profile.data.userId
        setUserId(currentUserId)

        // Get cvId from URL parameters
        const cvIdFromUrl = searchParams.get('cvId')
        if (cvIdFromUrl) {
          const currentCvId = parseInt(cvIdFromUrl)
          
          // Check if this is a different CV than the current one
          if (currentCvIdRef.current !== currentCvId) {
            // Cleanup previous PDF data before loading new one
            cleanupPdfData()
            // Small delay to ensure cleanup is complete
            await new Promise(resolve => setTimeout(resolve, 100))
            currentCvIdRef.current = currentCvId
            setCvId(currentCvId)

            // Get CV details to set resume name
            try {
              const cvList = await getCvList(currentUserId)
              const cvFromList = cvList.find(cv => cv.id === currentCvId.toString())
              if (cvFromList) {
                setResumeName(cvFromList.title)
                console.log('CV found in list:', cvFromList)
              } else {
                console.warn('CV not found in list for cvId:', currentCvId)
                setResumeName('Untitled Resume')
                // Don't try to load PDF if CV doesn't exist
                toast.error('Resume not found. Please select a valid resume.')
                navigate('/app/resume-builder')
                return
              }
            } catch (error) {
              console.error('Error loading CV list:', error)
              setResumeName('Untitled Resume')
              toast.error('Failed to load resume information.')
              navigate('/app/resume-builder')
              return
            }

            // Call exportView API to get PDF data
            setIsLoading(true)
            try {
              console.log('Loading PDF for cvId:', currentCvId, 'userId:', currentUserId)
              const pdfBlob = await exportView(currentCvId, currentUserId, 'PDF', true)
              // Check if component is still mounted and CV hasn't changed
              if (!isMounted || currentCvIdRef.current !== currentCvId) return
              
              console.log('PDF blob received:', {
                size: pdfBlob.size,
                type: pdfBlob.type
              })
              
              // Validate that we received a valid blob
              if (!pdfBlob || pdfBlob.size === 0) {
                throw new Error('Invalid PDF data received')
              }
              
              // Check if blob is actually a PDF
              if (pdfBlob.type !== 'application/pdf') {
                console.warn('Received blob is not a PDF:', pdfBlob.type)
              }
              
              // Create blob URL with proper type
              const pdfUrl = URL.createObjectURL(new Blob([pdfBlob], { type: 'application/pdf' }))
              console.log('PDF URL created:', pdfUrl)
              setPdfData(pdfUrl)
            } catch (error) {
              console.error('Error loading PDF:', error)
              if (isMounted && currentCvIdRef.current === currentCvId) {
                setPdfData(null)
                // Show user-friendly error message
                toast.error('Failed to load PDF. The resume may not exist or may be corrupted.')
              }
            } finally {
              if (isMounted && currentCvIdRef.current === currentCvId) {
                setIsLoading(false)
              }
            }
          }
        } else {
          console.error('No cvId provided in URL parameters')
          toast.error('No resume selected. Please select a resume from the list.')
          // Navigate back to resume builder if no cvId is provided
          navigate('/app/resume-builder')
        }
      } catch (error) {
        console.error('Error loading user profile:', error)
      } finally {
        setIsInitialLoading(false)
      }
    }

    loadData()
  }, [searchParams, navigate])

  const handleRefreshPDF = async () => {
    if (userId && cvId) {
      setIsLoading(true)
      try {
        const pdfBlob = await exportView(cvId, userId, 'PDF', true)
        // Check if component is still mounted and CV hasn't changed
        if (!isMounted || currentCvIdRef.current !== cvId) return
        
        // Validate that we received a valid blob
        if (!pdfBlob || pdfBlob.size === 0) {
          throw new Error('Invalid PDF data received')
        }
        
        // Check if blob is actually a PDF
        if (pdfBlob.type !== 'application/pdf') {
          console.warn('Received blob is not a PDF:', pdfBlob.type)
        }
        
        // Cleanup previous PDF data if exists
        cleanupPdfData()
        // Small delay to ensure cleanup is complete
        await new Promise(resolve => setTimeout(resolve, 100))
        
        // Create blob URL with proper type
        const pdfUrl = URL.createObjectURL(new Blob([pdfBlob], { type: 'application/pdf' }))
        setPdfData(pdfUrl)
      } catch (error) {
        console.error('Error refreshing PDF:', error)
        if (isMounted && currentCvIdRef.current === cvId) {
          setPdfData(null)
          toast.error('Failed to refresh PDF. Please try again.')
        }
      } finally {
        if (isMounted && currentCvIdRef.current === cvId) {
          setIsLoading(false)
        }
      }
    }
  }

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages)
  }

  const onDocumentLoadError = (error: Error) => {
    console.error('Error loading PDF document:', error)
    // Only show error if this is still the current CV
    if (currentCvIdRef.current === cvId) {
      setPdfData(null)
      toast.error('Failed to display PDF. Please try refreshing the page.')
    }
  }

  // Cleanup PDF data when component unmounts
  useEffect(() => {
    return () => {
      setIsMounted(false)
      cleanupPdfData()
    }
  }, [])

  // Handle URL parameter changes
  useEffect(() => {
    const cvIdFromUrl = searchParams.get('cvId')
    if (cvIdFromUrl) {
      const newCvId = parseInt(cvIdFromUrl)
      if (currentCvIdRef.current !== newCvId) {
        console.log('CV ID changed from', currentCvIdRef.current, 'to', newCvId)
        // Trigger a re-render by updating the key
        setPdfKey(prev => prev + 1)
      }
    }
  }, [searchParams])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="mx-auto px-4">
          <div className="h-16 flex items-center justify-between">
            {/* Left section - Back button and title */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="text-sm font-medium">Back</span>
              </button>
              <div className="h-6 w-px bg-gray-200" />
              <h1 className="text-lg font-semibold text-gray-900">{resumeName}</h1>
            </div>

            {/* Right section - Action buttons */}
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                className="flex items-center gap-2 border-black text-black hover:bg-gray-50"
                onClick={handleRefreshPDF}
                disabled={!userId || !cvId || isLoading}
              >
                <Download className="w-4 h-4" />
                <span>{isLoading ? 'Loading...' : 'Export PDF'}</span>
              </Button>
              <Button
                variant="outline"
                className="flex items-center gap-2 border-black text-black hover:bg-gray-50"
              >
                <Menu className="w-4 h-4" />
                <span>Menu</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Tabs Container */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        {/* Tabs Navigation - Sticky */}
        <div className="sticky top-16 z-40 bg-white border-b border-gray-200">
          <div className="mx-auto px-4">
            <TabsList className="h-14 flex items-center gap-1">
              <TabsTrigger
                value="content"
                className="flex items-center gap-2 px-4 h-10 rounded-md data-[state=active]:bg-gray-100 data-[state=active]:text-gray-900 hover:bg-gray-50 hover:text-gray-900 text-gray-600 transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>Content Editor</span>
              </TabsTrigger>
              <TabsTrigger
                value="designer"
                className="flex items-center gap-2 px-4 h-10 rounded-md data-[state=active]:bg-gray-100 data-[state=active]:text-gray-900 hover:bg-gray-50 hover:text-gray-900 text-gray-600 transition-colors"
              >
                <Palette className="w-4 h-4" />
                <span>Designer</span>
              </TabsTrigger>
              <TabsTrigger
                value="analyzer"
                className="flex items-center gap-2 px-4 h-10 rounded-md data-[state=active]:bg-gray-100 data-[state=active]:text-gray-900 hover:bg-gray-50 hover:text-gray-900 text-gray-600 transition-colors"
              >
                <BarChart2 className="w-4 h-4" />
                <span>Analyzer</span>
              </TabsTrigger>
              <TabsTrigger
                value="job-matcher"
                className="flex items-center gap-2 px-4 h-10 rounded-md data-[state=active]:bg-gray-100 data-[state=active]:text-gray-900 hover:bg-gray-50 hover:text-gray-900 text-gray-600 transition-colors"
              >
                <Briefcase className="w-4 h-4" />
                <span>Job Matcher</span>
              </TabsTrigger>
              <TabsTrigger
                value="cover-letter"
                className="flex items-center gap-2 px-4 h-10 rounded-md data-[state=active]:bg-gray-100 data-[state=active]:text-gray-900 hover:bg-gray-50 hover:text-gray-900 text-gray-600 transition-colors"
              >
                <FileType className="w-4 h-4" />
                <span>Cover Letter</span>
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        {/* Main content */}
        <main className="mx-auto ">
          <div className="grid-container grid grid-cols-6  h-[calc(100vh-120px)]">
            {/* Left section - 3 columns */}
            <div className="col-span-3 bg-white border border-gray-200 p-6 overflow-auto">
              <div className="h-full">
                {/* Content Editor Tab */}
                <TabsContent value="content" className="h-full mt-0 outline-none">
                  <Accordion.Root type="multiple" className="space-y-4" value={openItems} onValueChange={setOpenItems}>
                    <Accordion.Item value="contact" className="border border-gray-200 rounded-lg">
                      <Accordion.Trigger
                        className="flex items-center justify-between w-full px-4 py-3 hover:bg-gray-50 transition-colors"
                        onClick={() => handleAccordionChange('contact')}
                      >
                        <div className="flex items-center gap-3">
                          <ChevronRight
                            className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${openItems.includes('contact') ? 'rotate-90' : ''
                              }`}
                          />
                          <span className="font-medium">Contact Information</span>
                        </div>
                      </Accordion.Trigger>
                      <Accordion.Content className="px-4 pb-4">
                        <p>Contact Info content</p>
                      </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item value="target" className="border border-gray-200 rounded-lg">
                      <Accordion.Trigger
                        className="flex items-center justify-between w-full px-4 py-3 hover:bg-gray-50 transition-colors"
                        onClick={() => handleAccordionChange('target')}
                      >
                        <div className="flex items-center gap-3">
                          <ChevronRight
                            className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${openItems.includes('target') ? 'rotate-90' : ''
                              }`}
                          />
                          <span className="font-medium">Target Title</span>
                        </div>
                      </Accordion.Trigger>
                      <Accordion.Content className="px-4 pb-4">
                        <p>Target Title content</p>
                      </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item value="summary" className="border border-gray-200 rounded-lg">
                      <Accordion.Trigger
                        className="flex items-center justify-between w-full px-4 py-3 hover:bg-gray-50 transition-colors"
                        onClick={() => handleAccordionChange('summary')}
                      >
                        <div className="flex items-center gap-3">
                          <ChevronRight
                            className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${openItems.includes('summary') ? 'rotate-90' : ''
                              }`}
                          />
                          <span className="font-medium">Professional Summary</span>
                        </div>
                      </Accordion.Trigger>
                      <Accordion.Content className="px-4 pb-4">
                        <p>Professional Summary content</p>
                      </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item value="experience" className="border border-gray-200 rounded-lg">
                      <Accordion.Trigger
                        className="flex items-center justify-between w-full px-4 py-3 hover:bg-gray-50 transition-colors"
                        onClick={() => handleAccordionChange('experience')}
                      >
                        <div className="flex items-center gap-3">
                          <ChevronRight
                            className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${openItems.includes('experience') ? 'rotate-90' : ''
                              }`}
                          />
                          <span className="font-medium">Work Experience</span>
                        </div>
                      </Accordion.Trigger>
                      <Accordion.Content className="px-4 pb-4">
                        <p>Work Experience content</p>
                      </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item value="education" className="border border-gray-200 rounded-lg">
                      <Accordion.Trigger
                        className="flex items-center justify-between w-full px-4 py-3 hover:bg-gray-50 transition-colors"
                        onClick={() => handleAccordionChange('education')}
                      >
                        <div className="flex items-center gap-3">
                          <ChevronRight
                            className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${openItems.includes('education') ? 'rotate-90' : ''
                              }`}
                          />
                          <span className="font-medium">Education</span>
                        </div>
                      </Accordion.Trigger>
                      <Accordion.Content className="px-4 pb-4">
                        <p>Education content</p>
                      </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item value="skills" className="border border-gray-200 rounded-lg">
                      <Accordion.Trigger
                        className="flex items-center justify-between w-full px-4 py-3 hover:bg-gray-50 transition-colors"
                        onClick={() => handleAccordionChange('skills')}
                      >
                        <div className="flex items-center gap-3">
                          <ChevronRight
                            className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${openItems.includes('skills') ? 'rotate-90' : ''
                              }`}
                          />
                          <span className="font-medium">Skills & Interests</span>
                        </div>
                      </Accordion.Trigger>
                      <Accordion.Content className="px-4 pb-4">
                        <p>Skills & Interests content</p>
                      </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item value="certifications" className="border border-gray-200 rounded-lg">
                      <Accordion.Trigger
                        className="flex items-center justify-between w-full px-4 py-3 hover:bg-gray-50 transition-colors"
                        onClick={() => handleAccordionChange('certifications')}
                      >
                        <div className="flex items-center gap-3">
                          <ChevronRight
                            className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${openItems.includes('certifications') ? 'rotate-90' : ''
                              }`}
                          />
                          <span className="font-medium">Certifications</span>
                        </div>
                      </Accordion.Trigger>
                      <Accordion.Content className="px-4 pb-4">
                        <p>Certifications content</p>
                      </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item value="awards" className="border border-gray-200 rounded-lg">
                      <Accordion.Trigger
                        className="flex items-center justify-between w-full px-4 py-3 hover:bg-gray-50 transition-colors"
                        onClick={() => handleAccordionChange('awards')}
                      >
                        <div className="flex items-center gap-3">
                          <ChevronRight
                            className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${openItems.includes('awards') ? 'rotate-90' : ''
                              }`}
                          />
                          <span className="font-medium">Awards & Scholarships</span>
                        </div>
                      </Accordion.Trigger>
                      <Accordion.Content className="px-4 pb-4">
                        <p>Awards & Scholarships content</p>
                      </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item value="projects" className="border border-gray-200 rounded-lg">
                      <Accordion.Trigger
                        className="flex items-center justify-between w-full px-4 py-3 hover:bg-gray-50 transition-colors"
                        onClick={() => handleAccordionChange('projects')}
                      >
                        <div className="flex items-center gap-3">
                          <ChevronRight
                            className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${openItems.includes('projects') ? 'rotate-90' : ''
                              }`}
                          />
                          <span className="font-medium">Projects</span>
                        </div>
                      </Accordion.Trigger>
                      <Accordion.Content className="px-4 pb-4">
                        <p>Projects content</p>
                      </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item value="volunteering" className="border border-gray-200 rounded-lg">
                      <Accordion.Trigger
                        className="flex items-center justify-between w-full px-4 py-3 hover:bg-gray-50 transition-colors"
                        onClick={() => handleAccordionChange('volunteering')}
                      >
                        <div className="flex items-center gap-3">
                          <ChevronRight
                            className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${openItems.includes('volunteering') ? 'rotate-90' : ''
                              }`}
                          />
                          <span className="font-medium">Volunteering & Extracurricular</span>
                        </div>
                      </Accordion.Trigger>
                      <Accordion.Content className="px-4 pb-4">
                        <p>Volunteering & Extracurricular content</p>
                      </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item value="references" className="border border-gray-200 rounded-lg">
                      <Accordion.Trigger
                        className="flex items-center justify-between w-full px-4 py-3 hover:bg-gray-50 transition-colors"
                        onClick={() => handleAccordionChange('references')}
                      >
                        <div className="flex items-center gap-3">
                          <ChevronRight
                            className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${openItems.includes('references') ? 'rotate-90' : ''
                              }`}
                          />
                          <span className="font-medium">References</span>
                        </div>
                      </Accordion.Trigger>
                      <Accordion.Content className="px-4 pb-4">
                        <p>References content</p>
                      </Accordion.Content>
                    </Accordion.Item>

                  </Accordion.Root>
                </TabsContent>

                {/* Designer Tab */}
                <TabsContent value="designer" className="h-full mt-0 outline-none">
                  <div className="h-full flex items-center justify-center text-gray-500">
                    Designer content coming soon...
                  </div>
                </TabsContent>

                {/* Analyzer Tab */}
                <TabsContent value="analyzer" className="h-full mt-0 outline-none">
                  <div className="h-full flex items-center justify-center text-gray-500">
                    Analyzer content coming soon...
                  </div>
                </TabsContent>

                {/* Job Matcher Tab */}
                <TabsContent value="job-matcher" className="h-full mt-0 outline-none">
                  <div className="h-full flex items-center justify-center text-gray-500">
                    Job Matcher content coming soon...
                  </div>
                </TabsContent>

                {/* Cover Letter Tab */}
                <TabsContent value="cover-letter" className="h-full mt-0 outline-none">
                  <div className="h-full flex items-center justify-center text-gray-500">
                    Cover Letter content coming soon...
                  </div>
                </TabsContent>
              </div>
            </div>

            {/* Right section - 2 columns */}
            <div className="col-span-3 bg-gray-100 p-2 overflow-auto">
              <div className="h-full">
                {/* Resume canvas area */}
                <div className="h-full flex items-center justify-center">
                  {isInitialLoading ? (
                    <div className="text-gray-500">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-2"></div>
                      <p>Loading resume...</p>
                    </div>
                  ) : isLoading ? (
                    <div className="text-gray-500">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-2"></div>
                      <p>Loading PDF...</p>
                    </div>
                  ) : pdfData ? (
                    <div className="w-full h-full overflow-auto">
                      <Document
                        key={pdfKey}
                        file={pdfData}
                        onLoadSuccess={onDocumentLoadSuccess}
                        onLoadError={onDocumentLoadError}
                        className="mx-auto"
                        loading={
                          <div className="text-gray-500">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-2"></div>
                            <p>Loading PDF document...</p>
                          </div>
                        }
                        error={
                          <div className="text-red-500 text-center p-4">
                            <p>Failed to load PDF</p>
                            <p className="text-sm">The resume may not exist or may be corrupted</p>
                            <button 
                              onClick={handleRefreshPDF}
                              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                              Try Again
                            </button>
                          </div>
                        }
                      >
                        {Array.from(new Array(numPages), ( index) => (
                          <Page
                            key={`page_${index + 1}`}
                            pageNumber={index + 1}
                            className="shadow-lg mt-4 mr-5 mb-5 ml-4"
                            loading={
                              <div className="animate-pulse bg-gray-200 h-[800px] w-[600px] rounded"></div>
                            }
                            error={
                              <div className="text-red-500 text-center p-4">
                                <p>Failed to load page {index + 1}</p>
                              </div>
                            }
                          />
                        ))}
                      </Document>
                    </div>
                  ) : (
                    <div className="text-gray-500 text-center">
                      <p>No resume data available</p>
                      <p className="text-sm mb-4">The resume may not exist or may be corrupted</p>
                      <button 
                        onClick={() => navigate('/app/resume-builder')}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                      >
                        Back to Resume List
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
          
        </main>
      </Tabs>
    </div>
  )
} 
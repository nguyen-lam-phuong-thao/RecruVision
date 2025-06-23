import { ArrowLeft, Download, Menu, FileText, Palette, BarChart2, Briefcase, FileType, ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs'
import * as Accordion from '@radix-ui/react-accordion'
import { useState, useEffect } from 'react'
import { exportView } from '../../services/cvService'
import { getProfile } from '../../services/authService'
import { Document, Page } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.mjs',
  import.meta.url,
).toString();



export const ResumeEditor = () => {
  const navigate = useNavigate()
  const [openItems, setOpenItems] = useState<string[]>([])
  const [activeTab, setActiveTab] = useState('content')
  const [userId, setUserId] = useState<number | null>(null)
  const [cvId, setCvId] = useState<number | null>(null)
  const [pdfData, setPdfData] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [numPages, setNumPages] = useState<number>(0)

  const handleAccordionChange = (value: string) => {
    setOpenItems(prev =>
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    )
  }

  // Load user profile and CV data on component mount
  useEffect(() => {
    const loadData = async () => {
      try {
        // Get user profile
        const profile = await getProfile()
        const currentUserId = profile.data.userId
        setUserId(currentUserId)

        // Get latest CV from localStorage
        const savedResumes = localStorage.getItem('resumes')
        if (savedResumes) {
          const resumes = JSON.parse(savedResumes)
          if (resumes.length > 0) {
            // Get the most recent CV (last in the array)
            const latestCv = resumes[resumes.length - 1]
            const latestCvId = parseInt(latestCv.id)
            setCvId(latestCvId)

            // Call exportView API to get PDF data
            setIsLoading(true)
            try {
              const pdfBlob = await exportView(latestCvId, currentUserId, 'PDF', true)
              const pdfUrl = URL.createObjectURL(pdfBlob)
              setPdfData(pdfUrl)
            } catch (error) {
              console.error('Error loading PDF:', error)
            } finally {
              setIsLoading(false)
            }
          }
        }
      } catch (error) {
        console.error('Error loading user profile:', error)
      }
    }

    loadData()
  }, [])

  const handleRefreshPDF = async () => {
    if (userId && cvId) {
      setIsLoading(true)
      try {
        const pdfBlob = await exportView(cvId, userId, 'PDF', true)
        const pdfUrl = URL.createObjectURL(pdfBlob)
        setPdfData(pdfUrl)
      } catch (error) {
        console.error('Error refreshing PDF:', error)
      } finally {
        setIsLoading(false)
      }
    }
  }

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages)
  }



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
              <h1 className="text-lg font-semibold text-gray-900">Untitled Resume</h1>
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
                  {isLoading ? (
                    <div className="text-gray-500">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-2"></div>
                      <p>Loading PDF...</p>
                    </div>
                  ) : pdfData ? (
                    <div className="w-full h-full overflow-auto">
                      <Document
                        file={pdfData}
                        onLoadSuccess={onDocumentLoadSuccess}
                        className="mx-auto"
                      >
                        {Array.from(new Array(numPages), (el, index) => (
                          <Page
                            key={`page_${index + 1}`}
                            pageNumber={index + 1}
                            className="shadow-lg mt-4 mr-5 mb-5 ml-4"
                          />
                        ))}
                      </Document>
                    </div>
                  ) : (
                    <div className="text-gray-500 text-center">
                      <p>No resume data available</p>
                      <p className="text-sm">Please import a resume first</p>
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
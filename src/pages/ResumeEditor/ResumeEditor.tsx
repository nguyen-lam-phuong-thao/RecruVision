import { ArrowLeft, Download, Menu, FileText, Palette, BarChart2, Briefcase, FileType, ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs'
import * as Accordion from '@radix-ui/react-accordion'
import { useState } from 'react'

export const ResumeEditor = () => {
  const navigate = useNavigate()
  const [openItems, setOpenItems] = useState<string[]>([])
  const [activeTab, setActiveTab] = useState('content')

  const handleAccordionChange = (value: string) => {
    setOpenItems(prev => 
      prev.includes(value) 
        ? prev.filter(item => item !== value)
        : [...prev, value]
    )
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
              >
                <Download className="w-4 h-4" />
                <span>Export PDF</span>
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
        <main className="mx-auto px-4 py-6">
          <div className="grid grid-cols-5 gap-6">
            {/* Left section - 3 columns */}
            <div className="col-span-3 bg-white rounded-lg border border-gray-200 p-6">
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
                          <span className="font-medium">Contact Info</span>
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
            <div className="col-span-2 bg-white rounded-lg border border-gray-200 p-6">
              <div className="h-full">
                {/* Resume canvas area */}
                <div className="h-full flex items-center justify-center text-gray-500">
                  <img src='./images/png/NguyenVanAnCV-Canvas.png' alt="Resume" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>
          </div>
        </main>
      </Tabs>
    </div>
  )
}

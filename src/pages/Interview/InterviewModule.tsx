import { ArrowLeft, Mic, MicOff, Video, VideoOff, Volume2, VolumeX } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'

interface LocationState {
  scenarioTitle: string
  from: string
}

export default function InterviewModule() {
  const location = useLocation()
  const navigate = useNavigate()
  const { scenarioTitle } = (location.state as LocationState) || { scenarioTitle: 'Interview Practice' }
  
  const [isRecording, setIsRecording] = useState(false)
  const [isVideoOn, setIsVideoOn] = useState(true)
  const [isAudioOn, setIsAudioOn] = useState(true)

  // Mock conversation data
  const conversation = [
    {
      id: 1,
      speaker: 'AI',
      name: 'AI Interviewer',
      avatar: '🤖',
      message: `Hello! Welcome to your interview practice session for "${scenarioTitle}". I'm here to help you prepare and improve your interview skills. Are you ready to begin?`,
      timestamp: '00:05'
    },
    {
      id: 2,
      speaker: 'User',
      name: 'You',
      avatar: '👤',
      message: 'Yes, I\'m ready to start the interview.',
      timestamp: '00:08'
    },
    {
      id: 3,
      speaker: 'AI',
      name: 'AI Interviewer',
      avatar: '🤖',
      message: 'Great! Let\'s start with the first question. Can you tell me about yourself and your background?',
      timestamp: '00:12'
    },
    {
      id: 4,
      speaker: 'User',
      name: 'You',
      avatar: '👤',
      message: 'I\'m a recent graduate with a degree in Computer Science. I have experience in web development and I\'m passionate about creating user-friendly applications.',
      timestamp: '00:18'
    }
  ]

  return (
    <div style={{ background: '#F5F8FA', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{ 
        background: '#fff', 
        borderBottom: '1px solid #e5e7eb', 
        padding: '16px 24px',
        display: 'flex',
        alignItems: 'center',
        gap: '16px'
      }}>
        <button
          onClick={() => navigate(-1)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#043873'
          }}
        >
          <ArrowLeft size={20} />
        </button>
        <div>
          <h1 style={{ 
            margin: 0, 
            fontSize: '20px', 
            fontWeight: 700, 
            color: '#043873' 
          }}>
            {scenarioTitle}
          </h1>
          <p style={{ 
            margin: '4px 0 0 0', 
            fontSize: '14px', 
            color: '#6b7280' 
          }}>
            Interview Practice Session
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div style={{ padding: '24px' }}>
        {/* Video Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(6, 1fr)', 
          gap: '24px', 
          marginBottom: '24px' 
        }}>
          {/* AI Interviewer Section */}
          <div style={{ 
            gridColumn: 'span 2', 
            background: '#fff', 
            borderRadius: '12px', 
            padding: '24px',
            border: '1px solid #e5e7eb',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px'
          }}>
            {/* AI Avatar */}
            <div style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #4F9CF9, #043873)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '48px',
              color: '#fff',
              boxShadow: '0 4px 12px rgba(79, 156, 249, 0.3)'
            }}>
              🤖
            </div>
            
            {/* AI Name */}
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ 
                margin: '0 0 4px 0', 
                fontSize: '18px', 
                fontWeight: 700, 
                color: '#043873' 
              }}>
                AI Interviewer
              </h3>
              <p style={{ 
                margin: 0, 
                fontSize: '14px', 
                color: '#6b7280' 
              }}>
                Your Practice Partner
              </p>
            </div>

            {/* Audio Waveform */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              marginTop: '8px'
            }}>
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: '4px',
                    height: `${Math.random() * 20 + 8}px`,
                    background: '#4F9CF9',
                    borderRadius: '2px',
                    animation: 'wave 1s ease-in-out infinite',
                    animationDelay: `${i * 0.1}s`
                  }}
                />
              ))}
            </div>
          </div>

          {/* User Video Section */}
          <div style={{ 
            gridColumn: 'span 4', 
            background: '#000', 
            borderRadius: '12px',
            overflow: 'hidden',
            position: 'relative',
            aspectRatio: '16/9'
          }}>
            {/* Mock Video Background */}
            <div style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(45deg, #1f2937, #374151)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontSize: '18px'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>📹</div>
                <div>Your Video Feed</div>
                <div style={{ fontSize: '14px', opacity: 0.7, marginTop: '8px' }}>
                  {isVideoOn ? 'Camera Active' : 'Camera Off'}
                </div>
              </div>
            </div>

            {/* Video Controls Overlay */}
            <div style={{
              position: 'absolute',
              bottom: '16px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '12px',
              background: 'rgba(0,0,0,0.7)',
              padding: '8px 16px',
              borderRadius: '24px'
            }}>
              <button
                onClick={() => setIsVideoOn(!isVideoOn)}
                style={{
                  background: isVideoOn ? '#4F9CF9' : '#6b7280',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#fff'
                }}
              >
                {isVideoOn ? <Video size={20} /> : <VideoOff size={20} />}
              </button>
              
              <button
                onClick={() => setIsAudioOn(!isAudioOn)}
                style={{
                  background: isAudioOn ? '#4F9CF9' : '#6b7280',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#fff'
                }}
              >
                {isAudioOn ? <Volume2 size={20} /> : <VolumeX size={20} />}
              </button>
              
              <button
                onClick={() => setIsRecording(!isRecording)}
                style={{
                  background: isRecording ? '#ef4444' : '#4F9CF9',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#fff'
                }}
              >
                {isRecording ? <MicOff size={20} /> : <Mic size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Conversation Transcript */}
        <div style={{ 
          background: '#fff', 
          borderRadius: '12px', 
          border: '1px solid #e5e7eb',
          padding: '24px'
        }}>
          <h3 style={{ 
            margin: '0 0 20px 0', 
            fontSize: '18px', 
            fontWeight: 700, 
            color: '#043873' 
          }}>
            Conversation Transcript
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {conversation.map((message) => (
              <div key={message.id} style={{
                display: 'flex',
                gap: '12px',
                alignItems: 'flex-start'
              }}>
                {/* Avatar */}
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: message.speaker === 'AI' ? '#4F9CF9' : '#043873',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  color: '#fff',
                  flexShrink: 0
                }}>
                  {message.avatar}
                </div>
                
                {/* Message Content */}
                <div style={{ flex: 1 }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '4px'
                  }}>
                    <span style={{
                      fontWeight: 600,
                      fontSize: '14px',
                      color: '#043873'
                    }}>
                      {message.name}
                    </span>
                    <span style={{
                      fontSize: '12px',
                      color: '#6b7280'
                    }}>
                      {message.timestamp}
                    </span>
                  </div>
                  
                  <div style={{
                    background: message.speaker === 'AI' ? '#f3f4f6' : '#e6f2fa',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    fontSize: '14px',
                    lineHeight: '1.5',
                    color: '#374151'
                  }}>
                    {message.message}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes wave {
            0%, 100% {
              height: 8px;
            }
            50% {
              height: 24px;
            }
          }
        `}
      </style>
    </div>
  )
}

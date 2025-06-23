import api from "../api/index";

interface ImportCvApiResponse {
  success: boolean;
  message: string;
  cvId: number;
  versionId: number;
  warnings: string[];
  metadata: {
    originalFileName: string;
    fileSize: number;
    fileType: string;
    pageCount: number;
    processedAt: string;
    extractedSections: string[];
  };
}

export interface CvListItem {
  id: string;
  title: string;
  score?: number;
  matchedJob?: string;
  match?: number;
  created: string;
  lastEdited: string;
}

interface ExportViewRequest {
  cvId: number;
  userId: number;
  exportFormat: string;
  includeAnalysis: boolean;
}

export const getCvList = async (userId: number): Promise<CvListItem[]> => {
  const response = await api.get(`/api/Cv/user/${userId}`);
  const cvs = response.data?.cvs || [];

  return cvs.map((cv: any) => ({
    id: cv.cvId.toString(),
    title: cv.title,
    created: cv.createdAt,
    lastEdited: cv.updatedAt,
    score: undefined,         // nếu cần bạn có thể tính toán hoặc bỏ
    matchedJob: undefined,    // nếu có thông tin job matching, bạn có thể đưa vào
    match: undefined
  }));
};

//Nhập cv
export const importCv = async (
  userId: number,
  file: File,
  title?: string,
  createNewVersion?: boolean,
  existingCvId?: number
): Promise<ImportCvApiResponse> => {
  const formData = new FormData();
  formData.append('UserId', userId.toString());
  formData.append('File', file);
  
  if (title !== undefined) {
    formData.append('Title', title);
  }
  
  if (createNewVersion !== undefined) {
    formData.append('CreateNewVersion', createNewVersion.toString());
  }
  
  if (existingCvId !== undefined) {
    formData.append('ExistingCvId', existingCvId.toString());
  }

  const response = await api.post('/api/Cv/import', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  
  return response.data;
}; 

//Xuất pdf
export const exportView = async (
  cvId: number, 
  userId: number, 
  exportFormat: string, 
  includeAnalysis: boolean
): Promise<Blob> => {
  const requestBody: ExportViewRequest = {
    cvId,
    userId,
    exportFormat,
    includeAnalysis
  };

  const response = await api.post('/api/Cv/export-view', requestBody, {
    responseType: 'blob' 
  });

  // Validate response
  if (!response.data || response.data.size === 0) {
    throw new Error('Empty response from server')
  }

  // Check if response is actually a PDF
  const contentType = response.headers['content-type']
  if (contentType && !contentType.includes('application/pdf')) {
    console.warn('Server returned non-PDF content type:', contentType)
  }

  return response.data; // Đây là Blob (PDF binary)
}; 
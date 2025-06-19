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
// hàm này chưa có api thật
export const getCvList = async (userId: number): Promise<CvListItem[]> => {
  const response = await api.get(`/api/Cv/list?userId=${userId}`);
  return response.data;
};

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

export const exportView = async (
  cvId: number, 
  userId: number, 
  exportFormat: string, 
  includeAnalysis: boolean
): Promise<string> => {
  const requestBody: ExportViewRequest = {
    cvId,
    userId,
    exportFormat,
    includeAnalysis
  };
  
  const response = await api.post('/api/Cv/export-view', requestBody);
  return response.data;
};
import axiosClient from '@/api/axiosClient';
import { FileType } from '@/types/fileTypes';

export default class FilesService {
  static async filesFetch(token: string, dirId: string): Promise<FileType[]> {
    const response = await axiosClient(`files${dirId ? '?parent=' + dirId : ''}`, 'GET', {
      Authorization: `Bearer ${token}`,
    });
    return response;
  }
}

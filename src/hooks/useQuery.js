import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../services/api';

export default function useQueryGet({ apiEndpointUrl, queryKey }) {
  const getQuery = useQuery({
    queryKey: [queryKey],
    queryFn: () => axiosInstance.get(apiEndpointUrl),
  });

  return getQuery;
}

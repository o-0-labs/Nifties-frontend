import Axios, { IApiData } from 'utils/Axios';

export { IApiData } from 'utils/Axios';

export interface Grant {
  user_id: string;
  user_name: string;

  bringing: string;
  external_funding: string;
  based: string;

  title: string;
  description: string;
  logo: string;
  contract_address?: string;
  website?: string;
  twitter: string;

  total_raised: string;
  min_raised?: string;
  fundraising_start_date?: string;
  fundraising_end_date?: string;

  grants_id?: string;
  status?: string;
  create_time?: string;
}

export function fetchAll(): Promise<IApiData> {
  const params = {
    page_no: 1,
    page_size: 10,
  };

  return Axios.getInstance().post(`/grants/query`, { data: params }) as Promise<IApiData>;
}

export function add(params: Grant): Promise<IApiData> {
  return Axios.getInstance().post(`/grants/add`, { data: params }) as Promise<IApiData>;
}

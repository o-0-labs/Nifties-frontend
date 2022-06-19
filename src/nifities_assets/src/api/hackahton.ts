import Axios, { IApiData } from 'utils/Axios';

export { IApiData } from 'utils/Axios';

/**
 * 黑客松活动不同状态的数据 接口声明
 *
 * @interface HackathonStatus
 */
export interface HackathonStatus {
  happening: number;
  upcoming: number;
  completed: number;
}

/**
 * Hackathon数据 接口声明
 *
 * @interface Hackathon
 */
export interface Hackathon {
  hackathon_id: string;
  title: string;
  date: string;
  description: string;
  sponsored: string;
  status: string;
  image: string;
  discord_url: string;
  content?: string;
  msg?: string;
  join_flag: string;
}

/**
 * 加入黑客松的数据接口声明
 *
 * @interface JoinHackahton
 */
export interface JoinHackahton{
  user_id: string;
  hackathon_id: string;
  discord: string;
  email:string;
  sharing_email:string;
  agree: string;
}

/**
 * 获取黑客松活动不同状态的活动总数量
 *
 * @export
 * @return {*}  {Promise<IApiData>}
 */
export function fetchStatusCount(): Promise<IApiData> {
  return Axios.getInstance().post(`/hackathon/count`) as Promise<IApiData>;
}

/**
 * 获取黑客松活动列表数据
 *
 * @export
 * @return {*}  {Promise<IApiData>}
 */
export function fetchAll(): Promise<IApiData> {
  const params = {
    page_no: 1,
    page_size: 10,
    status: '',
  };

  return Axios.getInstance().post(`/hackathon/query`, { data: params }) as Promise<IApiData>;
}

/**
 * 获取黑客松活动列表数据根据status
 *
 * @export
 * @return {*}  {Promise<IApiData>}
 */
export function fetchAllByStatus(status: string): Promise<IApiData> {
  const params = {
    page_no: 1,
    page_size: 10,
    status: status,
  };

  return Axios.getInstance().post(`/hackathon/query`, { data: params }) as Promise<IApiData>;
}

/**
 
 *
 * @export
 * @param {string} id
 * @return {*}  {Promise<IApiData>}
 */
export function fetchById(id: string): Promise<IApiData> {
  const params = {
    hackathon_id: id,
  };
  return Axios.getInstance().post(`/hackathon/detail`, { data: params }) as Promise<IApiData>;
}



export function join(params: JoinHackahton): Promise<IApiData> {
  return Axios.getInstance().post(`/hackathon/join`, { data: params }) as Promise<IApiData>;
}

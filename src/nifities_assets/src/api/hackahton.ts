import request from './request';

/**
 * 黑客松活动不同状态的数据 接口声明
 *
 * @interface HackathonStatus
 */
export interface HackathonStatus {
    "happening": number;
    "upcoming": number;
    "completed": number;
}

/**
 * Hackathon数据 接口声明
 *
 * @interface Hackathon
 */
 export interface Hackathon {
    "hackathon_id": string;
    "title": string;
    "date": string;
    "description": string;
    "sponsored": string;
    "status": string;
    "image": string;
    "discord_url": string;
}
    
/**
 * 获取黑客松活动不同状态的活动总数量
 *
 * @export
 * @return {*}  {Promise<HackathonStatus>}
 */
export function fetchStatusCount(): Promise<HackathonStatus> {
    return request.post(`/hackathon/count`).then((res) => res.data.data);
}

/**
 * 获取黑客松活动列表数据
 *
 * @export
 * @return {*}  {Promise<Hackathon[]>}
 */
export function fetchAll(): Promise<Hackathon[]> {
    const params = {
        "page_no": 1,
        "page_size": 10,
        "status": ''
    };
    return request.post(`/hackathon/query`, params).then((res) => res.data.data.records);
}

/**
 * 获取黑客松活动列表数据根据status
 *
 * @export
 * @return {*}  {Promise<Hackathon[]>}
 */
 export function fetchAllByStatus(status: string): Promise<Hackathon[]> {
    const params = {
        "page_no": 1,
        "page_size": 10,
        "status": status
    };
    return request.post(`/hackathon/query`, params).then((res) => res.data.data.records);
}
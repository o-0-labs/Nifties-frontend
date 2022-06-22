export interface Grant {
  status: number;
  funded_total_ammount: bigint;
  owner: string;
  name: string;
  end_time: bigint;
  begin_time: bigint;
  total_ammount: bigint;
  min_ammount: bigint;
  grants_id?: string;
  contract_address?: string;
}
export type AddGrantResult = { Ok: number } | { Err: string };

export interface FunderRecord {
  fund_time: bigint;
  fund_ammount: bigint;
}

export interface Funder {
  fund_total_ammount: bigint;
  funder_records: Array<FunderRecord>;
  funder: string;
  last_fund_time: bigint;
}

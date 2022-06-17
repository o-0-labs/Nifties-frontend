export const idlFactory = ({ IDL }) => {
  const CrowdArgs = IDL.Record({
    'status' : IDL.Nat8,
    'funded_total_ammount' : IDL.Nat64,
    'owner' : IDL.Text,
    'name' : IDL.Text,
    'end_time' : IDL.Nat64,
    'begin_time' : IDL.Nat64,
    'total_ammount' : IDL.Nat64,
    'min_ammount' : IDL.Nat64,
  });
  const CrowdResult = IDL.Variant({ 'Ok' : IDL.Nat8, 'Err' : IDL.Text });
  const FunderRecord = IDL.Record({
    'fund_time' : IDL.Nat64,
    'fund_ammount' : IDL.Nat64,
  });
  const Funder = IDL.Record({
    'fund_total_ammount' : IDL.Nat64,
    'funder_records' : IDL.Vec(FunderRecord),
    'funder' : IDL.Text,
    'last_fund_time' : IDL.Nat64,
  });
  return IDL.Service({
    'create_crowd' : IDL.Func([CrowdArgs], [CrowdResult], []),
    'fund' : IDL.Func([IDL.Nat64], [IDL.Nat8], []),
    'get_crowd' : IDL.Func([], [CrowdArgs], ['query']),
    'get_funder' : IDL.Func([IDL.Text], [IDL.Opt(Funder)], []),
    'get_funders' : IDL.Func([], [IDL.Vec(Funder)], []),
    'greet' : IDL.Func([IDL.Text], [IDL.Text], ['query']),
    'token_transfer' : IDL.Func([], [IDL.Text], []),
  });
}
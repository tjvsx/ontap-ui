import { useMemo } from "react";
import { useGem } from "./useGem";
import { useEthers, useLogs } from "@usedapp/core";
import { DetailedEventRecord } from "@usedapp/core/dist/esm/src/model/types";

export function useCommits() {
  
  const gem = useGem();
  // console.log('asdf', gem)


  const logs = useLogs(
    {
      contract: gem,
      event: 'Commit',
      args: [],
    },
    {
      fromBlock: 0,
      toBlock: 'latest',
    }
  );
  console.log('asdf', logs)

  let accounts = [];
  let _owner, _title, _upgrade;
  
  if (logs) {
      for (let log of logs.value) {
        _owner = log.data[0];
        _title = log.data[1];
        _upgrade = log.data[2];

        let owners = accounts.map(o => o.name);
        if(!owners.includes(_owner)) {
          accounts.push({
            name: _owner,
            files: [{
              name: _title,
              files: [_upgrade]
            }]
          })

        } else {
          for (let account of accounts) {

            let titles = account.files.map(o => o.name);

            if(!titles.includes(_title)) {
              account.files.push({
                name: _title,
                files: [_upgrade]
              })

            } else {
              for (let repo of account.files) {
                if (repo.name == _title) {
                  repo.files.push(_upgrade)
                }
              }
            }
          }
        }
  }

  console.log('asdfb', accounts)
  // console.log('asdf', tree)

  return accounts;
  }
}
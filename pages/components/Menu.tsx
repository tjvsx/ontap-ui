import React from "react";
import { useEthers } from '@usedapp/core'

function getRepo(files){
  console.log(`asdf generating repo upgrades ${files}`)
}

interface TreeNode {
  name: string,
  files: TreeNode[] | string[]
}
const TreeNode:React.FunctionComponent<TreeNode> = ({name, files}) => {

  const [expanded, setExpanded] = React.useState(true);

  let nodes: {};
  if (files && expanded && typeof files[0] != 'string') {
    nodes = files.map((i) => 
      <div onClick={()=> getRepo(i.files)}>{i.name}</div>)
  }

  return (
    <li>
      <div onClick={()=>setExpanded(!expanded)}>{name}</div>
      <ul>{nodes}</ul>
    </li>
  );
}

export interface MenuProps {
  data: TreeNode[]
}

const Menu: React.FunctionComponent<MenuProps> = ({data}) => {    

  const {account} = useEthers();
  
  let nodes = account? (data? data.map((i) => <TreeNode name={i.name} files={i.files} />) : <div>Loading...</div>) : <div>Not connected</div>
  
  return (
    <div>

      <ul>{nodes}</ul>

      <style jsx>{`
        div {
          position: relative;
          overflow:hidden;
          height: 100vh;
          overflow: scroll;
          whitespace: nowrap;
          margin: auto;
        }
        ul {
          position: absolute;
          height: 100%;
          list-style: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

export default Menu;
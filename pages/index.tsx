import Head from "next/head";
import Menu from "./components/Menu";
import { SplitView } from "./components/SplitView";
import { useEthers } from "@usedapp/core";
import { Wallet } from "./components/Wallet";
import { Contract } from '@ethersproject/contracts'
import { useLogs } from "@usedapp/core";
import { constants } from 'ethers';
import networkMapping from '../contracts/deployments/map.json';
import { useCommits } from "../hooks/useCommits";

function Home() {
  // const mock = [
  //   {
  //     name: 'Bob.eth',
  //     files: [
  //       {
  //         name: 'Greeter Add',
  //         files: [
  //           { name: "0xwertyuidfghjk3456789dfghjk3456789xyz" }
  //         ]
  //       },
  //       {
  //         name: 'Greeter Remove',
  //         files: [
  //           { name: "0xwertyuidfsdfghjkjhgfdfghjk3456789qrt"},
  //           { name: "0xdfghjklkgfghjkjhgfdfghjkjhgffgh89abc"}
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     name: 'Jen.eth',
  //     files: [
  //       {
  //         name: 'Greeter Add',
  //         files: [
  //           { name: "0xwertyuidfghjk3456789dfghjk3456789xyz" }
  //         ]
  //       },
  //       {
  //         name: 'Greeter Remove',
  //         files: [
  //           { name: "0xwertyuidfsdfghjkjhgfdfghjk3456789qrt"},
  //           { name: "0xdfghjklkgfghjkjhgfdfghjkjhgffgh89abc"}
  //         ]
  //       }
  //     ]
  //   },
  // ];

  const data = useCommits();

  console.log('asdfd', data);

  return (
    <div>
      <Head>
        <title>Upgrade UI Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section>
          <SplitView
            left={<div>Generated ABI</div>}
            right={<Menu data={data} />}
          />
        </section>
      </main>

      <style jsx>{`
        section {
          background: aliceblue;
          height: 100%;
          z-index: 1;
        }
        main {
          height: 100vh;
          width: 100%;
        }
      `}</style>

      <style jsx global>{`
        html {
          height:100vh;
          overflow:hidden;
        }
        body {
          margin:0;top:0;right:0;bottom:0;left:0;
          position:absolute;
          overflow:auto;
        }
      `}</style>
    </div>
  );
}

export default Home;

"use client"

import React, { useState } from "react"

import axios from "axios"
import { Abi } from "viem"

interface ISources {
  [key: `${string}.sol`]: {
    content: string
  }
}

interface IPresent {
  name: string
  abi: Abi
  bytecode: string
  opcode: string
  sourceMap: string
  metadata: Record<string, unknown>
}

const CompilePage = () => {
  const [sources, setSources] = useState<ISources>({
    "SimpleStorage.sol": {
      content: `
        // SPDX-License-Identifier: MIT

        import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

        pragma solidity ^0.8.0;

        contract SimpleStorage {
          uint256 private _value;

          function setValue(uint256 value) public {
            _value = value;
          }

          function getValue() public view returns (uint256) {
            return _value;
          }
        }
      `,
    },
  })

  const [output, setOutput] = useState<Array<IPresent>>([])
  const [error, setError] = useState<string | null>(null)

  const compileContract = async () => {
    try {
      // Use Axios to send the sources to the API for compilation
      const response = await axios.post("/api/contract/compile", { sources })

      const data = response.data

      if (!response.status || !data.compiled) {
        throw new Error(data.error || "Failed to compile contract")
      }

      // Extract ABI and bytecode
      const compiled = data.compiled as ICompilerOutput

      console.log("Compiled:", { compiled })

      const res: IPresent[] = []
      Object.keys(compiled.contracts).forEach((key) => {
        const contract = compiled.contracts[key as keyof typeof compiled.contracts][
          key.replace(".sol", "")
        ] as ICompilerOutput["contracts"][`${string}.sol`][string]

        console.log("Contract:", { contract })

        if (!contract) {
          return
        }

        res.push({
          name: key,
          abi: contract.abi,
          bytecode: contract.evm.bytecode.object,
          opcode: contract.evm.bytecode.opcodes,
          sourceMap: contract.evm.bytecode.sourceMap,
          metadata: contract.metadata ? JSON.parse(contract.metadata) : {},
        })
      })
      setOutput(res)
      setError(null)
    } catch (e) {
      console.error("Compilation error:", e)
      setError("Failed to compile contract")
    }
  }

  return (
    <div className="flex flex-col gap-4 p-4 pt-32">
      {JSON.stringify(sources)}
      <button
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick={compileContract}
      >
        Compile
      </button>

      {error && <div className="text-red-500">{error}</div>}

      {/* Outputs */}
      {output.map((contract, index) => (
        <div
          key={index}
          className="rounded border border-gray-300 p-4"
        >
          <div className="text-lg font-bold">{contract.name}</div>
          <div className="text-sm text-gray-500">ABI</div>
          <pre>{JSON.stringify(contract.abi, null, 2)}</pre>
          <div className="text-sm text-gray-500">Bytecode</div>
          <pre>{contract.bytecode}</pre>
          <div className="text-sm text-gray-500">Opcode</div>
          <pre>{contract.opcode}</pre>
          <div className="text-sm text-gray-500">Source Map</div>
          <pre>{contract.sourceMap}</pre>
          <div className="text-sm text-gray-500">Metadata</div>
          <pre>{JSON.stringify(contract.metadata, null, 2)}</pre>
        </div>
      ))}
    </div>
  )
}

export default CompilePage

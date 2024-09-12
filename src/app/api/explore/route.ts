import { NextRequest, NextResponse } from "next/server"

import fs from "fs"
import path from "path"

export const POST = async (req: NextRequest) => {
  const { contract } = await req.json()

  if (!contract || typeof contract !== "string") {
    return NextResponse.json({ error: "Contract query parameter is required and must be a string" }, { status: 400 })
  }

  try {
    const contractPath = path.resolve(process.cwd(), "src", `${contract}.sol`)
    if (!fs.existsSync(contractPath)) {
      return NextResponse.json({ error: "Contract not found" }, { status: 404 })
    }

    const contractData = fs.readFileSync(contractPath, "utf-8")
    return NextResponse.json(JSON.stringify(contractData), { status: 200 })
  } catch (error: IError) {
    console.error(error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
